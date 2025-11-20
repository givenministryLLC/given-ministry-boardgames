import {
    Shield,
    Truck,
    XCircle,
    Clock
} from 'lucide-react';
import { companyConfig } from '@/config/company';

export default function PoliciesPage() {
    return (
        <div className="bg-warm-cream min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-12">

                {/* Return Policy */}
                <section id="returns" className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-primary p-3 rounded-xl">
                            <XCircle className="w-8 h-8 text-warm-cream" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown">No Returns Policy</h2>
                    </div>

                    <div className="bg-sage-green/10 p-6 rounded-xl mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                            <XCircle className="w-5 h-5 text-primary" />
                            <h3 className="font-semibold text-deep-brown">All Sales Final</h3>
                        </div>
                        <p className="text-deep-brown/80 text-sm">
                            We do not accept returns or offer refunds on any purchases. Please review your order carefully before completing your purchase.
                        </p>
                    </div>

                    <div className="bg-mint-whisper p-6 rounded-xl border border-olive-mist">
                        <h3 className="font-semibold text-forest-prayer mb-2">Damaged Items Only</h3>
                        <p className="text-forest-prayer text-sm">
                            <strong>Exception:</strong> If you receive a damaged or defective item, please contact us immediately. We'll work with you to resolve the issue, which may include a replacement or store credit at our discretion.
                        </p>
                    </div>
                </section>

                {/* Shipping Policy */}
                <section id="shipping" className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-primary p-3 rounded-xl">
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
                            <p className="text-deep-brown/80 text-sm">Ships within {companyConfig.policies.processingTime}</p>
                        </div>

                        <div className="bg-sage-green/10 p-6 rounded-xl text-center">
                            <div className="bg-sage-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Truck className="w-6 h-6 text-warm-cream" />
                            </div>
                            <h3 className="font-semibold text-deep-brown mb-2">Standard Delivery</h3>
                            <p className="text-deep-brown/80 text-sm">{companyConfig.policies.deliveryTime}</p>
                        </div>
                    </div>

                    <div className="bg-sage-green/10 p-6 rounded-xl">
                        <h3 className="font-semibold text-deep-brown mb-3">Shipping Details</h3>
                        <div className="space-y-2 text-sm text-deep-brown/80">
                            <p>• We ship within the {companyConfig.location.country} only</p>
                            <p>• You'll receive tracking information via email</p>
                            <p>• Standard shipping is ${companyConfig.policies.standardShipping} for all orders</p>
                            <p>• We package games carefully to prevent damage</p>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy */}
                <section id="privacy" className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-primary p-3 rounded-xl">
                            <Shield className="w-8 h-8 text-warm-cream" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown">Privacy Policy</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-sage-green/10 p-6 rounded-xl">
                            <h3 className="font-semibold text-deep-brown mb-3 flex items-center space-x-2">
                                <Shield className="w-5 h-5 text-primary" />
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
                            <div className="bg-mint-whisper p-4 rounded-lg border border-olive-mist">
                                <h4 className="font-medium text-forest-prayer mb-2">What We Don't Do</h4>
                                <div className="space-y-1 text-sm text-sanctuary-green">
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
            </div >
        </div >
    );
}