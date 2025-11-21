// src/app/api/product/[handle]/route.ts
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Define interfaces for type safety
interface ShopifyImage {
    node: {
        url: string;
        altText: string | null;
    };
}

interface ShopifyVariant {
    node: {
        id: string;
        availableForSale: boolean;
        quantityAvailable: number;
    };
}

interface ShopifyProductDetail {
    id: string;
    title: string;
    handle: string;
    description: string | null;
    descriptionHtml: string | null;
    priceRange: {
        minVariantPrice: {
            amount: string;
            currencyCode: string;
        };
    };
    images: {
        edges: ShopifyImage[];
    };
    variants: {
        edges: ShopifyVariant[];
    };
}

interface ShopifyProductResponse {
    data: {
        product: ShopifyProductDetail | null;
    };
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ handle: string }> }
) {
    try {
        const { handle } = await params;

        const client = createStorefrontApiClient({
            storeDomain: `https://${process.env.SHOPIFY_STORE_DOMAIN}`,
            apiVersion: '2025-10',
            publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        });

        const query = `
            query getProduct($handle: String!) {
                product(handle: $handle) {
                    id
                    title
                    handle
                    description
                    descriptionHtml
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    images(first: 10) {
                        edges {
                            node {
                                url
                                altText
                            }
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
                }
            }
        `;

        const result = await client.request(query, {
            variables: { handle }
        }) as ShopifyProductResponse;

        if (!result.data.product) {
            return Response.json({
                success: false,
                error: 'Product not found'
            }, { status: 404 });
        }

        const product = result.data.product;

        return Response.json({
            success: true,
            product: {
                id: product.id,
                title: product.title,
                handle: product.handle,
                description: product.descriptionHtml || product.description || '',
                price: product.priceRange.minVariantPrice.amount,
                currency: product.priceRange.minVariantPrice.currencyCode,
                inStock: product.variants.edges[0]?.node.availableForSale || false,
                quantity: product.variants.edges[0]?.node.quantityAvailable || 0,
                variantId: product.variants.edges[0]?.node.id || '',
                images: product.images.edges.map((edge: ShopifyImage) => ({
                    url: edge.node.url,
                    alt: edge.node.altText || product.title
                }))
            }
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return Response.json({
            success: false,
            error: errorMessage
        }, { status: 500 });
    }
}