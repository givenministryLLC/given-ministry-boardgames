'use client';

import { useState } from 'react';
import {
    ChevronDown,
    ChevronUp,
    HelpCircle,
    MessageCircle,
    Truck,
    Shield,
    XCircle,
    Clock
} from 'lucide-react';
import { companyConfig } from '@/config/company';

const faqs = [
    {
        id: 1,
        icon: Truck,
        question: "How long does shipping take?",
        answer: `We typically ship within ${companyConfig.policies.processingTime}. Standard shipping takes ${companyConfig.policies.deliveryTime}. Shipping cost is $${companyConfig.policies.standardShipping} for all orders.`
    },
    {
        id: 2,
        icon: Shield,
        question: "What is your return policy?",
        answer: "We do not accept returns - all sales are final. However, if you receive a damaged or defective item, please contact us immediately and we'll work with you to resolve the issue."
    },
    {
        id: 3,
        icon: HelpCircle,
        question: "Are your games authentic and new?",
        answer: "Yes, all our games are 100% authentic and brand new. We work directly with publishers to ensure you receive genuine products."
    },
    {
        id: 5,
        icon: MessageCircle,
        question: "How can I contact you?",
        answer: `You can reach us by email at ${companyConfig.email} or phone at ${companyConfig.phoneFormatted}. We typically respond within 24 hours.`
    }
];

export default function HelpPage() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="bg-warm-cream min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* FAQ Section */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-deep-brown mb-8 text-center">Frequently Asked Questions</h1>
                    <div className="space-y-4">
                        {faqs.map((faq) => {
                            const IconComponent = faq.icon;
                            return (
                                <div key={faq.id} className="bg-white border border-sage-green/30 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <button
                                        onClick={() => toggleItem(faq.id)}
                                        className="w-full text-left p-6 hover:bg-sage-green/5 focus:outline-none focus:bg-sage-green/5 rounded-xl transition-colors"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-start space-x-4 flex-1">
                                                <div className="bg-mint-whisper p-2 rounded-lg flex-shrink-0">
                                                    <IconComponent className="w-5 h-5 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-lg text-deep-brown">{faq.question}</h3>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                {openItems.includes(faq.id) ?
                                                    <ChevronUp className="w-6 h-6 text-primary" /> :
                                                    <ChevronDown className="w-6 h-6 text-primary" />
                                                }
                                            </div>
                                        </div>
                                    </button>

                                    {openItems.includes(faq.id) && (
                                        <div className="px-6 pb-6">
                                            <div className="ml-16 pt-2 border-t border-sage-green/20">
                                                <p className="text-deep-brown/80 leading-relaxed mt-4">{faq.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Policies Section */}
                <div className="border-t border-sage-green/30 pt-12">
                    <h1 className="text-4xl font-bold text-deep-brown mb-8 text-center">Our Policies</h1>

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
                                    <span>We Don't Collect or Store Data</span>
                                </h3>
                                <p className="text-deep-brown/80 text-sm mb-3">
                                    As a small family-run board game business, we don't collect, store, or maintain any customer data ourselves.
                                </p>
                                <p className="text-deep-brown/80 text-sm">
                                    When you place an order, your payment and shipping information is handled directly by Shopify, our e-commerce platform.
                                    We don't have access to or store your payment details. For information about how Shopify handles your data,
                                    please visit <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Shopify's Privacy Policy</a>.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-mint-whisper p-4 rounded-lg border border-olive-mist">
                                    <h4 className="font-medium text-forest-prayer mb-2">Simple & Straightforward</h4>
                                    <div className="space-y-1 text-sm text-sanctuary-green">
                                        <p>• No data collection by us</p>
                                        <p>• No marketing databases</p>
                                        <p>• No tracking or analytics</p>
                                    </div>
                                </div>

                                <div className="bg-sage-green/10 p-4 rounded-lg">
                                    <h4 className="font-medium text-deep-brown mb-2">Questions?</h4>
                                    <div className="space-y-1 text-sm text-deep-brown/80">
                                        <p>Contact us anytime at:</p>
                                        <p>{companyConfig.email}</p>
                                        <p>{companyConfig.phoneFormatted}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </div >
    );
}
