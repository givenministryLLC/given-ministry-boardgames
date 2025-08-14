import {
    Shield,
    Truck,
    FileText,
    Eye,
    RefreshCw,
    Clock,
    CreditCard,
    Users,
    Lock,
    Mail,
    CheckCircle,
    AlertCircle,
    Heart
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
                        Everything you need to know about shopping with confidence at Robin Perkins Boardgames
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* Policy Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { icon: RefreshCw, title: "Returns", href: "#returns" },
                        { icon: Truck, title: "Shipping", href: "#shipping" },
                        { icon: FileText, title: "Terms", href: "#terms" },
                        { icon: Eye, title: "Privacy", href: "#privacy" }
                    ].map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.href}
                                className="group bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-sage-green/20 text-center hover:-translate-y-1"
                            >
                                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-amber-700 transition-colors">
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
                <section id="returns" className="mb-16 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-amber-700 p-3 rounded-xl">
                            <RefreshCw className="w-8 h-8 text-warm-cream" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown">Return & Refund Policy</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        <div className="bg-sage-green/10 p-6 rounded-xl">
                            <div className="flex items-center space-x-2 mb-3">
                                <Clock className="w-5 h-5 text-amber-700" />
                                <h3 className="font-semibold text-deep-brown">30-Day Window</h3>
                            </div>
                            <p className="text-deep-brown/80 text-sm">
                                Return items within 30 days of delivery for a full refund or exchange.
                            </p>
                        </div>

                        <div className="bg-sage-green/10 p-6 rounded-xl">
                            <div className="flex items-center space-x-2 mb-3">
                                <CheckCircle className="w-5 h-5 text-amber-700" />
                                <h3 className="font-semibold text-deep-brown">Easy Process</h3>
                            </div>
                            <p className="text-deep-brown/80 text-sm">
                                Contact us with your order number and we'll handle the rest.
                            </p>
                        </div>

                        <div className="bg-sage-green/10 p-6 rounded-xl">
                            <div className="flex items-center space-x-2 mb-3">
                                <Truck className="w-5 h-5 text-amber-700" />
                                <h3 className="font-semibold text-deep-brown">Free Returns</h3>
                            </div>
                            <p className="text-deep-brown/80 text-sm">
                                We cover return shipping for defective or damaged items.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>Return Conditions</span>
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    "Games must be in original, unopened condition",
                                    "All original packaging and components included",
                                    "Items free from damage not caused by shipping",
                                    "Custom items cannot be returned unless defective"
                                ].map((condition, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-deep-brown/80">
                                        <CheckCircle className="w-4 h-4 text-sage-green mt-1 flex-shrink-0" />
                                        <span className="text-sm">{condition}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                <AlertCircle className="w-5 h-5" />
                                <span>Defective or Damaged Items</span>
                            </h3>
                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                <p className="text-deep-brown/80">
                                    If you receive a defective or damaged item, please contact us within 7 days of delivery.
                                    We'll provide a prepaid return label and send a replacement immediately. In cases where
                                    a replacement is not available, we'll issue a full refund including original shipping costs.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-amber-700">How to Return an Item</h3>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                {[
                                    { step: 1, title: "Contact Us", desc: "Email us with your order number" },
                                    { step: 2, title: "Get Authorization", desc: "Receive return instructions" },
                                    { step: 3, title: "Package Item", desc: "Use original packaging" },
                                    { step: 4, title: "Ship Back", desc: "Use provided return label" },
                                    { step: 5, title: "Get Refund", desc: "Processed within 3-5 days" }
                                ].map((step) => (
                                    <div key={step.step} className="text-center">
                                        <div className="bg-amber-700 text-warm-cream w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                                            {step.step}
                                        </div>
                                        <h4 className="font-medium text-deep-brown text-sm mb-1">{step.title}</h4>
                                        <p className="text-xs text-deep-brown/60">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Shipping Policy */}
                <section id="shipping" className="mb-16 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-amber-700 p-3 rounded-xl">
                            <Truck className="w-8 h-8 text-warm-cream" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown">Shipping Policy</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {[
                            {
                                icon: Truck,
                                title: "Standard Shipping",
                                time: "3-5 business days",
                                price: "$9.99",
                                highlight: false
                            },
                            {
                                icon: Truck,
                                title: "Expedited Shipping",
                                time: "1-2 business days",
                                price: "$19.99",
                                highlight: false
                            },
                            {
                                icon: Heart,
                                title: "Free Shipping",
                                time: "3-5 business days",
                                price: "Orders $50+",
                                highlight: true
                            }
                        ].map((option, index) => {
                            const IconComponent = option.icon;
                            return (
                                <div
                                    key={index}
                                    className={`p-6 rounded-xl border-2 ${option.highlight
                                        ? 'bg-gradient-to-br from-amber-50 to-gold/10 border-amber-300'
                                        : 'bg-sage-green/5 border-sage-green/20'
                                        }`}
                                >
                                    <div className="text-center">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${option.highlight ? 'bg-amber-700' : 'bg-sage-green'
                                            }`}>
                                            <IconComponent className="w-6 h-6 text-warm-cream" />
                                        </div>
                                        <h3 className="font-semibold text-deep-brown mb-2">{option.title}</h3>
                                        <p className="text-deep-brown/80 text-sm mb-2">{option.time}</p>
                                        <p className={`font-bold ${option.highlight ? 'text-amber-700' : 'text-deep-brown'}`}>
                                            {option.price}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                    <Clock className="w-5 h-5" />
                                    <span>Processing Time</span>
                                </h3>
                                <p className="text-deep-brown/80 mb-4">
                                    Orders are typically processed within 1-2 business days. Orders placed after 2 PM EST
                                    or on weekends will be processed the next business day.
                                </p>
                                <div className="bg-sage-green/10 p-4 rounded-lg">
                                    <p className="text-sm text-deep-brown/80">
                                        📦 You'll receive a tracking number via email once your order ships.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                    <Users className="w-5 h-5" />
                                    <span>Shipping Locations</span>
                                </h3>
                                <p className="text-deep-brown/80 mb-4">
                                    We currently ship only within the United States. We're working to expand our shipping
                                    options to include international destinations in the future.
                                </p>
                                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                    <p className="text-sm text-amber-800">
                                        🌍 International shipping coming soon! Join our newsletter for updates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                <AlertCircle className="w-5 h-5" />
                                <span>Delivery Issues</span>
                            </h3>
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <p className="text-red-800">
                                    If your package is lost or damaged during shipping, please contact us immediately.
                                    We'll work with the carrier to resolve the issue and ensure you receive your order.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Terms of Service */}
                <section id="terms" className="mb-16 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-amber-700 p-3 rounded-xl">
                            <FileText className="w-8 h-8 text-warm-cream" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown">Terms of Service</h2>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-amber-700 flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>Acceptance of Terms</span>
                            </h3>
                            <div className="bg-sage-green/10 p-6 rounded-xl">
                                <p className="text-deep-brown/80">
                                    By accessing and using this website, you accept and agree to be bound by the terms
                                    and provision of this agreement. If you do not agree to abide by the above, please
                                    do not use this service.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-amber-700 flex items-center space-x-2">
                                <Lock className="w-5 h-5" />
                                <span>Use License</span>
                            </h3>
                            <p className="text-deep-brown/80 mb-4">
                                Permission is granted to temporarily download one copy of the materials on Robin Perkins
                                Boardgames' website for personal, non-commercial transitory viewing only. Under this license you may not:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    "Modify or copy the materials",
                                    "Use materials for commercial purposes",
                                    "Attempt to reverse engineer software",
                                    "Remove copyright or proprietary notations"
                                ].map((restriction, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <AlertCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                        <span className="text-sm text-deep-brown/80">{restriction}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                    <FileText className="w-5 h-5" />
                                    <span>Product Information</span>
                                </h3>
                                <p className="text-deep-brown/80 text-sm">
                                    We strive to provide accurate product information, including descriptions, prices,
                                    and availability. However, we do not warrant that product descriptions or other content
                                    is accurate, complete, reliable, current, or error-free.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                    <CreditCard className="w-5 h-5" />
                                    <span>Pricing</span>
                                </h3>
                                <p className="text-deep-brown/80 text-sm">
                                    All prices are subject to change without notice. We reserve the right to modify
                                    prices at any time. In the event of a pricing error, we reserve the right to
                                    cancel any orders placed at the incorrect price.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy */}
                <section id="privacy" className="mb-16 bg-white p-8 rounded-2xl shadow-lg border border-sage-green/20">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-amber-700 p-3 rounded-xl">
                            <Eye className="w-8 h-8 text-warm-cream" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-brown">Privacy Policy</h2>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-amber-700 flex items-center space-x-2">
                                <Users className="w-5 h-5" />
                                <span>Information We Collect</span>
                            </h3>
                            <p className="text-deep-brown/80 mb-4">
                                We collect information you provide directly to us, such as when you create an account,
                                make a purchase, or contact us for support. This may include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { icon: Users, text: "Name and contact information" },
                                    { icon: Mail, text: "Billing and shipping addresses" },
                                    { icon: CreditCard, text: "Payment information (securely processed)" },
                                    { icon: FileText, text: "Order history and preferences" }
                                ].map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={index} className="flex items-center space-x-3 bg-sage-green/10 p-3 rounded-lg">
                                            <IconComponent className="w-5 h-5 text-amber-700 flex-shrink-0" />
                                            <span className="text-sm text-deep-brown/80">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-amber-700 flex items-center space-x-2">
                                <Shield className="w-5 h-5" />
                                <span>How We Use Your Information</span>
                            </h3>
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                                <p className="text-amber-900 mb-4">We use the information we collect to:</p>
                                <ul className="space-y-2">
                                    {[
                                        "Process and fulfill your orders",
                                        "Communicate with you about your orders",
                                        "Provide customer support",
                                        "Improve our website and services",
                                        "Send you promotional emails (with your consent)"
                                    ].map((use, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <CheckCircle className="w-4 h-4 text-amber-700 mt-1 flex-shrink-0" />
                                            <span className="text-sm text-amber-900">{use}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                    <Lock className="w-5 h-5" />
                                    <span>Information Security</span>
                                </h3>
                                <p className="text-deep-brown/80 text-sm">
                                    We implement appropriate security measures to protect your personal information against
                                    unauthorized access, alteration, disclosure, or destruction. All payment information
                                    is processed through secure, PCI-compliant payment processors.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                    <Shield className="w-5 h-5" />
                                    <span>Your Rights</span>
                                </h3>
                                <p className="text-deep-brown/80 text-sm">
                                    You have the right to access, update, or delete your personal information. You may also
                                    opt out of receiving promotional emails at any time by clicking the unsubscribe link
                                    in our emails or contacting us directly.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 text-amber-700 flex items-center space-x-2">
                                <Mail className="w-5 h-5" />
                                <span>Contact Us About Privacy</span>
                            </h3>
                            <div className="bg-sage-green/10 p-4 rounded-lg">
                                <p className="text-deep-brown/80">
                                    If you have any questions about these policies or your personal information, please
                                    contact us at <span className="font-medium text-amber-700">hello@givenministry.com</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Last Updated */}
                <div className="text-center py-8 border-t border-sage-green/30">
                    <div className="flex items-center justify-center space-x-2 text-deep-brown/60 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Last updated: {new Date().toLocaleDateString()}</span>
                    </div>
                    <p className="text-xs text-deep-brown/50">
                        We may update these policies from time to time. We'll notify you of any significant changes.
                    </p>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-amber-700 to-amber-800 p-8 rounded-2xl text-warm-cream text-center">
                    <div className="flex justify-center mb-4">
                        <Heart className="w-12 h-12" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Questions About Our Policies?</h2>
                    <p className="mb-6 text-warm-cream/90">
                        We're here to help! Contact our friendly customer service team for any clarifications.
                    </p>
                    <a
                        href="/about#contact"
                        className="inline-flex items-center space-x-2 bg-warm-cream text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Contact Us</span>
                    </a>
                </div>
            </div >
        </div >
    );
}