

const VisionMission = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden">
                        <div className="h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop"
                                alt="Vision"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To create a compassionate world where every child is nurtured, protected, and given the opportunity to thrive. We envision a society where no child is left behind, and every young mind is empowered to build a sustainable and bright future.
                            </p>
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-xl shadow-md overflow-hidden">
                        <div className="h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1596464743030-22102d757e5b?q=80&w=800&auto=format&fit=crop"
                                alt="Mission"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Educate:</strong> Providing quality education and digital literacy to bridge the gap.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Nourish:</strong> Ensuring access to nutritious meals and essential healthcare.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Protect:</strong> Creating safe spaces free from exploitation and abuse.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span><strong>Empower:</strong> Building life skills and confidence for self-reliance.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-xl shadow-lg text-center">
                    <p className="text-2xl font-semibold text-gray-800 italic">
                        "Every child deserves love, care, and opportunity."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
