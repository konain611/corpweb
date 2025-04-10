import Return from "@/app/components/return";
import Image from "next/image";

export default function Experience() {

    const clientCategories = [
        {
            title: 'Government',
            clients: [
                'Pakistan Navy',
                'Strategic Plans Divisions – SPD',
                'NUST: Professional Development Center -PDC',
                'NUST – IME Department',
                'NUST – PDH department',
                'IUCN – International Union for Conservation of Nature',
                'MTC – NESCOM',
                'Ministry of Defense – Riyadh, Saudi Arabia'
            ]
        },
        {
            title: 'Planning and Technology',
            clients: [
                'Inotus Pharma',
                'Brookes Pharma',
                'Barroth Hodgson',
                'Abbot Pharmaceuticals Pakistan',
                'Soony Enterprises – Dentin',
                'Hub Leather',
                'YTM – Yountis Textile',
                'A-Karam Textile',
                'International Textile'
            ]
        },
        {
            title: 'Banking / Finance',
            clients: [
                'Silk Bank',
                'Bank Al-Baraka',
                'Mobil Direct',
                'Pak-Oman Bank'
            ]
        },
        {
            title: 'FMCG',
            clients: [
                'English Biscuits – Peek frears',
                'Tapal Tea',
                "Young's Food",
                'Halil Foods',
                'Matco Foods',
                'Colgate Palmolive'
            ]
        },
        {
            title: 'Power Sector',
            clients: [
                'NIFT – National Institutional Facilitation Technologies',
                'HASCOL',
                'Kreflectite',
                'National Power Park Lahore',
                'PARCO'
            ]
        },
        {
            title: 'Broadcast',
            clients: [
                'AlMajdi Islamic TV – Rypath, Saudi Arabia'
            ]
        },
        {
            title: 'Automotive Sector',
            clients: [
                'Alias Honda – Motors Pakistan'
            ]
        },
        {
            title: 'Technology',
            clients: [
                'Lumes Soft Lahore',
                'LOGON Broadband'
            ]
        },
        {
            title: 'Industry',
            clients: [
                'Mamile Industries'
            ]
        },
        {
            title: 'Health Care',
            clients: [
                'Indus Hospital',
                'Aman Foundation',
                'Ziauddin Hospital',
                'Ten pearls'
            ]
        },
        {
            title: 'Logistics',
            clients: [
                'Bykea'
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
                <div className=" flex flex-col items-center text-center">
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
                                <h3 className="text-lg font-semibold text-[#003366] mb-3 border-b pb-2">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.clients.map((client, i) => (
                                        <li key={i} className="text-gray-700 text-sm hover:text-[#003366] transition-colors">
                                            {client}
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
    )
}