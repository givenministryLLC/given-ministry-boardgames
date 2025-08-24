import Link from 'next/link';
import {
    Mail,
    Phone,
    Heart,
    Shield,
    Truck,
    HelpCircle,
    Gamepad2,
    Star,
    ArrowRight
} from 'lucide-react';
import { companyConfig } from '@/config/company';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-forest-prayer to-primary-dark text-warm-cream">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Enhanced Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-sanctuary-green p-2 rounded-lg">
                                <Gamepad2 className="w-6 h-6 text-warm-cream" />
                            </div>
                            <h3 className="text-lg font-semibold text-mint-whisper">{companyConfig.name}</h3>
                        </div>
                        <p className="text-warm-cream/80 mb-4">
                            {companyConfig.description}
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-warm-cream/80">
                                <Mail className="w-4 h-4 text-mint-whisper" />
                                <span>{companyConfig.email}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-warm-cream/80">
                                <Phone className="w-4 h-4 text-mint-whisper" />
                                <span>{companyConfig.phoneFormatted}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-mint-whisper flex items-center space-x-2">
                            <Star className="w-4 h-4" />
                            <span>Quick Links</span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/games" className="flex items-center space-x-2 text-warm-cream/80 hover:text-mint-whisper transition-all duration-200 hover:translate-x-1">
                                    <ArrowRight className="w-3 h-3" />
                                    <span>Browse Games</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="flex items-center space-x-2 text-warm-cream/80 hover:text-mint-whisper transition-all duration-200 hover:translate-x-1">
                                    <ArrowRight className="w-3 h-3" />
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="flex items-center space-x-2 text-warm-cream/80 hover:text-mint-whisper transition-all duration-200 hover:translate-x-1">
                                    <ArrowRight className="w-3 h-3" />
                                    <span>FAQ</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className="flex items-center space-x-2 text-warm-cream/80 hover:text-mint-whisper transition-all duration-200 hover:translate-x-1">
                                    <ArrowRight className="w-3 h-3" />
                                    <span>Shopping Cart</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold mb-4 text-mint-whisper flex items-center space-x-2">
                            <HelpCircle className="w-4 h-4" />
                            <span>Customer Service</span>
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/policies" className="flex items-center space-x-2 text-warm-cream/80 hover:text-mint-whisper transition-all duration-200 hover:translate-x-1">
                                    <Shield className="w-3 h-3" />
                                    <span>Return Policy</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies" className="flex items-center space-x-2 text-warm-cream/80 hover:text-mint-whisper transition-all duration-200 hover:translate-x-1">
                                    <Truck className="w-3 h-3" />
                                    <span>Shipping Info</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies" className="flex items-center space-x-2 text-warm-cream/80 hover:text-mint-whisper transition-all duration-200 hover:translate-x-1">
                                    <Shield className="w-3 h-3" />
                                    <span>Terms of Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies" className="flex items-center space-x-2 text-warm-cream/80 hover:text-mint-whisper transition-all duration-200 hover:translate-x-1">
                                    <Shield className="w-3 h-3" />
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-4 text-mint-whisper flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>Stay Updated</span>
                        </h4>
                        <p className="text-warm-cream/80 mb-4">
                            Subscribe to our newsletter for new game releases and special offers.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 bg-sanctuary-green/30 border border-sage-green text-warm-cream placeholder-warm-cream/60 rounded-l focus:outline-none focus:border-mint-whisper transition-colors"
                            />
                            <button className="bg-sanctuary-green px-4 py-2 rounded-r hover:bg-sage-green transition-all duration-200 hover:scale-105 flex items-center">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-sage-green/50 mt-8 pt-8 text-center text-warm-cream/70">
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
                        <Heart className="w-4 h-4 text-mint-whisper" />
                        <p>&copy; {new Date().getFullYear()} {companyConfig.name}. All rights reserved.</p>
                        <Heart className="w-4 h-4 text-mint-whisper" />
                    </div>
                </div>
            </div>
        </footer>
    );
}