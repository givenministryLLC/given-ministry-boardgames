'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
    // Placeholder cart items - will be managed with context/state later
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Settlers of Catan',
            price: 49.99,
            quantity: 1,
            handle: 'settlers-of-catan'
        },
        {
            id: 2,
            name: 'Ticket to Ride',
            price: 39.99,
            quantity: 2,
            handle: 'ticket-to-ride'
        }
    ]);

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
        // This will redirect to Shopify checkout later
        alert('Redirecting to Shopify checkout...');
    };

    if (cartItems.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
                <p className="text-gray-600 mb-8">Your cart is empty</p>
                <Link
                    href="/games"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

            {/* Cart Items */}
            <div className="space-y-4 mb-8">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <div className="bg-gray-200 w-20 h-20 rounded"></div>

                        <div className="flex-1">
                            <Link href={`/games/${item.handle}`} className="font-semibold hover:text-blue-600">
                                {item.name}
                            </Link>
                            <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                            >
                                -
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>

                        <div className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                        </div>

                        <button
                            onClick={() => updateQuantity(item.id, 0)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t pt-6">
                <div className="max-w-md ml-auto">
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping:</span>
                            <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        {shipping > 0 && (
                            <p className="text-sm text-gray-600">Free shipping on orders over $50</p>
                        )}
                        <div className="flex justify-between font-bold text-lg border-t pt-2">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
                    >
                        Proceed to Checkout
                    </button>

                    <Link
                        href="/games"
                        className="block text-center text-blue-600 hover:text-blue-700"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}