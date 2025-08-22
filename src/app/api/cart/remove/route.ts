// src/app/api/cart/remove/route.ts
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export async function POST(request: Request) {
    try {
        const { cartId, lineIds } = await request.json();

        const client = createStorefrontApiClient({
            storeDomain: `https://${process.env.SHOPIFY_STORE_DOMAIN}`,
            apiVersion: '2024-10',
            publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        });

        const mutation = `
            mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
                cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
                    cart {
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
                    userErrors {
                        field
                        message
                    }
                }
            }
        `;

        const result = await client.request(mutation, {
            variables: { cartId, lineIds }
        });

        if (result.data.cartLinesRemove.userErrors.length > 0) {
            return Response.json({
                success: false,
                errors: result.data.cartLinesRemove.userErrors
            }, { status: 400 });
        }

        return Response.json({
            success: true,
            cart: result.data.cartLinesRemove.cart
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}