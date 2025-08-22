import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
    storeDomain: `https://${process.env.SHOPIFY_STORE_DOMAIN}`,
    apiVersion: '2024-10',
    publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export async function shopifyFetch<T>({
    query,
    variables = {},
}: {
    query: string;
    variables?: Record<string, any>;
}): Promise<T> {
    try {
        const result = await client.request(query, { variables });
        return result.data as T;
    } catch (error) {
        console.error('Shopify fetch error:', error);
        throw error;
    }
}

// Get all products
export const GET_PRODUCTS = `
  query getProducts($first: Int!) {
    products(first: $first) {
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
          images(first: 5) {
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
    }
  }
`;

// Get single product by handle
export const GET_PRODUCT = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
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

// Create cart
export const CREATE_CART = `
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

// Add items to cart
export const ADD_TO_CART = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
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
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Types for TypeScript
export interface ShopifyProduct {
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
    images: {
        edges: Array<{
            node: {
                url: string;
                altText: string;
            };
        }>;
    };
    variants: {
        edges: Array<{
            node: {
                id: string;
                availableForSale: boolean;
                quantityAvailable?: number;
            };
        }>;
    };
}

export interface ShopifyCart {
    id: string;
    checkoutUrl: string;
    totalQuantity: number;
    estimatedCost: {
        totalAmount: {
            amount: string;
            currencyCode: string;
        };
    };
}