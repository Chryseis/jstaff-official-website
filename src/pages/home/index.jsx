import './index.less';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import Product from './components/Product.jsx';
import Feature from './components/Feature.jsx';
import Materials from './components/Materials.jsx';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Product />
            <Feature />
            <Materials />
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
