
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "৪০৪ ত্রুটি: ব্যবহারকারী অস্তিত্বহীন রুটে প্রবেশের চেষ্টা করেছেন:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">৪০৪</h1>
        <p className="text-xl text-gray-600 mb-4">দুঃখিত! পেজটি পাওয়া যায়নি</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          হোমে ফিরে যান
        </a>
      </div>
    </div>
  );
};

export default NotFound;
