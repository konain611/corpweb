import Return from "@/app/components/return";
import Image from "next/image";

export default function Experience() {

    const clientCategories = [
        {
            title: 'Government',
            clients: [
                { name: 'Pakistan Navy', logo: '/EXP/pakNavy.png' },
                { name: 'Strategic Plans Divisions – SPD', logo: '/EXP/spd.png' },
                { name: 'NUST: Professional Development Center -PDC', logo: '/EXP/nust.png' },
                { name: 'NUST – IME Department', logo: '/EXP/nust.png' },
                { name: 'NUST – PDH department', logo: '/EXP/nust.png' },
                { name: 'IUCN – International Union for Conservation of Nature', logo: '/EXP/iucn.jpg' },
                { name: 'MTC – NESCOM', logo: '/EXP/nescom.png' },
                { name: 'Ministry of Defense – Riyadh, Saudi Arabia', logo: '/EXP/mod.png' }
            ]
        },
        {
            title: 'Pharmaceutical / Textile Industry',
            clients: [
                { name: 'Indus Pharma', logo: '/EXP/indus.png' },
                { name: 'Brookes Pharma', logo: '/EXP/brookes.jpg' },
                { name: 'Barret Hodgson', logo: '/EXP/bh.jpg' },
                { name: 'Abbott Pharmaceuticals Pakistan', logo: '/EXP/abbott.png' },
                { name: 'Soorty Enterprises – Denim', logo: '/EXP/soorty.png' },
                { name: 'Hub Leather', logo: '/EXP/hub.png' },
                { name: 'YTM – Yunus Textile', logo: '/EXP/yunus.png' },
                { name: 'Al-Karam Textile', logo: '/EXP/ak.jpg' },
                { name: 'International Textile', logo: '/EXP/international.jpg' }
            ]
        },
        {
            title: 'FMCG',
            clients: [
                { name: 'English Biscuits – Peek freans', logo: '/EXP/Peekfreans.png' },
                { name: 'Tapal Tea', logo: '/EXP/tapal.png' },
                { name: "Young's Food", logo: '/EXP/young.png' },
                { name: 'Hilal Foods', logo: '/EXP/hilal.png' },
                { name: 'Matco Foods', logo: '/EXP/matco.jpg' },
                { name: 'Colgate Palmolive', logo: '/EXP/cp.png' }
            ]
        },
        {
            title: 'Banking / Finance',
            clients: [
                { name: 'Silk Bank', logo: '/EXP/silk.png' },
                { name: 'Bank Al-Baraka', logo: '/EXP/albarka.png' },
                { name: 'Mobi Direct', logo: '/EXP/mobi.png' },
                { name: 'Pak-Oman Bank', logo: '/EXP/pakoman.png' }
            ]
        },
        {
            title: 'Power Sector',
            clients: [
                { name: 'NIFT – National Institutional Facilitation Technologies', logo: '/EXP/nift.jpg' },
                { name: 'HASCOL', logo: '/EXP/hascol.png' },
                { name: 'K-Electric', logo: '/EXP/ke.png' },
                { name: 'National Power Park Lahore', logo: '/EXP/npp.png' },
                { name: 'PARCO', logo: '/EXP/parco.jpg' }
            ]
        },
        {
            title: 'Health Care',
            clients: [
                { name: 'Indus Hospital', logo: '/EXP/indusHodpital.png' },
                { name: 'Aman Foundation', logo: '/EXP/aman.webp' },
                { name: 'Ziauddin Hospital', logo: '/EXP/ziauddin.png' },
                { name: 'Ten pearls', logo: '/EXP/10p.webp' }
            ]
        },
        {
            title: 'Broadcast',
            clients: [
                { name: 'AlMajid Islamic TV – Riyadh, Saudi Arabia', logo: '/EXP/almajid.png' }
            ]
        },
        {
            title: 'Automotive Sector',
            clients: [
                { name: 'Atlas Honda – Motors Pakistan', logo: '/EXP/honda.jpg' }
            ]
        },
        {
            title: 'Technology',
            clients: [
                { name: 'Lumen Soft - Lahore', logo: '/EXP/lumensoft.jpg' },
                { name: 'Logon Broadband', logo: '/EXP/logon.png' }
            ]
        },
        {
            title: 'Industry',
            clients: [
                { name: 'Marnite Industries', logo: '/EXP/marnite.jpg' }
            ]
        },
        {
            title: 'Logistics',
            clients: [
                { name: 'Bykea', logo: '/EXP/bykea.png' }
            ]
        }
    ];

    return (
        <div className="bg-white">
            <section className="relative min-h-[300px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/CompanySupport/1.png"
                        alt="Company Review Banner"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                        Experience
                    </h1>
                </div>
            </section>

            <section className="container px-5 py-5 mx-auto mt-10">
                <div className="flex flex-col items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                        THE COMPANIES WE KEEP ARE THOSE THAT PERFORM.
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-800">
                        Real Partners. Real Success Stories.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10">
                        {clientCategories.map((category, index) => (
                            <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-semibold text-[#003366] mb-3 border-b pb-2">
                                    {category.title}
                                </h3>
                                <ul className="space-y-4">
                                    {category.clients.map((client, i) => (
                                        <li key={i} className="flex items-center space-x-3">
                                            <div className="w-12 h-12 relative">
                                                <Image
                                                    src={client.logo || '/placeholder.png'}
                                                    alt={client.name}
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                            <span className="text-gray-700 text-sm hover:text-[#003366] transition-colors">
                                                {client.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Return />
        </div>
    );
}
