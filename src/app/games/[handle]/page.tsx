'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
    Shield,
    Share2,
    Plus,
    Minus,
    ShoppingCart,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Loader2
} from 'lucide-react';

interface ShopifyProduct {
    id: string;
    title: string;
    handle: string;
    description: string;
    price: string;
    currency: string;
    inStock: boolean;
    quantity: number;
    variantId: string;
    images: Array<{
        url: string;
        alt: string;
    }>;
}

export default function GameDetailPage({
    params,
}: {
    params: Promise<{ handle: string }>;
}) {
    const [handle, setHandle] = useState<string>('');
    const [product, setProduct] = useState<ShopifyProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        params.then(p => setHandle(p.handle));
    }, [params]);

    useEffect(() => {
        if (!handle) return;

        async function fetchProduct() {
            try {
                const response = await fetch(`/api/product/${handle}`);
                const data = await response.json();

                if (data.success) {
                    setProduct(data.product);
                } else {
                    setError(data.error);
                }
            } catch {
                setError('Failed to load product');
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [handle]);

    if (loading) {
        return (
            <div className="bg-warm-cream min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                        <span className="ml-2 text-deep-brown">Loading game...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !product) {
        notFound();
    }

    const hasMultipleImages = product.images.length > 1;

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="bg-warm-cream min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Enhanced Game Images with Navigation */}
                    <div className="space-y-4">
                        <div className="relative h-96 rounded-xl mb-4 border border-sage-green/30 overflow-hidden group">
                            {product.images.length > 0 ? (
                                <>
                                    <Image
                                        src={product.images[currentImageIndex].url}
                                        alt={product.images[currentImageIndex].alt}
                                        fill
                                        className="object-cover transition-opacity duration-300"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    {/* Navigation Arrows - Only show if multiple images */}
                                    {hasMultipleImages && (
                                        <>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    prevImage();
                                                }}
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                                                aria-label="Previous image"
                                                type="button"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    nextImage();
                                                }}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                                                aria-label="Next image"
                                                type="button"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </button>
                                        </>
                                    )}

                                    {/* Image Counter */}
                                    {hasMultipleImages && (
                                        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm z-10">
                                            {currentImageIndex + 1} of {product.images.length}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-sage-green/20 to-mint-whisper" />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 z-10">
                                <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                <span className="font-medium text-deep-brown">
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>

                        {/* Enhanced Thumbnail gallery */}
                        {hasMultipleImages && (
                            <div className="grid grid-cols-4 gap-2">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`relative h-20 rounded-lg border-2 transition-all duration-200 cursor-pointer overflow-hidden ${index === currentImageIndex
                                                ? 'border-primary shadow-lg'
                                                : 'border-sage-green/30 hover:border-sanctuary-green'
                                            }`}
                                    >
                                        <Image
                                            src={image.url}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                        {index === currentImageIndex && (
                                            <div className="absolute inset-0 bg-primary/20"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Enhanced Game Details */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold mb-4 text-deep-brown">{product.title}</h1>
                            <p className="text-3xl font-bold text-sanctuary-green mb-6">${product.price}</p>
                        </div>

                        {/* Product Description */}
                        <div className="space-y-4">
                            <div
                                className="text-deep-brown leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />
                        </div>

                        {/* Stock Info */}
                        <div className="bg-white p-4 rounded-lg border border-sage-green/20">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-deep-brown">Availability:</span>
                                <div className="flex items-center space-x-2">
                                    <span className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    <span className={`font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                                        {product.inStock ? `${product.quantity} in stock` : 'Out of stock'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Purchase Section */}
                        <div className="bg-white p-6 rounded-lg border border-sage-green/20 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-deep-brown">Quantity:</span>
                                <div className="flex items-center border border-sage-green/30 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-2 hover:bg-sage-green/10 transition-colors"
                                        disabled={!product.inStock}
                                    >
                                        <Minus className="w-4 h-4 text-deep-brown" />
                                    </button>
                                    <span className="px-4 py-2 text-deep-brown font-medium">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
                                        className="p-2 hover:bg-sage-green/10 transition-colors"
                                        disabled={!product.inStock}
                                    >
                                        <Plus className="w-4 h-4 text-deep-brown" />
                                    </button>
                                </div>
                            </div>

                            {product.inStock ? (
                                <button
                                    className="w-full bg-primary text-warm-cream px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                                    onClick={async () => {
                                        try {
                                            // Get or create cart
                                            let cartId = localStorage.getItem('shopify-cart-id');

                                            if (!cartId) {
                                                const createResponse = await fetch('/api/cart/create', {
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({})
                                                });
                                                const createData = await createResponse.json();
                                                if (createData.success) {
                                                    cartId = createData.cart.id;
                                                    if (cartId) {
                                                        localStorage.setItem('shopify-cart-id', cartId);
                                                    }
                                                }
                                            }

                                            if (cartId) {
                                                const response = await fetch('/api/cart/add', {
                                                    method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify({
                                                        cartId,
                                                        variantId: product.variantId,
                                                        quantity
                                                    })
                                                });

                                                const data = await response.json();
                                                if (data.success) {
                                                    window.dispatchEvent(new Event('cartUpdated'));
                                                    // Redirect to cart page
                                                    window.location.href = '/cart';
                                                } else {
                                                    alert('Error adding to cart');
                                                }
                                            }
                                        } catch (error) {
                                            console.error('Error adding to cart:', error);
                                            alert('Error adding to cart');
                                        }
                                    }}
                                >
                                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Add to Cart - ${(parseFloat(product.price) * quantity).toFixed(2)}</span>
                                </button>
                            ) : (
                                <button disabled className="w-full bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold cursor-not-allowed">
                                    Out of Stock
                                </button>
                            )}

                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center space-x-2 text-sage-green font-medium">
                                    <Shield className="w-4 h-4" />
                                    <span>Secure checkout</span>
                                </div>

                                <button className="flex items-center space-x-1 text-deep-brown/60 hover:text-primary transition-colors">
                                    <Share2 className="w-4 h-4" />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2 text-deep-brown/70">
                                <Shield className="w-5 h-5 text-sage-green" />
                                <span className="text-sm">Secure checkout</span>
                            </div>
                            <div className="flex items-center space-x-2 text-deep-brown/70">
                                <CheckCircle className="w-5 h-5 text-sage-green" />
                                <span className="text-sm">30-day returns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}