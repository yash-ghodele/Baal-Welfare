
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
        <section id="programs" className="relative py-20 bg-gray-50">
            <div className="absolute inset-0 z-0 opacity-10">
                <img
                    src="https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&w=2000&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our holistic approach ensures every child receives the support they need to grow, learn, and succeed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => {
                        const IconComponent = iconMap[program.icon];
                        return (
                            <div
                                key={program.id}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-blue-600 text-4xl mb-4">
                                    {IconComponent && <IconComponent />}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{program.title}</h3>
                                <p className="text-gray-600 mb-4">{program.description}</p>
                                <button className="text-blue-600 hover:text-blue-800 font-medium transition">
                                    Learn More →
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
