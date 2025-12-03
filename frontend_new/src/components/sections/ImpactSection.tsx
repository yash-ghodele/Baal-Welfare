
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
        <section id="impact" className="relative py-24 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop"
                    alt="Community impact"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-green-900/95 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-blue-200 font-bold tracking-wider uppercase text-sm">Our Achievements</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-2">Making a Real Difference</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mb-8"></div>
                    <p className="text-blue-100 max-w-2xl mx-auto text-xl leading-relaxed">
                        Transforming lives, one child at a time. Here is the tangible impact of our collective efforts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impactStats.map((stat) => {
                        const IconComponent = iconMap[stat.icon];
                        return (
                            <div
                                key={stat.id}
                                className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 shadow-xl"
                            >
                                <div className="text-5xl mb-6 flex justify-center text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                                    {IconComponent && <IconComponent />}
                                </div>
                                <div className="text-5xl font-bold mb-2 tracking-tight">{stat.number}</div>
                                <div className="text-blue-100 text-lg font-medium tracking-wide">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
