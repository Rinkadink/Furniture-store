import React from "react";

const PaymentPlan = () => {
  return (
    <div className="bg-[#FAF4F4] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-48 p-4 md:p-[100px]">
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold">Free Delivery</h3>
        <p className="text-[#9F9F9F] text-lg md:text-xl">
          For all orders over $50, consectetur adipiscing elit.
        </p>
      </div>

      <div className="text-center md:text-left mt-4 md:mt-0">
        <h3 className="text-2xl md:text-3xl font-bold">90 Days Return</h3>
        <p className="text-[#9F9F9F] text-lg md:text-xl">
          If goods have problems, consectetur adipiscing elit.
        </p>
      </div>

      <div className="text-center md:text-left mt-4 md:mt-0">
        <h3 className="text-2xl md:text-3xl font-bold">Secure Payment</h3>
        <p className="text-[#9F9F9F] text-lg md:text-xl">
          100% secure payment, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default PaymentPlan;