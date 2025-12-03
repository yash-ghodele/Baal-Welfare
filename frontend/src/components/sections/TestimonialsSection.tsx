
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/mockData';

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Voices of Change</span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Stories & Testimonials</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Hear from the people whose lives have been touched by our work.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
                        >
                            <div className="absolute top-6 right-8 text-blue-100 text-6xl opacity-50 font-serif">
                                <FaQuoteLeft />
                            </div>
                            <div className="relative z-10 h-full flex flex-col">
                                <p className="text-gray-600 italic mb-8 text-lg leading-relaxed flex-grow">"{testimonial.quote}"</p>
                                <div className="flex items-center pt-6 border-t border-gray-100">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-100 shadow-sm"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                                        <p className="text-sm text-blue-600 font-medium uppercase tracking-wide">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
