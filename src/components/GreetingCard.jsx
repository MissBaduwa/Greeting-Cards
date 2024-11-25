import React from "react";

function GreetingCard({ title, message }) {
    return (
        // Card container with a cute pink background, rounded corners, shadow, and padding.
      <div className="bg-gradient-to-r from-pink-100 via-rose-200 to-pink-300 border-4 border-pink-400 rounded-xl p-6 m-6 shadow-xl transform hover:scale-105 hover:rotate-3 transition-all">
        
        {/* Card title styled with bold text and pink color */}
        <h2 className="text-pink-500 text-3xl font-bold tracking-wide mb-4">{title}</h2>
       
        {/* Card message styled with gray text and some margin */}
        <p className="text-gray-500 text-lg italic">{message}</p>
      </div>
    );
  }
  
  export default GreetingCard;
  