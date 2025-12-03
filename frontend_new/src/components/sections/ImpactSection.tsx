
import { FaChild, FaUsers, FaHome, FaAward } from 'react-icons/fa';
import { impactStats, type ImpactStat } from '../../data/mockData';

const iconMap: Record<ImpactStat['icon'], React.ElementType> = {
    FaChild: FaChild,
    FaUsers: FaUsers,
    FaHome: FaHome,
    FaAward: FaAward,
};

const ImpactSection = () => {
    return (
        <section id="impact" className="relative py-20 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop"
                    alt="Community impact"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-green-900/90 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Transforming lives, one child at a time. Here is the tangible impact of our collective efforts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactStats.map((stat) => {
                        const IconComponent = iconMap[stat.icon];
                        return (
                            <div
                                key={stat.id}
                                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
                            >
                                <div className="text-5xl mb-6 flex justify-center text-yellow-400">
                                    {IconComponent && <IconComponent />}
                                </div>
                                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
