
const Support = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-12 space-y-12">

            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800">Support & Help Center</h1>
                <p className="mt-2 text-gray-600">
                    We're here to assist you with anything related to your interior design journey with KHD.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-1 text-cyan-600">Email Us</h2>
                    <p className="text-gray-700">support@khd.design</p>
                </div>
                <div className="border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-1 text-cyan-600">Call Us</h2>
                    <p className="text-gray-700">+91 98765 43210</p>
                </div>
                <div className="border rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-1 text-cyan-600">Visit Us</h2>
                    <p className="text-gray-700">Plot No.42, Kanheilal Complex, Chandrasekharpur, Bhubaneswar</p>
                </div>
            </div>


            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h2>
                <form className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 rounded-md p-2"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border border-gray-300 rounded-md p-2"
                    />
                    <textarea
                        placeholder="How can we help you?"
                        rows={4}
                        className="border border-gray-300 rounded-md p-2"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-cyan-600 text-white rounded-md py-2 hover:bg-cyan-700"
                    >
                        Submit
                    </button>
                </form>
            </div>


            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="font-medium cursor-pointer">How do I book a consultation?</summary>
                        <p className="mt-2 text-sm text-gray-600">
                            You can use the contact form above or email us directly at support@khd.design.
                        </p>
                    </details>
                    <details className="border border-gray-300 rounded-md p-4">
                        <summary className="font-medium cursor-pointer">Do you work outside Bhubaneswar?</summary>
                        <p className="mt-2 text-sm text-gray-600">
                            Yes, we handle select projects across Odisha and nearby states. Reach out with your location.
                        </p>
                    </details>
                </div>
            </div>


        </div>
    )
}

export default Support;
