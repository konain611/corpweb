import Return from "@/app/components/return";
import Image from "next/image";

export default function Leadership() {

    const teamMembers = [
        // Row 1
        {
            id: 1,
            name: 'Muhammad Saleem',
            position: 'CEO & Founder',
            experience: '23+ Multi domain industrial experience, Masters degree in Computer Science, Entrepreneur, Researcher, SME, Public Speaker, Senior Instructor and writer',
            image: '/noPicture.jpg'
        },
        {
            id: 2,
            name: 'Goher Khalid',
            position: 'Director HR & Admin Affairs',
            experience: '20+ Industrial Experience HR and Admin, with Masters degree from business Institute',
            image: '/noPicture.jpg'
        },
        {
            id: 3,
            name: 'Muhammad Saeed',
            position: 'Co-Founder and CTO',
            experience: 'Ph.D. Computer Science, Assistant Professor, Researcher, SME, and Senior Writer in IEEE',
            image: '/noPicture.jpg'
        },
        // Row 2
        {
            id: 4,
            name: 'Mirza Furqan Baig',
            position: 'COO – Director Strategy & Planning',
            experience: '20+ International and Local Industry Experience in Marketing & Advertising Communications',
            image: '/noPicture.jpg'
        },
        {
            id: 5,
            name: 'Dr. Ashfaq A Malik',
            position: 'Chief Editor DG Magazine',
            experience: 'PHD Cyber Security, Graduate from Pakistan Naval Academy, 20+ Research / Managerial Experience of Industry',
            image: '/noPicture.jpg'
        },
        {
            id: 6,
            name: 'Kausar Fecto',
            position: 'Director, Legal and Compliance',
            experience: 'Chartered Accountants,Accounting, taxation, compliance and legal affairs',
            image: '/noPicture.jpg'
        },
        // Row 3
        {
            id: 7,
            name: 'Muhammad Akmal Khan',
            position: 'Head Of Marketing & Business Development',
            experience: 'MBA & Masters in Economics23 years Professional Experience in Marketing, Sales & Public Relations.',
            image: '/noPicture.jpg'
        },
        {
            id: 8,
            name: 'Hamed Mohiuddin',
            position: 'Head Of Content Strategy & Writer',
            experience: '25+ years of work experience in Advertising campaigns for local and overseas clients from different sectors.',
            image: '/noPicture.jpg'
        },
        {
            id: 9,
            name: 'Baber Moin',
            position: 'Head Of IT Systems & Operations',
            experience: '21 Year Experienced Professional in IT industry',
            image: '/noPicture.jpg'
        }
    ];

    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">

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
                            Leadership
                        </h1>
                    </div>
                </section>

                <section className="container px-5 py-25 mx-auto">
                    <div className=" flex flex-col items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                            PASSIONATE AND MOTIVATED. OUR MANAGEMENT TEAM IS ALL
                            GEARED UP TO DELIVER THE GOODS
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            DIGINFO has assembled a team of cyber security professionals that understands
                            the complex cyber threat spectrum. The proven methods to help clients achieve highest level of protection and security can only mean business and success.
                        </p>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4"> 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white p-5 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow mx-auto w-full max-w-xs"
                            >
                              
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-3 border-[#003366]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                               
                                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-[#003366] font-medium text-[16px]">{member.position}</p><br></br>
                                <p className="text-gray-600 font-medium text-sm">{member.experience}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Return/>
        </div>
    )
}