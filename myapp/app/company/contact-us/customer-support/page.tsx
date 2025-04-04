"use client"
import { supabase } from '@/lib/supabase';
import Return from "@/app/components/return";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomerSupport() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        phone: '',
        domain: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus(null);
      
        try {
          const { data, error } = await supabase
            .from('inquiries')
            .insert([formData])
            .select();
      
          if (error) {
            console.error('Supabase error details:', {
              message: error.message,
              code: error.code,
              details: error.details,
              hint: error.hint
            });
            throw error;
          }
      
          console.log('Inserted data:', data);
          setSubmitStatus('success');
          setFormData({
            first_name: '',
            last_name: '',
            email: '',
            subject: '',
            phone: '',
            domain: '',
            message: ''
          });
        } catch (error: unknown) {
          console.error('Full error object:', error);
          setSubmitStatus('error');
          
          if (error instanceof Error) {
            console.error('Error stack:', error.stack);
          }
        } finally {
          setLoading(false);
        }
      };

    // Debug - remove in production
    useEffect(() => {
        console.log('Form data:', formData);
    }, [formData]);

    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/CustomerSupport/support.png"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            Customer Support
                        </h1>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            24/7 expert assistance to resolve technical challenges and maintain seamless business continuity
                        </p>
                    </div>
                </section>

                <section className="my-8">
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-[90%] mx-auto p-6 bg-white rounded-lg shadow-md"
                    >
                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                                Thank you! Your inquiry has been submitted.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                                Error submitting form. Please try again.
                            </div>
                        )}

                        {/* Name Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    required
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    required
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                />
                            </div>
                        </div>

                        {/* Contact Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-[#003366]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                />
                            </div>
                        </div>

                        {/* Dropdown Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    Select Domain *
                                </label>
                                <select
                                    name="domain"
                                    value={formData.domain}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                    required
                                >
                                    <option value="">Select a domain</option>
                                    <option value="Diginfo">Diginfo</option>
                                    <option value="DGAcademy">DGAcademy</option>
                                    <option value="DGMagazine">DGMagazine</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-500 text-sm font-bold mb-2">
                                Subject *
                            </label>
                            <input
                                type="text"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                            />
                        </div>
                        {/* Inquiry Field */}
                        <div className="mb-6">
                            <label className="block text-gray-500 text-sm font-bold mb-2">
                                Inquiry *
                            </label>
                            <textarea
                                rows={4}
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`bg-[#003366] text-white px-8 py-3 rounded hover:bg-[#F69226] transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? 'Submitting...' : 'SUBMIT YOUR INQUIRY'}
                            </button>
                        </div>
                    </form>
                </section>
            </div>

            <Return />
        </div>
    );
}