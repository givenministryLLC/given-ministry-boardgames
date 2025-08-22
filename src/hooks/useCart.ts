'use client';

import { useState, useEffect } from 'react';
import { shopifyFetch, CREATE_CART, ADD_TO_CART, ShopifyCart } from '@/lib/shopify';

export function useCart() {
    const [cart, setCart] = useState<ShopifyCart | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Create cart on mount
    useEffect(() => {
        createCart();
    }, []);

    const createCart = async () => {
        try {
            const result = await shopifyFetch<any>({
                query: CREATE_CART,
                variables: { input: {} }
            });

            if (result.cartCreate.cart) {
                setCart(result.cartCreate.cart);
                // Store cart ID in localStorage for persistence
                localStorage.setItem('shopify-cart-id', result.cartCreate.cart.id);
            }
        } catch (error) {
            console.error('Error creating cart:', error);
        }
    };

    const addToCart = async (variantId: string, quantity: number = 1) => {
        if (!cart) {
            await createCart();
            return;
        }

        setIsLoading(true);
        try {
            const result = await shopifyFetch<any>({
                query: ADD_TO_CART,
                variables: {
                    cartId: cart.id,
                    lines: [{ merchandiseId: variantId, quantity }]
                }
            });

            if (result.cartLinesAdd.cart) {
                setCart(result.cartLinesAdd.cart);
            }

            if (result.cartLinesAdd.userErrors.length > 0) {
                console.error('Cart errors:', result.cartLinesAdd.userErrors);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const goToCheckout = () => {
        if (cart?.checkoutUrl) {
            window.location.href = cart.checkoutUrl;
        }
    };

    return {
        cart,
        addToCart,
        goToCheckout,
        isLoading,
        createCart
    };
}