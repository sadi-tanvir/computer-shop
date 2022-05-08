import React from "react";



const ProductHome = () => {
  return (
    <>
      <section className="w-full flex justify-center items-center mt-14">
        <div className="w-11/12 grid grid-cols-12">
          <div className="col-span-7">
            <h1 className="text-5xl text-red-800 font-bold uppercase">
              Your next laptop <br />
              <span className="text-slate-800">Your best laptop</span>
            </h1>
            <p className="text-lg mt-5 text-slate-700 mb-5">
              The best laptop of 2022 can come with a variety of brands, prices,
              and features. Here, we have the best laptops for sale, Windows 10
              business notebooks, gaming rigs, Chromebooks etc.
            </p>
            <button className="bg-red-800 py-3 px-8 rounded-lg text-xl text-white font-semibold hover:px-10 hover:py-5 transition-all ease-in-out duration-500">
                Live demo
            </button>
          </div>
          <div className="col-span-5 -mt-10">
            <img src="./img/laptop.jpg" alt="laptop" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHome;
