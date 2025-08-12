'use client';

import { useState } from 'react';
import {
    ChevronDown,
    ChevronUp,
    HelpCircle,
    MessageCircle,
    Search,
    Truck,
    Shield,
    Heart
} from 'lucide-react';

const faqs = [
    {
        id: 1,
        category: 'Shipping',
        icon: Truck,
        question: "How long does shipping take?",
        answer: "We typically process orders within 1-2 business days. Standard shipping takes 3-5 business days, while expedited shipping takes 1-2 business days. Free shipping is available on orders over $50."
    },
    {
        id: 2,
        category: 'Returns',
        icon: Shield,
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase for unopened games in original condition. Opened games may be returned if defective or damaged during shipping. Return shipping costs are covered by us for defective items."
    },
    {
        id: 3,
        category: 'Shipping',
        icon: Truck,
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within the United States. We're working on expanding our shipping options to include international destinations in the future."
    },
    {
        id: 4,
        category: 'Products',
        icon: Shield,
        question: "Are your games authentic and new?",
        answer: "Yes, all our games are 100% authentic and brand new. We work directly with publishers and authorized distributors to ensure you receive genuine products in perfect condition."
    },
    {
        id: 5,
        category: 'Orders',
        icon: HelpCircle,
        question: "Can I cancel or modify my order?",
        answer: "You can cancel or modify your order within 1 hour of placing it by contacting us immediately. Once an order has been processed for shipping, we cannot make changes, but you can return items following our return policy."
    },
    {
        id: 6,
        category: 'Support',
        icon: Heart,
        question: "Do you offer game recommendations?",
        answer: "Absolutely! We love helping customers find their perfect game. Contact us with information about the number of players, preferred game length, complexity level, and any themes you enjoy, and we'll provide personalized recommendations."
    },
    {
        id: 7,
        category: 'Products',
        icon: Shield,
        question: "What if my game arrives damaged?",
        answer: "If your game arrives damaged or defective, please contact us within 7 days of delivery with photos of the damage. We'll immediately send a replacement at no cost to you."
    },
    {
        id: 8,
        category: 'Support',
        icon: Heart,
        question: "Do you have a loyalty program?",
        answer: "We're currently developing a loyalty program for our frequent customers. Sign up for our newsletter to be the first to know when it launches!"
    },
    {
        id: 9,
        category: 'Orders',
        icon: HelpCircle,
        question: "Can I pick up my order locally?",
        answer: "Local pickup is not currently available, but we're exploring this option for the future. All orders are fulfilled through our shipping partners."
    },
    {
        id: 10,
        category: 'Orders',
        icon: HelpCircle,
        question: "How do I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on the carrier's website."
    }
];

const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'Shipping', label: 'Shipping' },
    { value: 'Returns', label: 'Returns' },
    { value: 'Products', label: 'Products' },
    { value: 'Orders', label: 'Orders' },
    { value: 'Support', label: 'Support' }
];

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-warm-cream min-h-screen">
            {/* Enhanced Header */}
            <div className="text-center mb-12">
                <div className="bg-amber-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-8 h-8 text-warm-cream" />
                </div>
                <h1 className="text-4xl font-bold mb-4 text-deep-brown">Frequently Asked Questions</h1>
                <p className="text-deep-brown/80 max-w-2xl mx-auto">
                    Find answers to common questions about our games, shipping, returns, and more.
                    Can't find what you're looking for? <a href="/about" className="text-amber-700 hover:text-amber-800 underline font-medium">Contact us</a> and we'll be happy to help!
                </p>
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-sage-green/20 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-deep-brown/40" />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-sage-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-deep-brown"
                        />
                    </div>

                    {/* Category Filter */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-3 border border-sage-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 text-deep-brown bg-white min-w-[150px]"
                    >
                        {categories.map(category => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 mb-12">
                {filteredFaqs.map((faq) => {
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
                                            <div className="flex items-center space-x-2 mb-1">
                                                <span className="text-xs bg-sage-green/20 text-sage-green px-2 py-1 rounded-full font-medium">
                                                    {faq.category}
                                                </span>
                                            </div>
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

            {/* No Results */}
            {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                    <div className="bg-sage-green/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-12 h-12 text-sage-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-deep-brown mb-2">No questions found</h3>
                    <p className="text-deep-brown/60 mb-4">Try adjusting your search or filter</p>
                    <button
                        onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('all');
                        }}
                        className="bg-amber-700 text-warm-cream px-6 py-2 rounded-lg font-medium hover:bg-amber-800 transition-colors"
                    >
                        Clear Filters
                    </button>
                </div>
            )}

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-amber-700 to-amber-800 p-8 rounded-xl text-warm-cream text-center">
                <div className="flex justify-center mb-4">
                    <MessageCircle className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
                <p className="mb-6 text-warm-cream/90">
                    Our customer service team is here to help! Reach out to us and we'll get back to you as soon as possible.
                </p>
                <a
                    href="/about"
                    className="inline-flex items-center space-x-2 bg-warm-cream text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors shadow-lg hover:shadow-xl"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span>Contact Us</span>
                </a>
            </div>
        </div >
    );
}