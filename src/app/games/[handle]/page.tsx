'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
    Star,
    Users,
    Clock,
    Tag,
    Shield,
    Heart,
    Share2,
    Plus,
    Minus,
    ShoppingCart,
    Award,
    CheckCircle,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { games } from '@/data/games';

// Move this outside the component
function getGame(handle: string) {
    return games.find(game => game.handle === handle) || null;
}

export default function GameDetailPage({
    params,
}: {
    params: Promise<{ handle: string }>;
}) {
    const [handle, setHandle] = useState<string>('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        params.then(p => setHandle(p.handle));
    }, [params]);

    if (!handle) return <div>Loading...</div>;

    const game = getGame(handle);

    if (!game) {
        notFound();
    }

    const hasMultipleImages = game.images.length > 1;

    const nextImage = () => {
        console.log('Next image clicked'); // Debug log
        setCurrentImageIndex((prev) => {
            const next = prev === game.images.length - 1 ? 0 : prev + 1;
            console.log('Current:', prev, 'Next:', next); // Debug log
            return next;
        });
    };

    const prevImage = () => {
        console.log('Previous image clicked'); // Debug log
        setCurrentImageIndex((prev) => {
            const next = prev === 0 ? game.images.length - 1 : prev - 1;
            console.log('Current:', prev, 'Next:', next); // Debug log
            return next;
        });
    };

    const goToImage = (index: number) => {
        console.log('Go to image:', index); // Debug log
        setCurrentImageIndex(index);
    };

    return (
        <div className="bg-warm-cream min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Enhanced Game Images with Navigation */}
                    <div className="space-y-4">
                        <div className="relative h-96 rounded-xl mb-4 border border-sage-green/30 overflow-hidden group">
                            {game.images.length > 0 ? (
                                <>
                                    <Image
                                        src={game.images[currentImageIndex]}
                                        alt={`${game.name} - Image ${currentImageIndex + 1}`}
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
                                            {currentImageIndex + 1} of {game.images.length}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-sage-green/20 to-amber-100" />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-amber-700/20 to-transparent pointer-events-none"></div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 z-10">
                                <Star className="w-4 h-4 fill-current text-amber-600" />
                                <span className="font-medium text-deep-brown">{game.rating}</span>
                                <span className="text-deep-brown/60">({game.reviews})</span>
                            </div>
                            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10">
                                <Heart className="w-5 h-5 text-deep-brown hover:text-red-500 transition-colors" />
                            </button>
                        </div>

                        {/* Enhanced Thumbnail gallery */}
                        {hasMultipleImages && (
                            <div className="grid grid-cols-4 gap-2">
                                {game.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`relative h-20 rounded-lg border-2 transition-all duration-200 cursor-pointer overflow-hidden ${index === currentImageIndex
                                            ? 'border-amber-700 shadow-lg'
                                            : 'border-sage-green/30 hover:border-amber-500'
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${game.name} - Thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                        {index === currentImageIndex && (
                                            <div className="absolute inset-0 bg-amber-700/20"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Enhanced Game Details */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                                    {game.category}
                                </span>
                                <div className="flex items-center space-x-1 text-amber-700">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(game.rating) ? 'fill-current' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold mb-4 text-deep-brown">{game.name}</h1>
                            <p className="text-3xl font-bold text-gold mb-6">${game.price}</p>
                        </div>

                        {/* Game Stats */}
                        <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg border border-sage-green/20">
                            <div className="text-center">
                                <Users className="w-6 h-6 text-amber-700 mx-auto mb-1" />
                                <div className="text-sm font-medium text-deep-brown">{game.players}</div>
                            </div>
                            <div className="text-center">
                                <Clock className="w-6 h-6 text-amber-700 mx-auto mb-1" />
                                <div className="text-sm font-medium text-deep-brown">{game.playtime}</div>
                            </div>
                            <div className="text-center">
                                <Award className="w-6 h-6 text-amber-700 mx-auto mb-1" />
                                <div className="text-sm font-medium text-deep-brown">Age {game.age}</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-deep-brown leading-relaxed">{game.description}</p>
                            <p className="text-deep-brown/80 leading-relaxed">{game.longDescription}</p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                            <h3 className="font-semibold text-deep-brown flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-sage-green" />
                                <span>Game Features</span>
                            </h3>
                            <ul className="space-y-2">
                                {game.features.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2 text-deep-brown/80">
                                        <CheckCircle className="w-4 h-4 text-sage-green flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Purchase Section */}
                        <div className="bg-white p-6 rounded-lg border border-sage-green/20 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-deep-brown">Quantity:</span>
                                <div className="flex items-center border border-sage-green/30 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-2 hover:bg-sage-green/10 transition-colors"
                                    >
                                        <Minus className="w-4 h-4 text-deep-brown" />
                                    </button>
                                    <span className="px-4 py-2 text-deep-brown font-medium">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-2 hover:bg-sage-green/10 transition-colors"
                                    >
                                        <Plus className="w-4 h-4 text-deep-brown" />
                                    </button>
                                </div>
                            </div>

                            {game.inStock ? (
                                <button className="w-full bg-amber-700 text-warm-cream px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Add to Cart - ${(game.price * quantity).toFixed(2)}</span>
                                </button>
                            ) : (
                                <button disabled className="w-full bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold cursor-not-allowed">
                                    Out of Stock
                                </button>
                            )}

                            <div className="flex items-center justify-between text-sm">
                                {game.inStock ? (
                                    <div className="flex items-center space-x-2 text-sage-green font-medium">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>In stock and ready to ship</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2 text-red-600">
                                        <span>❌ Currently out of stock</span>
                                    </div>
                                )}

                                <button className="flex items-center space-x-1 text-deep-brown/60 hover:text-amber-700 transition-colors">
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