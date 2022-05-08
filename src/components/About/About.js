import React from "react";



const About = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-10/12 md:w-6/12 shadow-2xl hover:shadow-xl flex px-4 py-10">
          <div className="flex flex-col justify-center items-center">
            <img className="w-36 rounded-lg" src="/img/profile.jpg" alt="" />
            <div className="mt-5">
              <a href="https://web.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook text-blue-500 cursor-pointer"></i>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa-brands fa-twitter text-blue-900 ml-2 cursor-pointer"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram text-red-400 ml-2 cursor-pointer"></i>
              </a>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold">Tanvir Hossain Sadi</h3>
            <small className="">Web developer</small>
            <hr className="mt-5 mb-2" />
            <p className="text-base text-slate-800">Email: sadi@gmail.com</p>
            <p className="text-base text-slate-800">Phone: 018******22</p>
            <p className="text-base text-slate-800">city: Dhaka</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
