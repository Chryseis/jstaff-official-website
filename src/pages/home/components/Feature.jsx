import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons/faFeatherAlt';

const Feature = () => {
    return (
        <section id="features" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-16">
                    为什么音乐人选择 <span className="text-amber-500">Jstaff</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon
                                icon={faMusic}
                                className="text-black text-2xl"
                            ></FontAwesomeIcon>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">精准控音</h3>
                        <p className="text-gray-600">
                            刻度记录功能让每次变调效率提升50%，尤其适合现场演出与录音
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon
                                icon={faFeatherAlt}
                                className="text-black text-2xl"
                            ></FontAwesomeIcon>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">专业耐用</h3>
                        <p className="text-gray-600">
                            金属一体成型工艺，抗压耐磨损，使用寿命提升3倍
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon
                                icon={faBolt}
                                className="text-black text-2xl"
                            ></FontAwesomeIcon>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">卓越操控</h3>
                        <p className="text-gray-600">
                            单手操作可让您在几秒钟内改变位置，而不会中断您的表演。
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon
                                icon={faGuitar}
                                className="text-black text-2xl"
                            ></FontAwesomeIcon>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">个性表达</h3>
                        <p className="text-gray-600">可定制镶嵌面板，让工具成为个人风格的延伸</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
