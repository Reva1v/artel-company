import {ImageWithFallback} from './figma/ImageWithFallback';
import {useState} from "react";

const kitchenServices = [
    {
        title: 'Accent Walls',
        description: 'From clean board and batten to rustic brick and soft limewash, our accent walls are designed to complement your architecture and lifestyle.',
        image: 'https://i.gyazo.com/e6b07f55eb81940d48e073aa5d32de0b.webp',
    },
    {
        title: 'Fireplace Build-Outs',
        description: 'Electric fireplace walls with framing, tile or board surrounds, floating mantels, or built-in shelving. All custom-built and professionally installed.',
        image: 'https://i.gyazo.com/169070118f3ef46c868968b6f228e95e.webp',
    },
    {
        title: 'Media Walls',
        description: 'Turn your TV area into a sleek centerpiece. Choose from floating panels, bump-outs, integrated LED lighting, or full wall builds with storage and fireplace integration.',
        image: 'https://i.gyazo.com/d69e8f19c2c4e9100c224760ef224caf.webp',
    },
    {
        title: 'Decorative Ceilings',
        description: 'At Accent Walls Design, we offer decorative ceiling solutions that add texture, warmth, and architectural interest to any room.',
        image: 'https://i.gyazo.com/c069b347acf5e8321acf5990d8da2981.webp',
    },
    {
        title: 'Bedwall Design',
        description: 'Explore our three most popular configurations below—each one thoughtfully designed and professionally installed in homes.',
        image: 'https://i.gyazo.com/1db8cb84aa63f82484dfca13abfa37d9.jpg',
    },
    {
        title: 'Premium Flooring',
        description: 'Durable and stylish flooring options including hardwood, natural stone, and porcelain tile that set the foundation for your kitchen\'s aesthetic.',
        image: 'https://i.gyazo.com/7fde690eb7db4b69867a6518c34a971c.jpg',
    }
];


export function KitchenDesign() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setIsMenuOpen(false);
        }
    };
    return (
        <section id="kitchen-design" className="py-20 px-6 bg-[#F5F2ED]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#3D4436] mb-4">Kitchen Design</h2>
                    <p className="text-[#6B7562] max-w-2xl mx-auto">
                        Elevate your culinary experience with our premium kitchen design and installation services.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {kitchenServices.map((item, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col">
                            <div
                                className="aspect-[4/5] w-full overflow-hidden rounded-lg mb-6 bg-[#F5F2ED]"
                                style={{height: '500px'}}
                            >
                                <ImageWithFallback
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-[#3D4436] text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-[#6B7562] leading-relaxed mb-4 flex-grow">
                                {item.description}
                            </p>

                            {/* Link */}
                            <div onClick={() => scrollToSection('contact')}
                                 className="text-[#3D4436] font-medium border-b border-[#3D4436] w-fit pb-0.5 hover:opacity-70 transition-opacity">
                                Learn more
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}