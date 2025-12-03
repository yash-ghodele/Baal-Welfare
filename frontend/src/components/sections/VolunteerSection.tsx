import { useState } from 'react';
import { volunteerRoles } from '../../data/mockData';

const VolunteerSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Volunteer form submitted:', formData);
        alert('Thank you for your interest! We will contact you soon. (This is a demo - no data was actually sent)');
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="volunteer" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Join Our Mission</span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Volunteer With Us</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-blue-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Join our community of dedicated volunteers and make a real difference in children's lives.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {volunteerRoles.map((role) => (
                        <div
                            key={role.id}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{role.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{role.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
                    <div className="bg-green-600 py-6 px-8">
                        <h3 className="text-2xl font-bold text-white">Sign Up to Volunteer</h3>
                        <p className="text-green-100">Fill out the form below and we'll get back to you.</p>
                    </div>
                    <div className="p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
                                        placeholder="Your full name"
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
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
                                        placeholder="+91 1234567890"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Area of Interest *</label>
                                    <div className="relative">
                                        <select
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all appearance-none"
                                        >
                                            <option value="">Select an area</option>
                                            <option value="teaching">Teaching Support</option>
                                            <option value="events">Event Volunteer</option>
                                            <option value="fundraising">Fundraising Partner</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
                                    placeholder="Tell us about yourself and why you want to volunteer..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
