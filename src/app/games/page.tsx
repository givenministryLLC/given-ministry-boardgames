'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowUpDown,
    ArrowUp,
    ArrowDown,
    Grid3X3,
    List,
    Sparkles,
    Loader2
} from 'lucide-react';

interface ShopifyProduct {
    id: string;
    title: string;
    handle: string;
    price: string;
    currency: string;
    inStock: boolean;
    quantity: number;
    featuredImage: {
        url: string;
        alt: string;
    } | null;
}

export default function GamesPage() {
    const [products, setProducts] = useState<ShopifyProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Fetch products from Shopify
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('/api/inventory');
                const data = await response.json();
                if (data.success) {
                    setProducts(data.products);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    // Sort products
    const sortedProducts = [...products].sort((a, b) => {
        let comparison = 0;
        if (sortBy === 'price') {
            comparison = parseFloat(a.price) - parseFloat(b.price);
        } else if (sortBy === 'name') {
            comparison = a.title.localeCompare(b.title);
        }
        return sortOrder === 'desc' ? -comparison : comparison;
    });

    const toggleSortOrder = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    if (loading) {
        return (
            <div className="bg-warm-cream min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-amber-700" />
                        <span className="ml-2 text-deep-brown">Loading games...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-warm-cream min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Enhanced Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-deep-brown flex items-center space-x-3">
                            <div className="bg-amber-700 p-2 rounded-lg">
                                <Grid3X3 className="w-8 h-8 text-warm-cream" />
                            </div>
                            <span>Board Games</span>
                        </h1>
                        <p className="text-deep-brown/70 mt-2">Discover your next favorite game from our curated collection</p>
                    </div>

                    {/* Controls grouped together */}
                    <div className="hidden md:flex flex-col items-end space-y-3">
                        {/* Sort Controls */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-deep-brown/70 font-medium">Sort:</span>
                            <div className="flex border border-sage-green/30 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setSortBy('name')}
                                    className={`px-3 py-2 text-sm transition-colors ${sortBy === 'name' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                        }`}
                                >
                                    Name
                                </button>
                                <button
                                    onClick={() => setSortBy('price')}
                                    className={`px-3 py-2 text-sm transition-colors ${sortBy === 'price' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                        }`}
                                >
                                    Price
                                </button>
                            </div>
                            <button
                                onClick={toggleSortOrder}
                                className="p-2 border border-sage-green/30 rounded-lg bg-white hover:bg-sage-green/10 transition-colors"
                                title={sortOrder === 'asc' ? 'Sort descending' : 'Sort ascending'}
                            >
                                {sortOrder === 'asc' ? (
                                    <ArrowUp className="w-4 h-4 text-deep-brown" />
                                ) : (
                                    <ArrowDown className="w-4 h-4 text-deep-brown" />
                                )}
                            </button>
                        </div>

                        {/* View Toggle */}
                        <div className="flex border border-sage-green/30 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 transition-colors ${viewMode === 'grid' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                    }`}
                            >
                                <Grid3X3 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 transition-colors ${viewMode === 'list' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                    }`}
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden bg-white p-4 rounded-xl shadow-lg border border-sage-green/20 mb-8">
                    <div className="flex flex-col space-y-4">
                        {/* Mobile Sort */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-deep-brown/70 font-medium">Sort by:</span>
                            <div className="flex items-center space-x-2">
                                <div className="flex border border-sage-green/30 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => setSortBy('name')}
                                        className={`px-3 py-2 text-sm transition-colors ${sortBy === 'name' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                            }`}
                                    >
                                        Name
                                    </button>
                                    <button
                                        onClick={() => setSortBy('price')}
                                        className={`px-3 py-2 text-sm transition-colors ${sortBy === 'price' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                            }`}
                                    >
                                        Price
                                    </button>
                                </div>
                                <button
                                    onClick={toggleSortOrder}
                                    className="p-2 border border-sage-green/30 rounded-lg bg-white hover:bg-sage-green/10 transition-colors"
                                >
                                    {sortOrder === 'asc' ? (
                                        <ArrowUp className="w-4 h-4 text-deep-brown" />
                                    ) : (
                                        <ArrowDown className="w-4 h-4 text-deep-brown" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Mobile View Toggle */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-deep-brown/70 font-medium">View:</span>
                            <div className="flex border border-sage-green/30 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                        }`}
                                >
                                    <Grid3X3 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-amber-700 text-warm-cream' : 'bg-white text-deep-brown hover:bg-sage-green/10'
                                        }`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Games Grid with Images */}
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sortedProducts.map((product) => (
                            <Link key={product.id} href={`/games/${product.handle}`}>
                                <div className="group bg-white border border-sage-green/30 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
                                    {/* Game Image with Shopify images */}
                                    <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
                                        {product.featuredImage ? (
                                            <Image
                                                src={product.featuredImage.url}
                                                alt={product.featuredImage.alt}
                                                fill
                                                className="object-cover transition-opacity duration-300"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-sage-green/20 to-amber-100" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-amber-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-deep-brown flex items-center space-x-1">
                                            <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                            <span>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                                        </div>
                                    </div>

                                    {/* Game Info */}
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between">
                                            <h3 className="font-semibold text-deep-brown group-hover:text-amber-700 transition-colors">{product.title}</h3>
                                        </div>

                                        <div className="flex items-center justify-between pt-2 border-t border-sage-green/20">
                                            <p className="text-xl font-bold text-gold">${product.price}</p>
                                            <span className="text-sm text-deep-brown/60">
                                                Qty: {product.quantity}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    // List View with Images
                    <div className="space-y-4">
                        {sortedProducts.map((product) => (
                            <Link key={product.id} href={`/games/${product.handle}`}>
                                <div className="group bg-white border border-sage-green/30 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    <div className="flex items-center space-x-6">
                                        <div className="relative w-24 h-24 rounded-lg flex-shrink-0 overflow-hidden">
                                            {product.featuredImage ? (
                                                <Image
                                                    src={product.featuredImage.url}
                                                    alt={product.featuredImage.alt}
                                                    fill
                                                    className="object-cover"
                                                    sizes="96px"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-sage-green/20 to-amber-100" />
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-xl font-semibold text-deep-brown group-hover:text-amber-700 transition-colors">{product.title}</h3>
                                                <div className="flex items-center space-x-4">
                                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                                                    </span>
                                                    <p className="text-2xl font-bold text-gold">${product.price}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="text-sm text-deep-brown/60">
                                                    Quantity available: {product.quantity}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* No Results State */}
                {sortedProducts.length === 0 && !loading && (
                    <div className="text-center py-16">
                        <div className="bg-sage-green/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-12 h-12 text-sage-green" />
                        </div>
                        <h3 className="text-xl font-semibold text-deep-brown mb-2">No games available</h3>
                        <p className="text-deep-brown/60">Check back soon for new additions to our collection!</p>
                    </div>
                )}
            </div>
        </div>
    );
}