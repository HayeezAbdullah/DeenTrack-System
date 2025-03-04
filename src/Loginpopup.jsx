import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Loginpopup = ({ triggerX }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <div className="fixed inset-0  bg-opacity-100 backdrop-blur-sm flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-[#F7F7F7] p-6 rounded-lg shadow-xl border m-5 w-[400px] relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-800"
            onClick={triggerX}
          >
            <X />
          </button>

          {/* Tab Toggle */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsSignUp(false)}
              className={`px-4 py-2 rounded-l-lg ${
                !isSignUp ? "bg-[#333] text-white" : "bg-[#EAEAEA]"
              } transition duration-300`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`px-4 py-2 rounded-r-lg ${
                isSignUp ? "bg-[#333] text-white" : "bg-[#EAEAEA]"
              } transition duration-300`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Fields */}
          <form>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-[#333]"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-[#333]"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#333] text-white py-2 rounded-lg hover:bg-[#555] transition duration-300"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          {/* Bottom Text */}
          {!isSignUp ? (
            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <span
                onClick={() => setIsSignUp(true)}
                className="text-[#333] cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <span
                onClick={() => setIsSignUp(false)}
                className="text-[#333] cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </p>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Loginpopup;
