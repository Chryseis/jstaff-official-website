const Product = () => {
    return (
        <section id="products" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">我们的产品</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                        <p className="text-gray-600 mb-2">For unique chord voicings and sounds</p>
                        <p className="font-bold">$44.99</p>
                    </div>
                </div>
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
                        <p className="text-gray-600 mb-2">For unique chord voicings and sounds</p>
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
    );
};

export default Product;
