

const GallerySection = () => {
    const placeholderImages = [
        { id: 1, alt: 'Children in classroom', src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop' },
        { id: 2, alt: 'Girl studying', src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop' },
        { id: 3, alt: 'Sports day event', src: 'https://images.unsplash.com/photo-1610962386266-935f46401038?q=80&w=800&auto=format&fit=crop' },
        { id: 4, alt: 'Community gathering', src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop' },
        { id: 5, alt: 'Happy group', src: 'https://images.unsplash.com/photo-1519068737630-e5dbad3cdd72?q=80&w=800&auto=format&fit=crop' },
        { id: 6, alt: 'Child dreaming', src: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=800&auto=format&fit=crop' },
        { id: 7, alt: 'Smiling child', src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop' },
        { id: 8, alt: 'Playing cricket', src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop' },
        { id: 9, alt: 'Hands together', src: 'https://images.unsplash.com/photo-1529390003868-6c640a9376c6?q=80&w=800&auto=format&fit=crop' },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Glimpses of our programs, events, and the joy we bring to children's lives
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {placeholderImages.map((image) => (
                        <div
                            key={image.id}
                            className="aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
