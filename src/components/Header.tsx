'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-warm-cream shadow-sm border-b border-sage-green/30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-amber-700">
                        Robin Perkins Boardgames
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-deep-brown hover:text-amber-700 transition-colors">
                            Home
                        </Link>
                        <Link href="/games" className="text-deep-brown hover:text-amber-700 transition-colors">
                            Games
                        </Link>
                        <Link href="/about" className="text-deep-brown hover:text-amber-700 transition-colors">
                            About & Contact
                        </Link>
                        <Link href="/faq" className="text-deep-brown hover:text-amber-700 transition-colors">
                            FAQ
                        </Link>
                        <Link href="/policies" className="text-deep-brown hover:text-amber-700 transition-colors">
                            Policies
                        </Link>
                    </nav>

                    {/* Cart and Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/cart"
                            className="text-deep-brown hover:text-amber-700 transition-colors flex items-center"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7" />
                            </svg>
                            <span className="ml-1 hidden sm:inline">Cart</span>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-deep-brown hover:text-amber-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-sage-green/30">
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className="text-deep-brown hover:text-amber-700 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/games"
                                className="text-deep-brown hover:text-amber-700 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Games
                            </Link>
                            <Link
                                href="/about"
                                className="text-deep-brown hover:text-amber-700 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About & Contact
                            </Link>
                            <Link
                                href="/faq"
                                className="text-deep-brown hover:text-amber-700 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                FAQ
                            </Link>
                            <Link
                                href="/policies"
                                className="text-deep-brown hover:text-amber-700 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Policies
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
} 