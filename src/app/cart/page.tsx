'use client';

import { useState } from 'react';
import Link from 'next/link';
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
    CheckCircle
} from 'lucide-react';

export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Settlers of Catan',
            price: 49.99,
            quantity: 1,
            handle: 'settlers-of-catan',
            category: 'Strategy'
        },
        {
            id: 2,
            name: 'Ticket to Ride',
            price: 39.99,
            quantity: 2,
            handle: 'ticket-to-ride',
            category: 'Family'
        }
    ]);

    const [promoCode, setPromoCode] = useState('');

    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity === 0) {
            setCartItems(items => items.filter(item => item.id !== id));
        } else {
            setCartItems(items =>
                items.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 9.99;
    const total = subtotal + shipping;

    const handleCheckout = () => {
        alert('Redirecting to Shopify checkout...');
    };

    if (cartItems.length === 0) {
        return (
            <div className="bg-warm-cream min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                    <div className="bg-white p-12 rounded-xl shadow-lg border border-sage-green/20">
                        <div className="bg-sage-green/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingCart className="w-12 h-12 text-sage-green" />
                        </div>
                        <h1 className="text-3xl font-bold mb-4 text-deep-brown">Your Cart is Empty</h1>
                        <p className="text-deep-brown/70 mb-8">Looks like you haven't added any games yet. Let's fix that!</p>
                        <Link
                            href="/games"
                            className="inline-flex items-center space-x-2 bg-amber-700 text-warm-cream px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-warm-cream min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Enhanced Header */}
                <div className="flex items-center space-x-3 mb-8">
                    <div className="bg-amber-700 p-2 rounded-lg">
                        <ShoppingCart className="w-6 h-6 text-warm-cream" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-deep-brown">Your Cart</h1>
                        <p className="text-deep-brown/70">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-xl shadow-lg border border-sage-green/20 hover:shadow-xl transition-shadow">
                                <div className="flex items-center gap-6">
                                    <div className="bg-gradient-to-br from-sage-green/20 to-amber-100 w-24 h-24 rounded-lg border border-sage-green/30 flex-shrink-0"></div>

                                    <div className="flex-1 min-w-0">
                                        <Link href={`/games/${item.handle}`} className="group">
                                            <h3 className="font-semibold text-lg text-deep-brown group-hover:text-amber-700 transition-colors mb-1">
                                                {item.name}
                                            </h3>
                                        </Link>
                                        <div className="flex items-center space-x-3 text-sm text-deep-brown/60 mb-3">
                                            <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium">
                                                {item.category}
                                            </span>
                                            <span>${item.price.toFixed(2)} each</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center border border-sage-green/30 rounded-lg">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 hover:bg-sage-green/10 transition-colors rounded-l-lg"
                                                >
                                                    <Minus className="w-4 h-4 text-deep-brown" />
                                                </button>
                                                <span className="px-4 py-2 text-deep-brown font-medium min-w-[3rem] text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 hover:bg-sage-green/10 transition-colors rounded-r-lg"
                                                >
                                                    <Plus className="w-4 h-4 text-deep-brown" />
                                                </button>
                                            </div>

                                            <div className="text-right">
                                                <div className="font-bold text-xl text-gold">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 0)}
                                                    className="flex items-center space-x-1 text-red-600 hover:text-red-800 transition-colors text-sm mt-1"
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
                                className="inline-flex items-center space-x-2 text-amber-700 hover:text-amber-800 font-medium transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span>Continue Shopping</span>
                            </Link>
                        </div>
                    </div>

                    {/* Enhanced Order Summary */}
                    <div className="space-y-6">
                        {/* Promo Code */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-green/20">
                            <h3 className="font-semibold text-deep-brown mb-4 flex items-center space-x-2">
                                <Tag className="w-5 h-5 text-amber-700" />
                                <span>Promo Code</span>
                            </h3>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Enter code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className="flex-1 px-3 py-2 border border-sage-green/30 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-deep-brown"
                                />
                                <button className="bg-amber-700 text-warm-cream px-4 py-2 rounded-r-lg hover:bg-amber-800 transition-colors font-medium">
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-green/20">
                            <h3 className="font-semibold text-deep-brown mb-4 flex items-center space-x-2">
                                <Gift className="w-5 h-5 text-amber-700" />
                                <span>Order Summary</span>
                            </h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-deep-brown">
                                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-deep-brown">
                                    <span>Shipping:</span>
                                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                                </div>
                                {shipping > 0 && (
                                    <div className="bg-amber-50 p-3 rounded-lg">
                                        <p className="text-sm text-amber-700 flex items-center space-x-2">
                                            <Truck className="w-4 h-4" />
                                            <span>Add ${(50 - subtotal).toFixed(2)} more for free shipping!</span>
                                        </p>
                                    </div>
                                )}
                                {shipping === 0 && (
                                    <div className="bg-sage-green/10 p-3 rounded-lg">
                                        <p className="text-sm text-sage-green flex items-center space-x-2">
                                            <CheckCircle className="w-4 h-4" />
                                            <span>You qualify for free shipping!</span>
                                        </p>
                                    </div>
                                )}
                                <div className="border-t border-sage-green/30 pt-3">
                                    <div className="flex justify-between font-bold text-lg text-deep-brown">
                                        <span>Total:</span>
                                        <span className="text-gold">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-amber-700 text-warm-cream py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group mb-4"
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
                                    <span>30-day return policy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}