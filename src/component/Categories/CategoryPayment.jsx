import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function CategoryPaymentMethod() {
  // form
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  // counter
  const [counter, setcounter] = useState(0);
  // api get
  const [users, setUser] = useState([]);

  const ticketPrice = 50;

  // +-
  const ref = useRef(0);
  // +
  const handleIncrement = () => {
    ref.current = ref.current + 1;
    setcounter(ref.current);
    console.log("working");
  };

  // -
  const handleDecrement = () => {
    ref.current = ref.current = 0;
    setcounter(ref.current);
    console.log("working");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  // get api - user details
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4050/musicregis/get/user-registers"
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [counter]);

  const clickBtn = async (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form data being submitted:", inputs);

      try {
        const response = await axios.post(
          "http://localhost:4050/musicregis/add/register",
          inputs
        );

        setInputs(response.data);
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Failed to send user information:", error);
      }
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!inputs.username) {
      newErrors.username = "Name is required";
    }

    if (!inputs.password) {
      newErrors.password = "Password is required";
    } else if (!/^\S{6,}$/.test(inputs.password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!inputs.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!inputs.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10,}$/.test(inputs.mobile)) {
      newErrors.mobile = "Mobile number must be at least 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={clickBtn}
        className="w-full max-w-3xl bg-white shadow-lg p-8 rounded-3xl border border-gray-300"
      >
        <div className="text-center text-3xl font-bold uppercase tracking-wide text-[#ee5672] mb-6">
          Event Booking - Payment
        </div>

        {/* Input Fields */}
        <div className="space-y-5">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              value={inputs.username || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee5672] outline-none"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              Mobile No
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Your Mobile No"
              value={inputs.mobile || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee5672] outline-none"
            />
            {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={inputs.email || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee5672] outline-none"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={inputs.password || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ee5672] outline-none"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-5">
          <input type="checkbox" className="w-5 h-5" />
          <label className="text-[#ee5672]">
            I agree to the terms of service and privacy policy
          </label>
        </div>

        <div className="mt-8 p-6 bg-[#ee5672]/10 rounded-xl shadow-md border border-[#ee5672]">
          <h1 className="text-[#ee5672] text-2xl font-bold text-center mb-5">
            Online Payment
          </h1>

          <div className="flex items-center justify-center gap-6 mb-6">
            <label className="text-lg font-semibold text-gray-700">
              Quantity
            </label>

            <button
              type="button"
              onClick={handleDecrement}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 text-[#ee5672] text-2xl font-bold rounded-full shadow-md hover:bg-[#ee5672] hover:text-white transition-all duration-300"
            >
              -
            </button>

            {/* your counter is: */}
            <span className="text-2xl font-bold text-gray-900">{counter}</span>

            <button
              type="button"
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 text-[#ee5672] text-2xl font-bold rounded-full shadow-md hover:bg-[#ee5672] hover:text-white transition-all duration-300"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <div className="text-center mb-6">
            <p className="text-xl font-semibold text-gray-700">
              Price:
              <span className="text-[#ee5672] font-bold ml-1">
                ${ticketPrice}
              </span>
            </p>
            <p className="text-xl font-semibold text-gray-700">
              Total:
              <span className="text-[#ee5672] font-bold ml-1">
                ${counter * ticketPrice}
              </span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ee5672] text-white font-bold text-xl px-6 py-3 rounded-full shadow-lg hover:bg-[#d94a61] transition duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Book Your Tickets
          </button>
        </div>
      </form>
    </div>
  );
}
