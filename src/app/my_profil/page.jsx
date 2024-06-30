import React from "react";

const page = () => {
  return (
    <div className="bg-primary-content h-screen flex items-center">
      <div className="max-w-lg mx-auto container my-10 bg-base-300 rounded-lg shadow-md p-5">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="https://picsum.photos/200"
          alt="Profile picture"
        />
        <h2 className="text-center text-warning text-2xl font-semibold mt-3">John Doe</h2>
        <p className="text-center text-base-content mt-1">Software Engineer</p>
        <div className="mt-5">
          <h3 className="text-xl text-info font-semibold">Bio</h3>
          <p className="text-base-content mt-2">
            John is a software engineer with over 10 years of experience in
            developing web and mobile applications. He is skilled in JavaScript,
            React, and Node.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
