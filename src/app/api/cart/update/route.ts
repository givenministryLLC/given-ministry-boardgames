// src/app/api/cart/update/route.ts
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export async function POST(request: Request) {
    try {
        const { cartId, lines } = await request.json();

        const client = createStorefrontApiClient({
            storeDomain: `https://${process.env.SHOPIFY_STORE_DOMAIN}`,
            apiVersion: '2025-10',
            publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        });

        const mutation = `
            mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
                cartLinesUpdate(cartId: $cartId, lines: $lines) {
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
            variables: { cartId, lines }
        });

        if (result.data.cartLinesUpdate.userErrors.length > 0) {
            return Response.json({
                success: false,
                errors: result.data.cartLinesUpdate.userErrors
            }, { status: 400 });
        }

        return Response.json({
            success: true,
            cart: result.data.cartLinesUpdate.cart
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: 'Failed to process request'
        }, { status: 500 });
    }
}