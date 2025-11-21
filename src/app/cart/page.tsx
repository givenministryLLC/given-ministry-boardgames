'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Plus,
    Minus,
    Trash2,
    ShoppingCart,
    ArrowLeft,
    Truck,
    Shield,
    Gift,
    Tag,
    CheckCircle,
    Loader2
} from 'lucide-react';
import { companyConfig } from '@/config/company';

interface CartLine {
    id: string;
    quantity: number;
    merchandise: {
        id: string;
        title: string;
        product: {
            title: string;
            handle: string;
        };
        price: {
            amount: string;
            currencyCode: string;
        };
        image?: {
            url: string;
            altText: string;
        };
    };
    estimatedCost: {
        totalAmount: {
            amount: string;
            currencyCode: string;
        };
    };
}

interface ShopifyCart {
    id: string;
    checkoutUrl: string;
    totalQuantity: number;
    estimatedCost: {
        totalAmount: {
            amount: string;
            currencyCode: string;
        };
    };
    lines: {
        edges: Array<{
            node: CartLine;
        }>;
    };
}

export default function CartPage() {
    const [cart, setCart] = useState<ShopifyCart | null>(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState<string | null>(null);

    // Get or create cart on mount
    useEffect(() => {
        initializeCart();
    }, []);

    const initializeCart = async () => {
        try {
            // Check if we have a cart ID in localStorage
            const existingCartId = localStorage.getItem('shopify-cart-id');

            if (existingCartId) {
                // Try to fetch existing cart
                const response = await fetch('/api/cart/get', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cartId: existingCartId })
                });

                const data = await response.json();
                if (data.success && data.cart) {
                    setCart(data.cart);
                    setLoading(false);
                    return;
                }
            }

            // Create new cart if no existing cart found
            const response = await fetch('/api/cart/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            });

            const data = await response.json();
            if (data.success) {
                setCart(data.cart);
                localStorage.setItem('shopify-cart-id', data.cart.id);
            }
        } catch (error) {
            console.error('Error initializing cart:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateQuantity = async (lineId: string, newQuantity: number) => {
        if (!cart) return;

        setUpdating(lineId);
        try {
            if (newQuantity === 0) {
                // Remove item
                const response = await fetch('/api/cart/remove', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cartId: cart.id, lineIds: [lineId] })
                });

                const data = await response.json();
                if (data.success) {
                    setCart(data.cart);
                    window.dispatchEvent(new Event('cartUpdated'));
                }
            } else {
                // Update quantity
                const response = await fetch('/api/cart/update', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        cartId: cart.id,
                        lines: [{ id: lineId, quantity: newQuantity }]
                    })
                });

                const data = await response.json();
                if (data.success) {
                    setCart(data.cart);
                    window.dispatchEvent(new Event('cartUpdated'));
                }
            }
        } catch (error) {
            console.error('Error updating cart:', error);
        } finally {
            setUpdating(null);
        }
    };

    const handleCheckout = () => {
        if (cart?.checkoutUrl) {
            window.location.href = cart.checkoutUrl;
        }
    };

    if (loading) {
        return (
            <div className="bg-gradient-to-br from-primary via-forest-prayer to-sanctuary-green min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-warm-cream" />
                        <span className="ml-2 text-warm-cream">Loading cart...</span>
                    </div>
                </div>
            </div>
        );
    }

    const cartItems = cart?.lines.edges || [];

    if (cartItems.length === 0) {
        return (
            <div className="bg-gradient-to-br from-primary via-forest-prayer to-sanctuary-green min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                    <div className="bg-white p-12 rounded-xl shadow-lg border border-sage-green/20">
                        <div className="bg-sage-green/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingCart className="w-12 h-12 text-sage-green" />
                        </div>
                        <h1 className="text-3xl font-bold mb-4 text-deep-brown">Your Cart is Empty</h1>
                        <p className="text-deep-brown/70 mb-8">Looks like you haven't added any games yet. Let's fix that!</p>
                        <Link
                            href="/games"
                            className="inline-flex items-center space-x-2 bg-primary text-warm-cream px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const subtotal = parseFloat(cart?.estimatedCost.totalAmount.amount || '0');
    const shipping = companyConfig.policies.standardShipping;
    const total = subtotal + shipping;

    return (
        <div className="bg-gradient-to-br from-primary via-forest-prayer to-sanctuary-green min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Enhanced Header */}
                <div className="flex items-center space-x-3 mb-8">
                    <div className="bg-warm-cream/20 p-2 rounded-lg border border-warm-cream/30">
                        <ShoppingCart className="w-6 h-6 text-mint-whisper" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-warm-cream">Your Cart</h1>
                        <p className="text-warm-cream/80">{cart?.totalQuantity || 0} {cart?.totalQuantity === 1 ? 'item' : 'items'} in your cart</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map(({ node: item }) => (
                            <div key={item.id} className="bg-white p-6 rounded-xl shadow-lg border border-sage-green/20 hover:shadow-xl transition-shadow">
                                <div className="flex items-center gap-6">
                                    <div className="bg-gradient-to-br from-sage-green/20 to-mint-whisper w-24 h-24 rounded-lg border border-sage-green/30 flex-shrink-0 overflow-hidden">
                                        {item.merchandise.image ? (
                                            <Image
                                                src={item.merchandise.image.url}
                                                alt={item.merchandise.image.altText || item.merchandise.product.title}
                                                width={96}
                                                height={96}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : null}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <Link href={`/games/${item.merchandise.product.handle}`} className="group">
                                            <h3 className="font-semibold text-lg text-deep-brown group-hover:text-primary transition-colors mb-1">
                                                {item.merchandise.product.title}
                                            </h3>
                                        </Link>
                                        <div className="flex items-center space-x-3 text-sm text-deep-brown/60 mb-3">
                                            <span>${item.merchandise.price.amount} each</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center border border-sage-green/30 rounded-lg">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 hover:bg-sage-green/10 transition-colors rounded-l-lg"
                                                    disabled={updating === item.id}
                                                >
                                                    {updating === item.id ? (
                                                        <Loader2 className="w-4 h-4 animate-spin text-deep-brown" />
                                                    ) : (
                                                        <Minus className="w-4 h-4 text-deep-brown" />
                                                    )}
                                                </button>
                                                <span className="px-4 py-2 text-deep-brown font-medium min-w-[3rem] text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 hover:bg-sage-green/10 transition-colors rounded-r-lg"
                                                    disabled={updating === item.id}
                                                >
                                                    <Plus className="w-4 h-4 text-deep-brown" />
                                                </button>
                                            </div>

                                            <div className="text-right">
                                                <div className="font-bold text-xl text-sanctuary-green">
                                                    ${item.estimatedCost.totalAmount.amount}
                                                </div>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 0)}
                                                    className="flex items-center space-x-1 text-red-600 hover:text-red-800 transition-colors text-sm mt-1"
                                                    disabled={updating === item.id}
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                    <span>Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Continue Shopping */}
                        <div className="pt-4">
                            <Link
                                href="/games"
                                className="inline-flex items-center space-x-2 text-warm-cream hover:text-mint-whisper font-medium transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-green/20">
                            <h3 className="font-semibold text-deep-brown mb-4 flex items-center space-x-2">
                                <Gift className="w-5 h-5 text-primary" />
                                <span>Order Summary</span>
                            </h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-deep-brown">
                                    <span>Subtotal ({cart?.totalQuantity} items):</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-deep-brown">
                                    <span>Shipping:</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-sage-green/30 pt-3">
                                    <div className="flex justify-between font-bold text-lg text-deep-brown">
                                        <span>Total:</span>
                                        <span className="text-sanctuary-green">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-primary text-warm-cream py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group mb-4"
                            >
                                <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Secure Checkout</span>
                            </button>

                            {/* Trust Badges */}
                            <div className="space-y-2 text-sm text-deep-brown/60">
                                <div className="flex items-center space-x-2">
                                    <Shield className="w-4 h-4 text-sage-green" />
                                    <span>Secure SSL encryption</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Truck className="w-4 h-4 text-sage-green" />
                                    <span>Fast & reliable shipping</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="w-4 h-4 text-sage-green" />
                                    <span>{companyConfig.policies.returnDays}-day return policy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}