const Contact = () => {
  return (
    <div className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>

      {/* Form */}
      <form className="grid gap-6 bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 px-4 py-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 px-4 py-2 rounded-md"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="border border-gray-300 px-4 py-2 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Details */}
      <div className="mt-10 text-center text-gray-700">
        <p>Email: msleague@ngo.org</p>
        <p>Phone: +251 912 345 678</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="#" className="hover:text-pink-500">
            Instagram
          </a>
          <a href="#" className="hover:text-sky-500">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
