import { Link } from 'react-scroll';

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop"
                    alt="Happy children"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Empowering Little Dreams, <span className="text-blue-600">Building Big Futures</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        At Baal Sanjeevani, we believe every child deserves a chance to shine. We provide education, healthcare, and a loving environment to help underprivileged children break the cycle of poverty and reach their full potential.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="donate"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg cursor-pointer"
                        >
                            Donate Now
                        </Link>
                        <Link
                            to="volunteer"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition shadow-lg cursor-pointer"
                        >
                            Become a Volunteer
                        </Link>
                    </div>
                </div>
                <div className="relative hidden md:block">
                    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop"
                            alt="Children studying"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
