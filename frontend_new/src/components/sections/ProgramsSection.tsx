
import { FaBook, FaHeart, FaShieldAlt, FaTools, FaFutbol, FaLaptop } from 'react-icons/fa';
import { programs, type Program } from '../../data/mockData';

const iconMap: Record<Program['icon'], React.ElementType> = {
    FaBook: FaBook,
    FaHeart: FaHeart,
    FaShieldAlt: FaShieldAlt,
    FaTools: FaTools,
    FaFutbol: FaFutbol,
    FaLaptop: FaLaptop,
};

const ProgramsSection = () => {
    return (
        <section id="programs" className="relative py-24 bg-gray-50 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-5">
                <img
                    src="https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&w=2000&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Programs</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Our holistic approach ensures every child receives the support they need to grow, learn, and succeed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => {
                        const IconComponent = iconMap[program.icon];
                        return (
                            <div
                                key={program.id}
                                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-500 group-hover:scale-110 ${index % 2 === 0 ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                                    {IconComponent && <IconComponent />}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                                <button className="text-blue-600 font-bold hover:text-blue-800 transition flex items-center gap-2 group-hover:gap-3">
                                    Learn More <span>→</span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
