import React from "react";
import A from "./GallaryA";
import data from "./dt";

const GallaryB = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            My Family
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          "Family is like music: some high notes, some low notes, but always a beautiful song."
          "Spending All The Moments With My Family"
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((value, index) => (
            <A
              key={index}
              image={value.image}
              heading={value.heading}
              para={value.para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallaryB;
