'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
    Menu,
    X,
    ShoppingCart,
    Home,
    Gamepad2,
    HelpCircle,
    Shield
} from 'lucide-react';
import { companyConfig } from '@/config/company';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-warm-cream shadow-lg border-b-2 border-sage-green/40 sticky top-0 z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Enhanced Logo with Icon */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-amber-700 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-200 shadow-md">
                            <Gamepad2 className="w-6 h-6 text-warm-cream" />
                        </div>
                        <div>
                            <span className="text-xl font-bold text-amber-700 group-hover:text-amber-800 transition-colors">
                                {companyConfig.name.split(' ')[0]} {companyConfig.name.split(' ')[1]}
                            </span>
                            <div className="text-sm text-deep-brown/70 -mt-1">{companyConfig.name.split(' ')[2]}</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation with Icons */}
                    <nav className="hidden md:flex space-x-6">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 text-deep-brown hover:text-amber-700 transition-all duration-200 hover:scale-105 group"
                        >
                            <Home className="w-4 h-4 group-hover:animate-pulse" />
                            <span>Home</span>
                        </Link>
                        <Link
                            href="/games"
                            className="flex items-center space-x-2 text-deep-brown hover:text-amber-700 transition-all duration-200 hover:scale-105 group"
                        >
                            <Gamepad2 className="w-4 h-4 group-hover:animate-pulse" />
                            <span>Games</span>
                        </Link>
                        <Link
                            href="/faq"
                            className="flex items-center space-x-2 text-deep-brown hover:text-amber-700 transition-all duration-200 hover:scale-105 group"
                        >
                            <HelpCircle className="w-4 h-4 group-hover:animate-pulse" />
                            <span>FAQ</span>
                        </Link>
                        <Link
                            href="/policies"
                            className="flex items-center space-x-2 text-deep-brown hover:text-amber-700 transition-all duration-200 hover:scale-105 group"
                        >
                            <Shield className="w-4 h-4 group-hover:animate-pulse" />
                            <span>Policies</span>
                        </Link>
                    </nav>

                    {/* Cart and Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/cart"
                            className="relative group flex items-center space-x-2 text-deep-brown hover:text-amber-700 transition-all duration-200 hover:scale-105"
                        >
                            <div className="relative">
                                <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
                                {/* Cart badge */}
                                <span className="absolute -top-2 -right-2 bg-amber-700 text-warm-cream text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                                    2
                                </span>
                            </div>
                            <span className="hidden sm:inline">Cart</span>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-deep-brown hover:text-amber-700 p-2 rounded-lg hover:bg-sage-green/10 transition-all duration-200"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Enhanced Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-sage-green/30 bg-white/90 backdrop-blur-sm rounded-b-lg shadow-lg">
                        <div className="flex flex-col space-y-3">
                            <Link
                                href="/"
                                className="flex items-center space-x-3 text-deep-brown hover:text-amber-700 py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Home className="w-5 h-5" />
                                <span>Home</span>
                            </Link>
                            <Link
                                href="/games"
                                className="flex items-center space-x-3 text-deep-brown hover:text-amber-700 py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Gamepad2 className="w-5 h-5" />
                                <span>Games</span>
                            </Link>
                            <Link
                                href="/faq"
                                className="flex items-center space-x-3 text-deep-brown hover:text-amber-700 py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <HelpCircle className="w-5 h-5" />
                                <span>FAQ</span>
                            </Link>
                            <Link
                                href="/policies"
                                className="flex items-center space-x-3 text-deep-brown hover:text-amber-700 py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Shield className="w-5 h-5" />
                                <span>Policies</span>
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}