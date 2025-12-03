import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Thank you for reaching out! We will get back to you soon. (This is a demo - no data was actually sent)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative py-24 bg-gray-50">
            <div className="absolute inset-0 z-0 opacity-5">
                <img
                    src="https://images.unsplash.com/photo-1423666639041-f142fcb93370?q=80&w=2000&auto=format&fit=crop"
                    alt="Contact Background"
                    className="w-full h-full object-cover grayscale"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Contact Us</span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Get in Touch</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Have questions or want to get involved? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start space-x-6 border border-gray-100 group">
                            <div className="bg-blue-50 text-blue-600 p-4 rounded-full flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <FaMapMarkerAlt className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    123 Child Welfare Street<br />
                                    Mumbai, Maharashtra 400001<br />
                                    India
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start space-x-6 border border-gray-100 group">
                            <div className="bg-blue-50 text-blue-600 p-4 rounded-full flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <FaEnvelope className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-600">info@baalsanjeevani.org</p>
                                <p className="text-gray-600">support@baalsanjeevani.org</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start space-x-6 border border-gray-100 group">
                            <div className="bg-blue-50 text-blue-600 p-4 rounded-full flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <FaPhone className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-gray-600">+91 22 1234 5678</p>
                                <p className="text-gray-600">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Subject *</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
