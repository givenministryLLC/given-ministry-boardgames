import {
    Shield,
    Truck,
    Heart,
    RefreshCw,
    Clock,
    CheckCircle,
    Mail,
    Phone
} from 'lucide-react';

export default function PoliciesPage() {
    return (
        <div className="bg-warm-cream min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-deep-brown via-amber-900 to-amber-800 text-warm-cream py-16 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 -left-8 w-16 h-16 bg-warm-cream/10 rounded-full animate-bounce"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="bg-warm-cream/20 p-4 rounded-full">
                            <Shield className="w-10 h-10 text-gold" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Our Policies</h1>
                    <p className="text-xl text-warm-cream/90 max-w-2xl mx-auto">
                        Simple, straightforward policies for our small family business
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Policy Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {[
                        { icon: RefreshCw, title: "Returns", href: "#returns" },
                        { icon: Truck, title: "Shipping", href: "#shipping" },
                        { icon: Shield, title: "Privacy", href: "#privacy" }
                    ].map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.href}
                                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-sage-green/20 text-center hover:-translate-y-1"
                            >
                                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-700 transition-colors">
                                    <IconComponent className="w-6 h-6 text-amber-700 group-hover:text-warm-cream transition-colors" />
                                </div>
                                <span className="font-medium text-deep-brown group-hover:text-amber-700 transition-colors">
                                    {item.title}
                                </span>
                            </a>
                        );
                    })}
                </div>

                {/* Return Policy */}
                <section id="returns" className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-amber-700 p-3 rounded-xl">
                            <RefreshCw className="w-8 h-8 text-warm-cream" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown">Return Policy</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                        <div className="bg-sage-green/10 p-6 rounded-xl">
                            <div className="flex items-center space-x-2 mb-3">
                                <Clock className="w-5 h-5 text-amber-700" />
                                <h3 className="font-semibold text-deep-brown">30-Day Returns</h3>
                            </div>
                            <p className="text-deep-brown/80 text-sm">
                                Return unopened games within 30 days of delivery for a full refund.
                            </p>
                        </div>

                        <div className="bg-sage-green/10 p-6 rounded-xl">
                            <div className="flex items-center space-x-2 mb-3">
                                <CheckCircle className="w-5 h-5 text-amber-700" />
                                <h3 className="font-semibold text-deep-brown">Simple Process</h3>
                            </div>
                            <p className="text-deep-brown/80 text-sm">
                                Just contact us first - we'll make it easy and handle the details.
                            </p>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                        <h3 className="font-semibold text-amber-800 mb-2">Quick & Easy Returns</h3>
                        <p className="text-amber-800 text-sm mb-3">
                            As a small business, we keep returns simple. Games must be unopened and in original condition.
                            Contact us and we'll send you a prepaid return label.
                        </p>
                        <p className="text-amber-800 text-sm">
                            <strong>Damaged items:</strong> We'll replace damaged games immediately at no cost to you.
                        </p>
                    </div>
                </section>

                {/* Shipping Policy */}
                <section id="shipping" className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-amber-700 p-3 rounded-xl">
                            <Truck className="w-8 h-8 text-warm-cream" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown">Shipping</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-sage-green/10 p-6 rounded-xl text-center">
                            <div className="bg-sage-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Clock className="w-6 h-6 text-warm-cream" />
                            </div>
                            <h3 className="font-semibold text-deep-brown mb-2">Fast Processing</h3>
                            <p className="text-deep-brown/80 text-sm">Ships within 1-2 business days</p>
                        </div>

                        <div className="bg-sage-green/10 p-6 rounded-xl text-center">
                            <div className="bg-sage-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Truck className="w-6 h-6 text-warm-cream" />
                            </div>
                            <h3 className="font-semibold text-deep-brown mb-2">Standard Delivery</h3>
                            <p className="text-deep-brown/80 text-sm">3-5 business days</p>
                        </div>
                    </div>

                    <div className="bg-sage-green/10 p-6 rounded-xl">
                        <h3 className="font-semibold text-deep-brown mb-3">Shipping Details</h3>
                        <div className="space-y-2 text-sm text-deep-brown/80">
                            <p>• We ship within the United States only</p>
                            <p>• You'll receive tracking information via email</p>
                            <p>• Standard shipping is $9.99</p>
                            <p>• We package games carefully to prevent damage</p>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy */}
                <section id="privacy" className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-amber-700 p-3 rounded-xl">
                            <Shield className="w-8 h-8 text-warm-cream" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown">Privacy Policy</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-sage-green/10 p-6 rounded-xl">
                            <h3 className="font-semibold text-deep-brown mb-3 flex items-center space-x-2">
                                <Shield className="w-5 h-5 text-amber-700" />
                                <span>We Keep It Simple</span>
                            </h3>
                            <p className="text-deep-brown/80 text-sm mb-3">
                                As a small family business, we only collect the information we need to process your order and ship your games:
                            </p>
                            <div className="space-y-2 text-sm text-deep-brown/80">
                                <p>• Your name and email for order confirmation</p>
                                <p>• Shipping address to send your games</p>
                                <p>• Payment info (securely processed by our payment provider)</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                <h4 className="font-medium text-amber-800 mb-2">What We Don't Do</h4>
                                <div className="space-y-1 text-sm text-amber-700">
                                    <p>• Sell your information</p>
                                    <p>• Send spam emails</p>
                                    <p>• Share data with third parties</p>
                                </div>
                            </div>

                            <div className="bg-sage-green/10 p-4 rounded-lg">
                                <h4 className="font-medium text-deep-brown mb-2">Your Rights</h4>
                                <div className="space-y-1 text-sm text-deep-brown/80">
                                    <p>• Delete your data anytime</p>
                                    <p>• Opt out of emails easily</p>
                                    <p>• Contact us with questions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 p-8 rounded-2xl text-warm-cream text-center">
                    <div className="flex justify-center mb-4">
                        <Heart className="w-12 h-12" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Questions About Our Policies?</h2>
                    <p className="mb-6 text-warm-cream/90">
                        We're a small business and happy to explain anything personally!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:hello@givenministry.com"
                            className="inline-flex items-center space-x-2 bg-warm-cream text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Email Us</span>
                        </a>
                        <a
                            href="tel:937-823-1411"
                            className="inline-flex items-center space-x-2 bg-warm-cream/20 border border-warm-cream text-warm-cream px-6 py-3 rounded-lg font-semibold hover:bg-warm-cream/30 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call Us</span>
                        </a>
                    </div>
                </div >
            </div >
        </div >
    );
}