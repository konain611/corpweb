"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { submitForm } from "@/app/actions/submitForm";
import Return from "@/app/components/return";
import Image from "next/image";

export default function CustomerSupport() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    phone: "",
    domain: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  useEffect(() => {
    const email = Cookies.get("email");
    const first_name = Cookies.get("first_name");
    setFormData((p) => ({ ...p, email: email || "", first_name: first_name || "" }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (Cookies.get("cookie_consent") === "accepted") {
      Cookies.set(e.target.name, e.target.value, { expires: 30 });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    try {
      await submitForm(formData);
      Cookies.set("email", formData.email, { expires: 30 });
      Cookies.set("first_name", formData.first_name, { expires: 30 });
      setSubmitStatus("success");
      setFormData({ first_name: "", last_name: "", email: "", subject: "", phone: "", domain: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };


    return (
        <div className='bg-white'>
            <div className="bg-white">
                {/* Banner Section */}
                <section className="relative min-h-[300px] flex items-center">
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
                            Contact Us
                        </h1>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            24/7 expert assistance to resolve technical challenges and maintain seamless business continuity.
                        </p>
                    </div>
                </section>

                {/* Form Section */}
                {submitStatus === 'success' ? (
                    <div className="p-10 text-center">
                        <h2 className="text-2xl font-semibold text-green-600">Thank you! Your inquiry has been submitted.</h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Wait 5 seconds to submit another response or click the button below to return to the homepage.
                        </p>
                    </div>
                ) : (
                    <section className="my-8">
                        <form
                            onSubmit={handleSubmit}
                            className="max-w-[90%] mx-auto p-6 bg-white rounded-lg shadow-md"
                        >
                            {submitStatus === 'error' && (
                                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                                    Error submitting form. Please try again.
                                </div>
                            )}

                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-[#003366] text-sm font-bold mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        required
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="w-full p-2 border text-gray-600 rounded focus:ring-2 focus:ring-[#003366]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#003366] text-sm font-bold mb-2">Last Name *</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        required
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className="w-full p-2 border text-gray-600 rounded focus:ring-2 focus:ring-[#003366]"
                                    />
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-[#003366] text-sm font-bold mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-2 border text-gray-600 rounded focus:ring-2 focus:ring-[#003366]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#003366] text-sm font-bold mb-2">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        pattern="^\+?[0-9]+$"
                                        title="Please enter a valid phone number. It may start with a '+' and contain only digits."
                                        className="w-full p-2 border text-gray-600 rounded focus:ring-2 focus:ring-[#003366]"
                                    />
                                </div>

                            </div>

                            {/* Dropdowns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-[#003366] text-sm font-bold mb-2">Select Domain *</label>
                                    <select
                                        name="domain"
                                        required
                                        value={formData.domain}
                                        onChange={handleChange}
                                        className="w-full p-2 border text-gray-600 rounded focus:ring-2 focus:ring-[#003366]"
                                    >
                                        <option value="">Select a domain</option>
                                        <option value="Diginfo">Diginfo</option>
                                        <option value="DGAcademy">DGAcademy</option>
                                        <option value="DGMagazine">DGMagazine</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[#003366] text-sm font-bold mb-2">Inquiry Type *</label>
                                    <select
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full p-2 border text-gray-600 rounded focus:ring-2 focus:ring-[#003366]"
                                    >
                                        <option value="">Select an Option</option>
                                        <option value="Customer Support">Customer Support</option>
                                        <option value="Media Request">Media Request</option>
                                        <option value="General Query">General Query</option>
                                        <option value="Partner With Us">Partner With Us</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                                <label className="block text-[#003366] text-sm font-bold mb-2">Inquiry *</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 border text-gray-600 rounded focus:ring-2 focus:ring-[#003366]"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`bg-[#003366] text-white px-8 py-3 rounded hover:bg-[#F69226] transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Submitting...' : 'SUBMIT YOUR INQUIRY'}
                                </button>
                            </div>
                        </form>
                    </section>
                )}
            </div>

            <Return />
        </div>
    );
}