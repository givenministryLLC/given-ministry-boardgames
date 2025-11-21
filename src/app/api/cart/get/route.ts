// src/app/api/cart/get/route.ts
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export async function POST(request: Request) {
    try {
        const { cartId } = await request.json();

        const client = createStorefrontApiClient({
            storeDomain: `https://${process.env.SHOPIFY_STORE_DOMAIN}`,
            apiVersion: '2025-10',
            publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        });

        const query = `
            query getCart($cartId: ID!) {
                cart(id: $cartId) {
                    id
                    checkoutUrl
                    totalQuantity
                    estimatedCost {
                        totalAmount {
                            amount
                            currencyCode
                        }
                    }
                    lines(first: 100) {
                        edges {
                            node {
                                id
                                quantity
                                estimatedCost {
                                    totalAmount {
                                        amount
                                        currencyCode
                                    }
                                }
                                merchandise {
                                    ... on ProductVariant {
                                        id
                                        title
                                        product {
                                            title
                                            handle
                                        }
                                        price {
                                            amount
                                            currencyCode
                                        }
                                        image {
                                            url
                                            altText
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;

        const result = await client.request(query, {
            variables: { cartId }
        });

        return Response.json({
            success: true,
            cart: result.data.cart
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: 'Failed to process request'
        }, { status: 500 });
    }
}