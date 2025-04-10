import EnquiryImage from "../../assets/enquiry.jpg";

export default function Enquiry() {
  return (
    <>
      <section
        className="relative bg-cover bg-center text-white py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${EnquiryImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative w-full max-w-3xl mx-auto z-10">
          {/* Form Section */}
          <div className="mb-8 border-b-4 border-[#ee5672] w-max">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase">
              Book Your Events Here
            </h2>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
            <div>
              <label className="text-white font-semibold uppercase text-sm">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 bg-white/80 rounded outline-none"
                placeholder="Enter Your Name"
              />
            </div>

            <div>
              <label className="text-white font-semibold uppercase text-sm">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full p-3 bg-white/80 rounded outline-none"
                placeholder="Enter Your Mobile Number"
              />
            </div>

            <div>
              <label className="text-white font-semibold uppercase text-sm">
                Mail ID
              </label>
              <input
                type="email"
                className="w-full p-3 bg-white/80 rounded outline-none"
                placeholder="Enter Your Email ID"
              />
            </div>

            <div>
              <label className="text-white font-semibold uppercase text-sm">
                Your City
              </label>
              <input
                type="text"
                className="w-full p-3 bg-white/80 rounded outline-none"
                placeholder="Enter Your City Name"
              />
            </div>

            <div>
              <label className="text-white font-semibold uppercase text-sm">
                Event Date
              </label>
              <input
                type="date"
                className="w-full p-3 bg-white/80 rounded outline-none"
              />
            </div>

            <div>
              <label className="text-white font-semibold uppercase text-sm">
                Required Service
              </label>
              <select className="w-full p-3 bg-white/80 rounded outline-none">
                <option>Birthday Party</option>
                <option>Wedding/Marriage</option>
                <option>Corporate Events</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-white font-semibold uppercase text-sm">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full p-3 bg-white/80 rounded outline-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-black hover:bg-[#d54d66] hover:text-black text-[#ee5672] px-6 py-3 rounded font-semibold transition duration-300 uppercase"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#ee5672] mb-4">
              EventVibe
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Creating unforgettable memories for your special moments — from
              birthdays to weddings and everything in between.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#ee5672] mb-4">
              Location
            </h4>
            <ul>
              <li>
                <i className="fa fa-map-marker-alt text-[#ee5672] mr-2"></i>
                Chennai, Tamil Nadu
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-[#ee5672] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>
                <i className="fas fa-phone-alt text-[#ee5672] mr-2"></i> +91
                90876543112
              </li>
              <li>
                <i className="fas fa-envelope text-[#ee5672] mr-2"></i>{" "}
                Sample@email.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} EventVibe. All rights reserved.
        </div>
      </footer>
    </>
  );
}
