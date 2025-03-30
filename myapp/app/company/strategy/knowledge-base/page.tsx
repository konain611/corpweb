import Return from "@/app/components/return";
import Image from "next/image";

export default function KnowledgeBase() {
    return (
        <div>
            
            <section className="mt-10 relative min-h-[300px] flex items-center">

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/DGEdge/banner.png"
                        alt="Knowledge-base"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                        Knowledge Base
                    </h1>
                </div>
            </section>

            <div className="bg-[#F7F7F7] py-12 px-4 sm:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#003366] text-center mb-8">
                        At DIGINFO, we believe that knowledge is key to effective cyber security. Our approach is based on:
                    </h2>

                    <div className="space-y-8">
              
                        <div>
                            <h3 className="text-xl font-semibold text-[#003366] mb-2">
                                Education and Training
                            </h3>
                            <p className="text-[#003366]">
                                At DG ACADEMY we provide comprehensive training and educational programs to help individuals and organizations understand the latest threats and how to mitigate them. Our training programs cover a wide range of topics, from basic cyber hygiene to advanced threat detection and response.
                            </p>
                        </div>

                       
                        <div>
                            <h3 className="text-xl font-semibold text-[#003366] mb-2">
                                Information Sharing
                            </h3>
                            <p className="text-[#003366]">
                                At DG MAGAZINE we believe in the power of collaboration and information sharing. Our team of experts constantly monitors the cyber landscape and shares their knowledge and expertise with the community through blogs, webinars, and other educational resources.
                            </p>
                        </div>

                 
                        <div>
                            <h3 className="text-xl font-semibold text-[#003366] mb-2">
                                Continuous Improvement
                            </h3>
                            <p className="text-[#003366]">
                                Cyber threats are constantly evolving, and so is our approach to cyber security. We continuously evaluate and improve our knowledge-based solutions to ensure that our clients are always protected against the latest threats.
                            </p>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-xl font-semibold text-[#003366] mb-2">
                                Contact Us Today
                            </h3>
                            <p className="text-[#003366] mb-4">
                                At DIGINFO, we are committed to providing our clients with the knowledge and expertise they need to protect their valuable assets. Contact us today to learn more about our knowledge-based solutions and how we can help you stay ahead of potential cyber threats.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <Return/>
        </div>
    )
}