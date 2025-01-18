import Image from "next/image";
import React from "react";
export default function carSummary() {
  return (
    <>
    <div className="w-[492px] h-[580px] absolute top-[160px] left-[916px]  rounded-[10px]   bg-white p-6">
 
  <div className="w-[444px] h-[76px] space-y-4">
    <p className="text-[20px] font-bold leading-[30px] text-[#1A202C]">
      Rental Summary
    </p>
    <p className="text-[14px] font-medium leading-[21px] text-[#90A3BF]">
      Prices may change depending on the length of the rental and the price of
      your rental car.
    </p>
  </div>


  <div className="flex items-start mt-[24px]">

  <div className="relative w-[132px] h-[108px] ml-7 mt-4  rounded-[8px]">
    <Image
      src="/images/Look.png"
      alt="Car"
      className="w-[188px] h-[120px] -top-[6px] -left-[28px] relative"
      width={188}
      height={120}
    />
  </div>

  <div className=" flex-1">
    <p className="text-[32px] mt-5 font-bold leading-[48px] text-[#1A202C]">
      Nissan GT - R
    </p>
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        <Image src="/icons/Review Star.png" alt="Star"  width={108} height={20}/>
      </div>
      <p className="text-[14px] font-medium text-[#596780]">440+ Reviews</p>
    </div>
  </div>
</div>

  
  <div className="border-[1px] mb-6 border-[#C3D4E966] opacity-50 my-[20px]"></div>


  <div className="space-y-4">
    <div className="flex justify-between">
      <p className="text-[16px] font-medium text-[#90A3BF]">Subtotal</p>
      <p className="text-[16px] font-semibold text-[#1A202C]">$80.00</p>
    </div>
    <div className="flex justify-between">
      <p className="text-[16px] font-medium text-[#90A3BF]">Tax</p>
      <p className="text-[16px] font-semibold text-[#1A202C]">$0.00</p>
    </div>
  </div>

  
  <div className="w-full h-[56px] rounded-[10px] bg-[#F6F7F9] mt-[16px] flex justify-between items-center px-4">
    <p className="text-[14px] font-medium text-[#90A3BF]">Apply promo code</p>
    <p className="text-[16px] font-semibold text-[#1A202C]">Apply now</p>
  </div>

 
  <div className="flex justify-between mt-[24px]">
    <div>
      <p className="text-[20px] font-bold leading-[30px] text-[#1A202C]">
        Total Rental Price
      </p>
      <p className="text-[14px] font-medium leading-[21px] text-[#90A3BF]">
        Overall price and includes rental discount
      </p>
    </div>
    <p className="text-[32px] font-bold leading-[40px] text-[#1A202C]">$80.00</p>
  </div>
</div>
   
    </>
  )
}