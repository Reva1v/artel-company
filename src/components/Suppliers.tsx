import {Package} from 'lucide-react';
import LogoLoop from "@/components/LogoLoop";

const suppliers = [
    {name: 'Armstrong Ceilings', src: 'https://i.gyazo.com/e0712bf5d66d20dba6760238416e3ee3.webp'},
    {name: 'Hunter Douglas', src: 'https://i.gyazo.com/70ca08d0303f62418cc9714b8a74a140.webp'},
    {name: 'USG Corporation', src: 'https://i.gyazo.com/e427c969332a708777384c220cbd8fc7.png'},
    {name: 'CertainTeed', src: 'https://i.gyazo.com/6492aeb28b4ef1a32ca00734de5f0d6b.webp'},
    {name: 'James Hardie', src: 'https://i.gyazo.com/26a0f4fcaa91161a6da387dab9ab24ab.png'},
    {name: 'Boral', src: 'https://i.gyazo.com/c5d9808985af21cb1bd62f00b67de5a5.webp'},
];

export function Suppliers() {
    return (
        <section className="py-20 bg-[#EDE8E3] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Package className="w-8 h-8 text-[#8A9A7B]"/>
                        <h2 className="text-[#3D4436] text-3xl font-semibold">Our Material Suppliers & Partners</h2>
                    </div>
                    <p className="text-[#6B7562] max-w-2xl mx-auto">
                        We partner with industry-leading suppliers to ensure premium quality materials.
                    </p>
                </div>
            </div>

            <LogoLoop
                logos={suppliers}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </section>
    );
}