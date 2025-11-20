'use client';

import { useState } from 'react';
import {
    ChevronDown,
    ChevronUp,
    HelpCircle,
    MessageCircle,
    Truck,
    Shield
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
                {/* FAQ Items */}
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
            </div >
        </div >
    );
}