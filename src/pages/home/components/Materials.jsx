import banner2 from '@/assets/images/banner2.jpg';

const Materials = () => {
    return (
        <section id="materials" className="relative py-20">
            <div className="absolute inset-0 z-0">
                <img src={banner2} alt="Premium materials" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">匠心甄选，臻于品质</h2>
                    <p className="text-lg mb-10">
                        我们严选至优材质，精心打造经久耐用的变调夹，确保持久如新，性能卓越
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-gem text-black text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">钛合金材料</h3>
                            <p>轻盈却异常坚固，历久弥新，始终如一的可靠表现</p>
                        </div>

                        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-cog text-black text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">铜铝材质</h3>
                            <p>精密打造的变调夹，确保每一次操作都如丝般顺</p>
                        </div>

                        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg">
                            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-shield-alt text-black text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">滑轮硅胶</h3>
                            <p>特调配方，在提供完美张力的同时，悉心保护您的吉他</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Materials;
