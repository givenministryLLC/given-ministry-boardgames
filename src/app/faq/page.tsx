'use client';

import { useState } from 'react';
import {
    ChevronDown,
    ChevronUp,
    HelpCircle,
    MessageCircle,
    Truck,
    Shield,
    Heart,
    Mail,
    Phone
} from 'lucide-react';
import { companyConfig } from '@/config/company';

const faqs = [
    {
        id: 1,
        icon: Truck,
        question: "How long does shipping take?",
        answer: `We typically ship within ${companyConfig.policies.processingTime}. Standard shipping takes ${companyConfig.policies.deliveryTime}. Free shipping on orders over $${companyConfig.policies.freeShippingThreshold}.`
    },
    {
        id: 2,
        icon: Shield,
        question: "What is your return policy?",
        answer: `We accept returns within ${companyConfig.policies.returnDays} days of purchase for unopened games in original condition. Contact us first and we'll handle the return process.`
    },
    {
        id: 3,
        icon: HelpCircle,
        question: "Are your games authentic and new?",
        answer: "Yes, all our games are 100% authentic and brand new. We work directly with publishers to ensure you receive genuine products."
    },
    {
        id: 4,
        icon: Heart,
        question: "Do you offer game recommendations?",
        answer: "Absolutely! With our small, curated selection, we know each game well and can help you choose the perfect one for your needs."
    },
    {
        id: 5,
        icon: MessageCircle,
        question: "How can I contact you?",
        answer: `You can reach us by email at ${companyConfig.email} or phone at ${companyConfig.phoneFormatted}. We typically respond within 24 hours.`
    }
];

export default function FAQPage() {
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
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="bg-amber-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HelpCircle className="w-8 h-8 text-warm-cream" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-deep-brown">Frequently Asked Questions</h1>
                    <p className="text-deep-brown/80 max-w-2xl mx-auto">
                        Quick answers to common questions about our games and policies.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 mb-12">
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
                                            <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                                                <IconComponent className="w-5 h-5 text-amber-700" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-deep-brown">{faq.question}</h3>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            {openItems.includes(faq.id) ?
                                                <ChevronUp className="w-6 h-6 text-amber-700" /> :
                                                <ChevronDown className="w-6 h-6 text-amber-700" />
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

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 p-8 rounded-xl text-warm-cream text-center">
                    <div className="flex justify-center mb-4">
                        <MessageCircle className="w-12 h-12" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
                    <p className="mb-6 text-warm-cream/90">
                        We're a small business and love to help personally! Reach out and we'll get back to you quickly.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`mailto:${companyConfig.email}`}
                            className="inline-flex items-center space-x-2 bg-warm-cream text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Email Us</span>
                        </a>
                        <a
                            href={`tel:${companyConfig.phone}`}
                            className="inline-flex items-center space-x-2 bg-warm-cream/20 border border-warm-cream text-warm-cream px-6 py-3 rounded-lg font-semibold hover:bg-warm-cream/30 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call Us</span>
                        </a>
                    </div>
                </div>
            </div >
        </div >
    );
}