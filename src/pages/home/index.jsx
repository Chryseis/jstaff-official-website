import './index.less';

const Home = () => {
    return (
        <>
            <header className="bg-black text-white shadow-md">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold text-amber-500">
                            CapoMaster<span className="text-white text-2xl">.pro</span>
                        </h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#products" className="hover:text-amber-400 transition">
                            Products
                        </a>
                        <a href="#features" className="hover:text-amber-400 transition">
                            Features
                        </a>
                        <a href="#materials" className="hover:text-amber-400 transition">
                            Materials
                        </a>
                        <a href="#artists" className="hover:text-amber-400 transition">
                            Artists
                        </a>
                        <a href="#support" className="hover:text-amber-400 transition">
                            Support
                        </a>
                    </nav>
                    <div className="flex items-center space-x-6">
                        <a
                            href="#shop"
                            className="border border-amber-500 text-amber-500 px-4 py-2 rounded hover:bg-amber-500 hover:text-white transition duration-300"
                        >
                            Shop Now
                        </a>
                        <button className="text-white hover:text-amber-400">
                            <i className="fas fa-search text-xl"></i>
                        </button>
                        <button className="text-white hover:text-amber-400 relative">
                            <i className="fas fa-shopping-cart text-xl"></i>
                            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </button>
                        <button className="md:hidden text-white hover:text-amber-400">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </header>
            <section className="relative h-screen">
                <div className="absolute inset-0 bg-gray-900 z-0">
                    <img
                        src="/api/placeholder/1920/1080"
                        alt="Guitar with capo"
                        className="w-full h-full object-cover opacity-70"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
                <div className="container mx-auto relative z-20 h-full flex flex-col justify-center px-6">
                    <div className="max-w-xl">
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                            Perfect Tone.
                            <br />
                            Perfect Pitch.
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Revolutionary capos for guitarists who demand precision, comfort, and
                            reliability.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#shop"
                                className="bg-amber-500 text-black font-bold px-8 py-3 rounded-md hover:bg-amber-600 transition"
                            >
                                Shop Collection
                            </a>
                            <a
                                href="#learn"
                                className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:text-black transition"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="products" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Premium Collection</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group">
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <img
                                    src="/api/placeholder/600/400"
                                    alt="Classic Pro Capo"
                                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                                    <div className="p-4 w-full">
                                        <button className="bg-amber-500 text-black w-full py-2 rounded font-medium">
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold">Classic Pro</h3>
                            <p className="text-gray-600 mb-2">The standard in professional capos</p>
                            <p className="font-bold">$39.99</p>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <img
                                    src="/api/placeholder/600/400"
                                    alt="Elite Series Capo"
                                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                                    <div className="p-4 w-full">
                                        <button className="bg-amber-500 text-black w-full py-2 rounded font-medium">
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold">Elite Series</h3>
                            <p className="text-gray-600 mb-2">Premium materials with gold finish</p>
                            <p className="font-bold">$59.99</p>
                        </div>

                        <div className="group">
                            <div className="relative overflow-hidden rounded-lg mb-4">
                                <img
                                    src="/api/placeholder/600/400"
                                    alt="Partial Capo"
                                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                                    <div className="p-4 w-full">
                                        <button className="bg-amber-500 text-black w-full py-2 rounded font-medium">
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold">Partial Capo</h3>
                            <p className="text-gray-600 mb-2">
                                For unique chord voicings and sounds
                            </p>
                            <p className="font-bold">$44.99</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="#shop"
                            className="inline-block bg-black text-white font-bold px-8 py-3 rounded-md hover:bg-gray-800 transition"
                        >
                            View All Products
                        </a>
                    </div>
                </div>
            </section>
            <section id="features" className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Why Musicians Choose CapoMaster
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-music text-black text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Perfect Tone</h3>
                            <p className="text-gray-600">
                                Our capos maintain perfect pitch and tone across all strings,
                                eliminating buzzing and deadening.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-feather-alt text-black text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Lightweight Design</h3>
                            <p className="text-gray-600">
                                Crafted from aircraft-grade aluminum, our capos are incredibly
                                lightweight without sacrificing durability.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-bolt text-black text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Quick Release</h3>
                            <p className="text-gray-600">
                                One-handed operation lets you change positions in seconds without
                                interrupting your performance.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className="fas fa-guitar text-black text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Neck Protection</h3>
                            <p className="text-gray-600">
                                Silicon padding protects your guitar's finish while providing
                                optimal pressure distribution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="materials" className="relative py-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/api/placeholder/1920/600"
                        alt="Premium materials"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-6">Crafted From Premium Materials</h2>
                        <p className="text-lg mb-10">
                            We source only the finest materials to create capos that will last for
                            years while maintaining their performance and appearance.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-gem text-black text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Aircraft Aluminum</h3>
                                <p>
                                    Lightweight yet incredibly strong to provide years of reliable
                                    service.
                                </p>
                            </div>

                            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-cog text-black text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Stainless Steel</h3>
                                <p>
                                    Precision-engineered hardware ensures smooth operation every
                                    time.
                                </p>
                            </div>

                            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-shield-alt text-black text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Premium Silicone</h3>
                                <p>
                                    Specially formulated to protect your guitar while providing
                                    perfect tension.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="artists" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Trusted by Professional Musicians
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Artist 1"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Alex Rivera</h3>
                                <p className="text-gray-500 mb-4">Grammy-winning Guitarist</p>
                                <p>
                                    "The CapoMaster Elite has been my go-to capo for studio sessions
                                    and live performances. Nothing else comes close in tone
                                    quality."
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Artist 2"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                                <p className="text-gray-500 mb-4">Acoustic Fingerstyle Champion</p>
                                <p>
                                    "I've tried dozens of capos throughout my career, and the
                                    CapoMaster is the only one that maintains perfect intonation
                                    across all strings."
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/api/placeholder/600/400"
                                alt="Artist 3"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Michael Torres</h3>
                                <p className="text-gray-500 mb-4">Classical Guitar Virtuoso</p>
                                <p>
                                    "The precision and craftsmanship of CapoMaster products align
                                    perfectly with the demands of classical guitar performance."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-amber-500 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-black mb-6">Elevate Your Music Today</h2>
                    <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
                        Join thousands of musicians who have discovered the difference a quality
                        capo makes. All products come with our lifetime warranty and 30-day
                        satisfaction guarantee.
                    </p>
                    <a
                        href="#shop"
                        className="inline-block bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-gray-800 transition"
                    >
                        Shop Our Collection
                    </a>
                </div>
            </section>
            <footer className="bg-black text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-amber-500 mb-4">CapoMaster</h3>
                            <p className="text-gray-400 mb-4">
                                Crafting premium guitar capos since 2010. Made by musicians, for
                                musicians.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-amber-500 transition"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-amber-500 transition"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-amber-500 transition"
                                >
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-amber-500 transition"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Products</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        Classic Pro
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        Elite Series
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        Partial Capos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        Accessories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        Limited Editions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        Shipping & Returns
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        Warranty Information
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        Product Care
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-500 transition"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                            <p className="text-gray-400 mb-4">
                                Subscribe to our newsletter for new product announcements and
                                exclusive offers.
                            </p>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-amber-500 text-black px-4 py-2 rounded-r hover:bg-amber-600 transition"
                                >
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
                        <p>&copy; 2025 CapoMaster. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;
