"use client";

import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const Plan = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-rose-600 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, btnText, trail }) => {
  return (
    <div className="w-80 lg:w-full p-10 transition-all hover:shadow-2xl flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Plan title="Drag & Drop Builder" />
        <Plan title="1,000's of Templates" />
        <Plan title="Blog Support Tools" />
        <Plan title="eCommerce Store" />
      </div>
      <div className="mx-auto">
        <h2 class="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>${price}</span>
          <span class="text-lg ml-1 font-normal text-neutral-500">
            /Monthly
          </span>
        </h2>
        <Button className="w-fit capitalize text-base hover:bg-rose-600 hover:shadow-md hover:shadow-rose-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-rose-600 hover:border-rose-600 hover:text-white rounded-full">
          {btnText}
        </Button>
        <span className="block text-rose-600 mt-5 font-semibold animate-bounce cursor-pointer">
          {trail}
        </span>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [plan, setPlan] = useState("Monthly Plan");
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
    >
      <div>
        <span className="service-name text-center ">PRICING PLAN</span>
        <h2 className="title text-center ">Choose your pricing policy</h2>
      </div>

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-slate-100 p-2 rounded-full">
        <div
          className={`${
            plan === "Monthly Plan" ? "left-2" : "left-[150px] w-[132px]"
          } transition-all duration-500 absolute top-[.37rem] h-[52px] w-[138px] rounded-full bg-rose-600`}
        ></div>
        <Button
          onClick={() => setPlan("Monthly Plan")}
          className={`
          ${plan === "Monthly Plan" ? "text-white" : "text-rose-600"}
          capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5 hover:border-rose-600 rounded-full`}
        >
          Monthly Plan
        </Button>
        <Button
          onClick={() => setPlan("Annual Plan")}
          className={`
          ${plan === "Annual Plan" ? "text-white" : "text-rose-600"}
          capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5 hover:border-rose-600 rounded-full`}
        >
          Annual Plan
        </Button>
      </div>

      {plan === "Monthly Plan" ? (
        <div className="overflow-auto scrollbar">
          <div className="flex item-start justify-between lg:grid lg:grid-cols-3 gap-7 mt-5 ">
            <div className="">
              <PricingCard
                name="Free Plan"
                title="For Small teams or office"
                price="0"
                btnText="Start free trail"
              />
            </div>
            <div>
              <PricingCard
                name="Business king"
                title="For Enterprise business"
                price="15"
                btnText="Create account"
                trail="Or Start 14 Days trail"
              />
            </div>
            <div className="relative">
              <span className="absolute -top-4 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
                Suggested
              </span>
              <PricingCard
                name="Pro Master"
                title="For pro level developers"
                price="24"
                btnText="Create account"
                trail="Or Start 14 Days trail"
                suggested="Suggested"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-auto scrollbar">
          <div className="flex item-start justify-between lg:grid lg:grid-cols-3 gap-7 mt-5 ">
            <div>
              <PricingCard
                name="Free Plan"
                title="For Small teams or office"
                price="0"
                btnText="Start free trail"
              />
            </div>
            <div>
              <PricingCard
                name="Business/Company"
                title="For Enterprise business"
                price="25"
                btnText="Create account"
                trail="Or Start 10 Days trail"
              />
            </div>
            <div className="relative">
              <span className="absolute -top-4 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
                Suggested
              </span>
              <PricingCard
                name="Pro Master"
                title="For pro level developers"
                price="54"
                btnText="Create account"
                trail="Or Start 10 Days trail"
                suggested="Suggested"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
