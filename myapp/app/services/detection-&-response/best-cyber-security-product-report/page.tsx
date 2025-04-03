import Return from "@/app/components/return";
import Image from "next/image";

export default function CSProductReport() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/D&R/banner.png"
                            alt="CS Background"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">

                            Best Cyber Security
                            Product Report
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt="product image"
                                src="/D&R/CyberReport.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

                            <p className="mb-8 leading-relaxed">
                                Choosing a right security product has already been a challenge, end user professionals do market research, cross references, use personal contacts, vendor feedback from existing customers and perform POC, all can be just waste of time and you as an individual can make a very expensive wrong decision and end up with waste of time, efforts and money.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Technologies are evolving as the business is growing and emerging, more challenges grow automatically specially in the domain of Cyber security since good user experience demanding enhanced and integrated use of technology and techniques.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                In given scenario almost all vendor show case their products as single window solution to solve complex business issues but who is going to prove their claims are true and they are really meeting end user business requirements?
                            </p>
                            <p className="mb-8 leading-relaxed">
                                At DIGINFO, our R&D researches, being neutral and unbiased, evaluate TOP Cyber security products under the umbrella of DGLABS, we built our own methodology and Framework based on years of industrial experience.
                                DGLABS is an independent cyber security research and development organization where we thoroughly evaluate cyber security technologies and products.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <Return />
        </div>
    );
}