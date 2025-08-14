'use client';

import { useState } from 'react';
import {
    Heart,
    Users,
    Award,
    Shield,
    Truck,
    Zap,
    Mail,
    Phone,
    Clock,
    MapPin,
    Send,
    CheckCircle,
    Star,
    MessageCircle,
    Globe,
    Gamepad2
} from 'lucide-react';

export default function AboutPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success state after 3 seconds
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="bg-warm-cream min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 text-warm-cream py-20 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 -left-8 w-24 h-24 bg-warm-cream/10 rounded-full animate-bounce"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="bg-warm-cream/20 p-4 rounded-full">
                            <Heart className="w-12 h-12 text-gold" />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold mb-6">About Given Ministry LLC</h1>
                    <p className="text-xl text-warm-cream/90 max-w-3xl mx-auto">
                        Where families and friends come together through the timeless joy of board gaming
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Story Section */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="bg-amber-700 p-2 rounded-lg">
                                    <Gamepad2 className="w-6 h-6 text-warm-cream" />
                                </div>
                                <h2 className="text-3xl font-bold text-deep-brown">Our Story</h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-deep-brown/80 space-y-4">
                                <p>
                                    Welcome to Given Ministry LLC, where we believe that the best memories are made around
                                    a table with friends and family. Founded with a passion for bringing people together through
                                    the joy of gaming, we carefully curate an exceptional selection of board games for every
                                    type of player.
                                </p>
                                <p>
                                    Our journey began with a simple belief: games have the power to create lasting connections,
                                    spark creativity, and bring joy to people of all ages. Whether you're seeking strategic
                                    challenges, family-friendly fun, or party entertainment, we're here to help you find
                                    the perfect game for every occasion.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-sage-green/20 to-amber-100 h-80 rounded-xl border border-sage-green/30 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-700/20 to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                                    <Star className="w-4 h-4 fill-current text-amber-600" />
                                    <span className="font-medium text-deep-brown">Family Owned</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-4">
                            <div className="bg-amber-700 p-3 rounded-full">
                                <Award className="w-8 h-8 text-warm-cream" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown mb-4">Our Mission</h2>
                        <p className="text-deep-brown/70 max-w-2xl mx-auto">
                            We're dedicated to helping you discover your next favorite game and creating meaningful connections
                            through the shared experience of play.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Award,
                                title: "Expert Curation",
                                description: "Every game in our collection is hand-picked for quality, fun factor, and replay value by passionate gamers."
                            },
                            {
                                icon: Users,
                                title: "Personal Service",
                                description: "Need a recommendation? We're passionate gamers ourselves and love helping you find the perfect game."
                            },
                            {
                                icon: Shield,
                                title: "Quality Guarantee",
                                description: "We stand behind every product we sell with excellent customer service and hassle-free returns."
                            },
                            {
                                icon: Truck,
                                title: "Fast Shipping",
                                description: "Get your games quickly and safely delivered right to your door with free shipping on orders over $50."
                            }
                        ].map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sage-green/20">
                                    <div className="bg-amber-700/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-700 transition-colors duration-300">
                                        <IconComponent className="w-8 h-8 text-amber-700 group-hover:text-warm-cream transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-semibold text-lg mb-3 text-amber-700 text-center">{feature.title}</h3>
                                    <p className="text-deep-brown/70 text-center text-sm">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="mb-20 bg-gradient-to-r from-sage-green/10 to-amber-100/30 p-12 rounded-2xl">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-4">
                            <Star className="w-8 h-8 text-amber-700" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown mb-4">Trusted by Game Lovers</h2>
                        <p className="text-deep-brown/70">Join thousands of satisfied customers who've discovered their favorite games with us</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Users, number: "10,000+", label: "Happy Customers" },
                            { icon: Gamepad2, number: "500+", label: "Games Available" },
                            { icon: Star, number: "4.9★", label: "Average Rating" },
                            { icon: Truck, number: "99%", label: "On-Time Delivery" }
                        ].map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="group">
                                    <div className="flex justify-center mb-3">
                                        <IconComponent className="w-8 h-8 text-amber-700 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="text-3xl font-bold text-deep-brown mb-1">{stat.number}</div>
                                    <div className="text-sm text-deep-brown/70">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-4">
                            <div className="bg-amber-700 p-3 rounded-full">
                                <MessageCircle className="w-8 h-8 text-warm-cream" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown mb-4">Get in Touch</h2>
                        <p className="text-deep-brown/70 max-w-2xl mx-auto">
                            Have questions about a game? Need a recommendation? Want to check on your order?
                            We'd love to hear from you!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-sage-green/20">
                            <h3 className="text-xl font-semibold mb-6 text-deep-brown flex items-center space-x-2">
                                <Globe className="w-6 h-6 text-amber-700" />
                                <span>Contact Information</span>
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-deep-brown mb-1">Email</h4>
                                        <p className="text-amber-700 hover:text-amber-800 transition-colors">
                                            <span>hello@givenministry.com</span>
                                        </p>
                                        <p className="text-sm text-deep-brown/60 mt-1">
                                            We typically respond within 24 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-deep-brown mb-1">Phone</h4>
                                        <p className="text-deep-brown/80">(555) 123-GAME</p>
                                        <p className="text-sm text-deep-brown/60 mt-1">
                                            Call us for immediate assistance
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-lg">
                                        <Clock className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-deep-brown mb-1">Business Hours</h4>
                                        <div className="text-deep-brown/80 space-y-1">
                                            <p>Monday - Friday: 9 AM - 6 PM EST</p>
                                            <p>Saturday: 10 AM - 4 PM EST</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-amber-100 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-deep-brown mb-1">Location</h4>
                                        <p className="text-deep-brown/80">
                                            Proudly serving customers<br />
                                            across the United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Contact Form */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-sage-green/20">
                            <h3 className="text-xl font-semibold mb-6 text-deep-brown flex items-center space-x-2">
                                <Send className="w-6 h-6 text-amber-700" />
                                <span>Send us a Message</span>
                            </h3>

                            {isSubmitted && (
                                <div className="mb-6 bg-sage-green/10 border border-sage-green/30 rounded-lg p-4 flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-sage-green" />
                                    <div>
                                        <p className="font-medium text-sage-green">Message sent successfully!</p>
                                        <p className="text-sm text-sage-green/80">We'll get back to you soon.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-deep-brown">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-sage-green/30 rounded-lg px-4 py-3 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-deep-brown">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full border border-sage-green/30 rounded-lg px-4 py-3 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-deep-brown">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-sage-green/30 rounded-lg px-4 py-3 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Question</option>
                                        <option value="recommendation">Game Recommendation</option>
                                        <option value="order">Order Inquiry</option>
                                        <option value="return">Return/Exchange</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-deep-brown">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full border border-sage-green/30 rounded-lg px-4 py-3 bg-white text-deep-brown focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors resize-vertical"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-amber-700 text-warm-cream px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-warm-cream border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}