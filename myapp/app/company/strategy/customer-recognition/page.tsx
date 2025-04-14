import Return from "@/app/components/return";
import Image from "next/image";

const Testimonials = () => {
    return (
        <div>

            <section className=" relative min-h-[300px] flex items-center">

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/DGEdge/banner.png"
                        alt="CSRecog"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                        Customer Recognition
                    </h1>
                </div>
            </section>

            <div className="bg-[#F7F7F7] py-16 px-4 sm:px-6 lg:px-8">

                <div className="max-w-7xl mx-auto">

                    <div className="mb-16">
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h3 className="text-xl font-semibold text-[#F69226] mb-4">
                                DGACADEMY Implementation at NUST-PNEC
                            </h3>
                            <p className="text-[#003366] mb-4">
                                &quot;DGACADEMY is one of the products from DIGINFO that will bring a cultural change in our college...&quot;
                            </p>
                            <div className="border-l-4 border-[#F69226] pl-4 my-6">
                                <blockquote className="text-[#003366] italic">
                                    &quot;It all started with the complete proposal of Cloud based Cyber Security Trainer comprising of 48 courses of Foundation, Intermediate and Expert level courses related to various domains of Cyber Security.
                                    The pilot Cyber Security course conducted for us (as ‘train the trainers’ concept) demonstrated professionalism as per international standards comparable to other international institutes/ certifications in the world. Great care is taken in the design and execution of these courses to ensure that proper emphasis/clarification is used to deliver and apply to any cyber security student.
                                    Aligning it with the Degree Courses related to Cyber Security at relevant degree awarding institutes (DAI)/Universities can make those programs the best in the world. Bravo to DGACADEMY for delivering high value and taking this initiative at national/international levels.&quot;
                                </blockquote>
                            </div>
                            <div className="mt-6">
                                <p className="font-bold text-[#003366]">Dr. Ashfaq A. Malik</p>
                                <p className="text-[#003366]">Prof Cdr (R) PN. Ex-Dean/ HoD</p>
                                <p className="text-[#003366]">Cyber Security Department, PN Engg College</p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-[#F69226] mb-4">
                                Cyber Security Education Partnership
                            </h3>
                            <p className="text-[#003366] mb-4">
                                &quot;DGACADEMY has provided a flexible and comprehensive VM certification course&quot;
                            </p>
                            <div className="space-y-8">
                                <div className="border-l-4 border-[#F69226] pl-4">
                                    <blockquote className="text-[#003366] italic">
                                        &quot;Working with the staff at SBS is always a pleasure. They helped us write policies that we never had, did intrusion testing and a vulnerability assessment. We are more secure because of the work they do for us.<br></br>
                                        DGACADEMY has provided a flexible and comprehensive VM certification course that offers the custom focus that we were looking for. Great care was taken in the design and execution of this course to ensure that proper emphasis and clarification were used to deliver and apply to any cyber security students. Bravo to DGACADEMY for delivering high value.
                                        Having contracted DIGINFO for several years on many successful projects, I can safely testify that DIGINFO possesses strong communication skills and gives attention to detail enabling them to deliver our projects on time.
                                        If you need guidance on end-to-end turnkey solution that starts with free awareness sessions, readiness checks, assessment and solution requirement with detailed planning and budgeting, then DIGINFO is the organization you want to work with. This would ensure clarity and focus to your business needs&quot;
                                    </blockquote>
                                </div>

                            </div>
                            <div className="mt-6">
                                <p className="font-bold text-[#003366]">Dr. Zeeshan</p>
                                <p className="text-[#003366]">Dean/ HoD</p>
                                <p className="text-[#003366]">Naval Architecture Department, NUST-PNEC</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-[#F69226] mb-4">
                                Diginfo Security Management Capabilities
                            </h3>
                            <p className="text-[#003366] mb-4">
                                &quot;DIGINFO provides us with true security management capabilities&quot;
                            </p>
                            <div className="space-y-8">
                                <div className="border-l-4 border-[#F69226] pl-4">
                                    <blockquote className="text-[#003366] italic">
                                        &quot;We have found DIGINFO to be knowledgeable, very easy to work with and our association with them has been a benefit to our company. The team at DIGINFO have the ability to talk at a high technical level to our IT staff and have a down to earth approach for our end users. They have worked around our schedule and have provided us with information, recommendations and helped implement processes we use to improve our data security and overall company IT performance. We consider DIGINFO our business partner and one of our main resources for data security. We believe an organization of any size would benefit from working with them.&quot;
                                        &quot;DIGINFO provides us with true security management capabilities that meet the stringent real-time performance, reliability and scalability of our mission- critical role to secure IT infrastructure.&quot;
                                    </blockquote>
                                </div>

                            </div>
                            <div className="mt-6">
                                <p className="font-bold text-[#003366]">Dr. Ashfaq A. Malik</p>
                                <p className="text-[#003366]">Prof Cdr (R) PN. Ex-Dean/ HoD</p>
                                <p className="text-[#003366]">Cyber Security Department, PN Engg College</p>
                            </div>
                        </div>

                    </div>


                </div>
                <Return />
            </div>
        </div>
    );
};

export default Testimonials;