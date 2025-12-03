
import { testimonials } from '../../data/mockData';

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Stories & Testimonials</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hear from the people whose lives have been touched by our work
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-blue-600 text-4xl mb-4">"</div>
                            <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                            <div className="flex items-center border-t border-gray-300 pt-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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
