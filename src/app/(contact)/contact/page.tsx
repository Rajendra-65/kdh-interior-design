import React from "react";

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Contact KHD Interior Design</h1>
                <p className="text-gray-500 mt-2">We’d love to hear about your project</p>
            </div>

            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-md">

                
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" placeholder="Your Name" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-khd" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" placeholder="you@example.com" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-khd" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea  placeholder="Tell us about your interior project..." className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-khd" />
                        </div>

                        <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">Send Message</button>
                        <h1 className= "mx-2">or</h1>
                        <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">Request an call back</button>
                    </form>
                </div>

                
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Visit or Contact Us</h2>
                    <div>
                        <p className="text-gray-700"><strong>Address:</strong>ChandraShekharpur, Kanheilal Complex , plot.No 42</p>
                        <p className="text-gray-700"><strong>Phone:</strong> +91 98765 43210</p>
                        <p className="text-gray-700"><strong>Email:</strong> contact@khdinteriors.com</p>
                    </div>

                    <iframe
                        src="https://www.google.com/maps?q=Kanheilal%20Complex,%20Plot%20No.42,%20Chandrasekharpur,%20Bhubaneswar&output=embed"
                        width="100%"
                        height="300"
                        loading="lazy"
                        
                    >
                    </iframe>

                </div>
            </div>
        </div>
    );
};

export default Contact;
