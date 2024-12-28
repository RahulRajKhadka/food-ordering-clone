import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";  // Import setUser action
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");  // State to store error message
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Use navigate for redirect

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the phone number is exactly 10 digits
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits.");
      return;  // Prevent form submission if the validation fails
    }

    // Clear any previous error messages
    setError("");

    // Dispatch the setUser action with the user data
    dispatch(setUser({ name, phone }));
    // Redirect to the home page after login
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>} {/* Show error message if validation fails */}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};
