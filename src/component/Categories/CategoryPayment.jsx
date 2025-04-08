import axios from "axios";
import { useState } from "react";

export default function CategoryPaymentMethod() {
  const [inputs, setInputs] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [ticketCount, setTicketCount] = useState(1);
  const ticketPrice = 50;
  const totalPrice = ticketCount * ticketPrice;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    // Remove error on input change
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!inputs.username.trim()) newErrors.username = "Username is required.";
    if (!inputs.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    if (!inputs.email.trim()) newErrors.email = "Email is required.";
    if (!inputs.password.trim()) newErrors.password = "Password is required.";

    return newErrors;
  };

  // Registration Function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post("http://localhost:4050/payment/add/register", inputs);
      alert("Registration Successful! Check your email.");
      setInputs({ username: "", mobile: "", email: "", password: "" });
      setErrors({});
    } catch (error) {
      console.error("Error:", error.response?.data?.message);
    }
  };

  // Login Function
  const handleLogin = async () => {
    const loginErrors = {};
    if (!inputs.email.trim()) loginErrors.email = "Email is required for login.";
    if (!inputs.password.trim()) loginErrors.password = "Password is required for login.";

    if (Object.keys(loginErrors).length > 0) {
      setErrors(loginErrors);
      return;
    }

    try {
      await axios.post("http://localhost:4050/payment/login", {
        email: inputs.email,
        password: inputs.password,
      });
      alert("Login Successful! Check your email.");
      setErrors({});
    } catch (error) {
      console.error("Error:", error.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-[#ee5672] text-center mb-6">
          Event Payment & Registration
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {["username", "mobile", "email", "password"].map((field) => (
            <div key={field}>
              <label className="block text-lg font-medium text-gray-700 capitalize">
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={inputs[field]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className={`w-full px-4 py-3 border ${
                  errors[field] ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#ee5672] outline-none`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-[#ee5672] text-white py-3 rounded-lg font-semibold hover:bg-black transition"
          >
            Register & Pay
          </button>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-[#ee5672] text-white py-3 rounded-lg font-semibold hover:bg-black transition"
          >
            Login & Pay
          </button>
        </form>

        {/* Ticket Counter */}
        <div className="mt-8 p-6 bg-gray-100 rounded-xl shadow-md">
          <h1 className="text-[#ee5672] text-2xl font-bold text-center mb-5">
            Ticket Booking
          </h1>
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => setTicketCount((prev) => Math.max(1, prev - 1))}
              className="px-4 py-2 bg-gray-300 rounded-lg text-xl font-bold"
            >
              -
            </button>
            <span className="text-2xl font-bold">{ticketCount}</span>
            <button
              onClick={() => setTicketCount((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-300 rounded-lg text-xl font-bold"
            >
              +
            </button>
          </div>
          <p className="text-xl font-semibold text-center mt-4">
            Total:{" "}
            <span className="text-[#ee5672] font-bold">${totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
