
import { FaHeart, FaHandHoldingHeart, FaGlobe, FaUsers } from 'react-icons/fa';

const VisionMission = () => {
    return (
        <section id="about" className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Who We Are</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Driven by Compassion, <br />United for Change</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Baal Sanjeevani is more than an organization; it's a movement to restore lost childhoods. We believe that every child is a universe of potential waiting to be explored.
                    </p>
                </div>

                {/* Our Story / Intro */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                            alt="Children playing"
                            className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover transform transition hover:-translate-y-2 duration-500"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-blue-600 hidden md:block">
                            <div className="flex items-center space-x-4">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                    <FaUsers size={24} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">10,000+</p>
                                    <p className="text-sm text-gray-500">Lives Touched</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Founded in 2015, Baal Sanjeevani began with a simple yet powerful idea: that no child should be deprived of their basic rights. What started as a small community initiative has grown into a beacon of hope for thousands of underprivileged children across the region.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We work tirelessly to bridge the gap between despair and hope, providing education, healthcare, and protection to those who need it most. Our journey is fueled by the smiles of the children we serve and the support of changemakers like you.
                        </p>
                        <div className="pt-4">
                            <button className="text-blue-600 font-bold hover:text-blue-800 transition flex items-center gap-2 group">
                                Read More About Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <FaGlobe size={120} />
                        </div>
                        <div className="p-10 relative z-10">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <FaGlobe size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To create a compassionate world where every child is nurtured, protected, and given the opportunity to thrive. We envision a society where no child is left behind, and every young mind is empowered to build a sustainable and bright future.
                            </p>
                        </div>
                        <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>

                    {/* Mission Card */}
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <FaHandHoldingHeart size={120} />
                        </div>
                        <div className="p-10 relative z-10">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                                <FaHandHoldingHeart size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <ul className="space-y-4 text-gray-600 text-lg">
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1 text-xs">
                                        <FaHeart size={10} />
                                    </span>
                                    <span><strong>Educate:</strong> Providing quality education and digital literacy.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1 text-xs">
                                        <FaHeart size={10} />
                                    </span>
                                    <span><strong>Nourish:</strong> Ensuring access to nutritious meals and healthcare.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1 text-xs">
                                        <FaHeart size={10} />
                                    </span>
                                    <span><strong>Protect:</strong> Creating safe spaces free from exploitation.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1 text-xs">
                                        <FaHeart size={10} />
                                    </span>
                                    <span><strong>Empower:</strong> Building life skills for self-reliance.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="h-2 w-full bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
