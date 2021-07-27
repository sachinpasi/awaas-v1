import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/AllProjects/bg.jpg)",
      }}
      className="w-full h-350px"
    >
      <div className="w-full h-full bg-black bg-opacity-50">
        <div className="customContainer h-full flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold text-white tracking-tight">
            Projects In Panipat
          </p>
          <p className="text-lg py-4 capitalize text-white tracking-tight text-center">
            We are very proud of the service provide. See what our guests have
            <br />
            to say about us ,our loacation and services.
          </p>
          <div className="mt-8">
            <div className="w-36 h-1 border-b-3 border-t-4 border-green rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;