import banner from '@/assets/images/banner.jpg';

const Banner = () => {
    return (
        <section className="relative h-screen">
            <div className="absolute inset-0 bg-gray-900 z-0">
                <img
                    src={banner}
                    alt="Guitar with jstaff"
                    className="w-full h-full object-cover opacity-70"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
            <div className="container mx-auto relative z-20 h-full flex flex-col justify-center px-6">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                        完美的音调
                        <br />
                        绝对的音准
                    </h1>
                    <p className="text-xl text-gray-300">
                        为追求精准、舒适和可靠性的吉他手打造的革命性变调夹，
                    </p>
                    <p className="text-xl text-gray-300 mb-8">精准与美学的革新之作</p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#learn"
                            className="bg-amber-500 font-bold px-8 py-3 rounded-md hover:bg-amber-600 transition"
                        >
                            立即体验
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
