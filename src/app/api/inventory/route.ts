// src/app/api/inventory/route.ts
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

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
                        }
                    }
                }
            }
        `;

        const result = await client.request(query);

        return Response.json({
            success: true,
            productCount: result.data.products.edges.length,
            products: result.data.products.edges.map((edge: any) => ({
                id: edge.node.id,
                title: edge.node.title,
                handle: edge.node.handle,
                price: edge.node.priceRange.minVariantPrice.amount,
                currency: edge.node.priceRange.minVariantPrice.currencyCode,
                inStock: edge.node.variants.edges[0]?.node.availableForSale || false,
                quantity: edge.node.variants.edges[0]?.node.quantityAvailable || 0
            }))
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}