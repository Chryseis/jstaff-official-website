import ContactUs from '@/components/ContactUs.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeixin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-amber-500 mb-4">Jstaff</h3>
                        <p className="text-gray-400 mb-4">
                            自2019年起专注于打造优质吉他变调夹。由音乐人打造，为音乐人而生
                        </p>
                        <div className="flex space-x-4">
                            <ContactUs>
                                <a className="text-gray-400 hover:text-amber-500 transition">
                                    <FontAwesomeIcon icon={faWeixin}></FontAwesomeIcon>
                                </a>
                            </ContactUs>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">产品</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-amber-500 transition"
                                >
                                    S1滑动变调夹
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-amber-500 transition"
                                >
                                    J2铜制卡式变调夹
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-amber-500 transition"
                                >
                                    J1铝制卡式变调夹
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; 2025 Jstaff. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
