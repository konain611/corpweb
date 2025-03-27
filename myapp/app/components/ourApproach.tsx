import Image from 'next/image';

export default function Approach() {
    return (
        <div className="container px-6 md:px-32 py-12">
            <h2 className="text-[#F69226] text-3xl font-semibold mb-7 text-left md:text-left">OUR APPROACH</h2>
            <h1 className="text-[#003366] md:text-4xl font-semibold mb-9 text-left md:text-left leading-snug">WHY US</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                    <Image
                        alt="Icon of a person teaching"
                        width={84}
                        height={84}
                        className="mr-4"
                        src="/Approach/educate.png"
                    />
                    <div>
                        <h4 className="text-2xl text-gray-800 font-bold">EDUCATE</h4>
                        <p>Creation of awareness and gathering of knowledge</p>
                        <p>Training and educating our customers.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Image
                        alt="Icon of a person practicing"
                        width={84}
                        height={84}
                        className="mr-4"
                        src="/Approach/practise.png"
                    />
                    <div>
                        <h4 className="text-2xl text-gray-800 font-bold">PRACTICE</h4>
                        <p>Assessment of problems</p>
                        <p>
                            Optimum solution, professional services, pre-sales, solution designing
                        </p>
                        <p>Implementing DG Solutions</p>
                        <p>Best practices and International standards</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Image
                        alt="Icon of people managing"
                        width={84}
                        height={84}
                        className="mr-4"
                        src="/Approach/manage.png"
                    />
                    <div>
                        <h4 className="text-2xl text-gray-800 font-bold">MANAGE</h4>
                        <p>
                            Our methodical approach in managing and following tested procedures
                            helps our client realize optimum benefit from their investments in
                            people, technology, equipment and business procedures.
                        </p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Image
                        alt="Icon of a person ensuring"
                        width={84}
                        height={84}
                        className="mr-4"
                        src="/Approach/ensure.png"
                    />
                    <div>
                        <h4 className="text-2xl text-gray-800 font-bold">ENSURE</h4>
                        <p>Assurance, audit, compliance, certifications</p>
                        <p>DG Safeguarding and Ensuring</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
