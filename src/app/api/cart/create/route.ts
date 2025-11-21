// src/app/api/cart/create/route.ts
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export async function POST() {
    try {
        const client = createStorefrontApiClient({
            storeDomain: `https://${process.env.SHOPIFY_STORE_DOMAIN}`,
            apiVersion: '2025-10',
            publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
        });

        const mutation = `
            mutation cartCreate($input: CartInput!) {
                cartCreate(input: $input) {
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
            variables: { input: {} }
        });

        if (result.data.cartCreate.userErrors.length > 0) {
            return Response.json({
                success: false,
                errors: result.data.cartCreate.userErrors
            }, { status: 400 });
        }

        return Response.json({
            success: true,
            cart: result.data.cartCreate.cart
        });
    } catch {
        return Response.json({
            success: false,
            error: 'Failed to process request'
        }, { status: 500 });
    }
}