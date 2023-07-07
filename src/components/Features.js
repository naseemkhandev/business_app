import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">WHATS THE FUNCTION</span>
      <h2 className="title text-center">Meet the feature of product</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Partnership deal"
          desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Pro Subscription"
          desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
      </div>
    </section>
  );
};

export default Features;
