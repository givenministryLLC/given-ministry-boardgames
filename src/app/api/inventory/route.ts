import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Define interfaces for type safety
interface ShopifyVariant {
    node: {
        id: string;
        availableForSale: boolean;
        quantityAvailable: number;
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
        featuredImage: {
            url: string;
            altText: string | null;
        } | null;
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
            apiVersion: '2025-10',
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
                            featuredImage {
                                url
                                altText
                            }
                        }
                    }
                }
            }
        `;

        const result = await client.request(query) as any;

        // Check for errors in the response
        if (result.errors) {
            const errorMessage = result.errors.networkStatusCode === 402
                ? 'Shopify store payment required. Please check your Shopify billing settings.'
                : result.errors.message || 'Shopify API error';

            return Response.json({
                success: false,
                error: errorMessage
            }, { status: result.errors.networkStatusCode || 500 });
        }

        if (!result.data?.products) {
            return Response.json({
                success: false,
                error: 'Unexpected response from Shopify'
            }, { status: 500 });
        }

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
                featuredImage: edge.node.featuredImage ? {
                    url: edge.node.featuredImage.url,
                    alt: edge.node.featuredImage.altText || edge.node.title
                } : null
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