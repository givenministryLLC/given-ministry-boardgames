// src/app/api/inventory/route.ts
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Define interfaces for type safety
interface ShopifyVariant {
    node: {
        id: string;
        availableForSale: boolean;
        quantityAvailable: number;
    };
}

interface ShopifyImage {
    node: {
        url: string;
        altText: string | null;
    };
}

interface ShopifyProduct {
    node: {
        id: string;
        title: string;
        handle: string;
        description: string;
        priceRange: {
            minVariantPrice: {
                amount: string;
                currencyCode: string;
            };
        };
        variants: {
            edges: ShopifyVariant[];
        };
        images: {
            edges: ShopifyImage[];
        };
    };
}

interface ShopifyProductsResponse {
    data: {
        products: {
            edges: ShopifyProduct[];
        };
    };
}

export async function GET() {
    try {
        const client = createStorefrontApiClient({
            storeDomain: `https://${process.env.SHOPIFY_STORE_DOMAIN}`,
            apiVersion: '2024-10',
            publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        });

        const query = `
            query {
                products(first: 10) {
                    edges {
                        node {
                            id
                            title
                            handle
                            description
                            priceRange {
                                minVariantPrice {
                                    amount
                                    currencyCode
                                }
                            }
                            variants(first: 1) {
                                edges {
                                    node {
                                        id
                                        availableForSale
                                        quantityAvailable
                                    }
                                }
                            }
                            images(first: 5) {
                                edges {
                                    node {
                                        url
                                        altText
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;

        const result = await client.request(query) as ShopifyProductsResponse;

        return Response.json({
            success: true,
            productCount: result.data.products.edges.length,
            products: result.data.products.edges.map((edge: ShopifyProduct) => ({
                id: edge.node.id,
                title: edge.node.title,
                handle: edge.node.handle,
                price: edge.node.priceRange.minVariantPrice.amount,
                currency: edge.node.priceRange.minVariantPrice.currencyCode,
                inStock: edge.node.variants.edges[0]?.node.availableForSale || false,
                quantity: edge.node.variants.edges[0]?.node.quantityAvailable || 0,
                images: edge.node.images.edges.map((imageEdge: ShopifyImage) => ({
                    url: imageEdge.node.url,
                    alt: imageEdge.node.altText || edge.node.title
                }))
            }))
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return Response.json({
            success: false,
            error: errorMessage
        }, { status: 500 });
    }
}