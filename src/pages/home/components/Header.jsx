import ContactUs from '@/components/ContactUs.jsx';

const Header = () => {
    return (
        <>
            <header className="sticky inset-0 z-[999] bg-black text-white shadow-md">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold text-amber-500">
                            Jstaff<span className="text-white text-2xl">.pro</span>
                        </h1>
                    </div>
                    <nav className="hidden md:flex space-x-8 text-lg">
                        <a href="#products" className="hover:text-amber-400 transition">
                            产品
                        </a>
                        <a href="#features" className="hover:text-amber-400 transition">
                            特点
                        </a>
                        <a href="#materials" className="hover:text-amber-400 transition">
                            材料
                        </a>
                        <a href="#support" className="hover:text-amber-400 transition">
                            支持
                        </a>
                    </nav>
                    <div className="flex items-center space-x-6">
                        <ContactUs>
                            <button className="text-white hover:text-amber-400 relative">
                                <i className="fas fa-brands fa-weixin text-xl"></i>
                            </button>
                        </ContactUs>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
