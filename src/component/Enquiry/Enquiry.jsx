import { useState } from "react";
import EnquiryImage from "../../assets/enquiry.jpg";
import axios from "axios";

export default function Enquiry() {
  const [userForm, setUserForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    date: "",
    select: "",
    message: "",
  });

  const UserformRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4050/apienquiry/enquiry/api",
        userForm
      );
      console.log("Server response:", response.data);
      alert("Enquiry submitted successfully!");
      setUserForm({
        name: "",
        mobile: "",
        email: "",
        city: "",
        date: "",
        select: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center text-white py-12 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${EnquiryImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative w-full max-w-3xl mx-auto z-10">
          <div className="mb-8 border-b-4 border-[#ee5672] w-max">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase">
              Book Your Events Here
            </h2>
          </div>

          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black"
            onSubmit={UserformRegistration}
          >
            <div>
              <label className="text-white font-semibold uppercase text-sm">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 bg-white/80 rounded outline-none"
                placeholder="Enter Your Name"
                value={userForm.name}
                onChange={(e) =>
                  setUserForm({ ...userForm, name: e.target.value })
                }
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
                value={userForm.mobile}
                onChange={(e) =>
                  setUserForm({ ...userForm, mobile: e.target.value })
                }
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
                value={userForm.email}
                onChange={(e) =>
                  setUserForm({ ...userForm, email: e.target.value })
                }
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
                value={userForm.city}
                onChange={(e) =>
                  setUserForm({ ...userForm, city: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-white font-semibold uppercase text-sm">
                Event Date
              </label>
              <input
                type="date"
                className="w-full p-3 bg-white/80 rounded outline-none"
                value={userForm.date}
                onChange={(e) =>
                  setUserForm({ ...userForm, date: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-white font-semibold uppercase text-sm">
                Required Service
              </label>
              <select
                className="w-full p-3 bg-white/80 rounded outline-none"
                value={userForm.select}
                onChange={(e) =>
                  setUserForm({ ...userForm, select: e.target.value })
                }
              >
                <option value="">Select a Service</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Wedding/Marriage">Wedding/Marriage</option>
                <option value="Corporate Events">Corporate Events</option>
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
                value={userForm.message}
                onChange={(e) =>
                  setUserForm({ ...userForm, message: e.target.value })
                }
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
    </>
  );
}
