import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-deep-brown text-warm-cream">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gold">Robin Perkins Boardgames</h3>
                        <p className="text-warm-cream/80 mb-4">
                            Your trusted source for amazing board games. Bringing families and friends together through the joy of gaming.
                        </p>
                        <p className="text-warm-cream/80">
                            📧 hello@robinperkinsboardgames.com<br />
                            📞 (555) 123-GAME
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
                        <ul className="space-y-2 text-warm-cream/80">
                            <li>
                                <Link href="/games" className="hover:text-gold transition-colors">
                                    Browse Games
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-gold transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-gold transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className="hover:text-gold transition-colors">
                                    Shopping Cart
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold mb-4 text-gold">Customer Service</h4>
                        <ul className="space-y-2 text-warm-cream/80">
                            <li>
                                <Link href="/policies" className="hover:text-gold transition-colors">
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies" className="hover:text-gold transition-colors">
                                    Shipping Info
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies" className="hover:text-gold transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/policies" className="hover:text-gold transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-4 text-gold">Stay Updated</h4>
                        <p className="text-warm-cream/80 mb-4">
                            Subscribe to our newsletter for new game releases and special offers.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 bg-amber-900/30 border border-amber-700 rounded-l focus:outline-none focus:border-gold text-warm-cream placeholder-warm-cream/60"
                            />
                            <button className="bg-amber-700 px-4 py-2 rounded-r hover:bg-amber-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-amber-700/50 mt-8 pt-8 text-center text-warm-cream/70">
                    <p>&copy; {new Date().getFullYear()} Robin Perkins Boardgames. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}