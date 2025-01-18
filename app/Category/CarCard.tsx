import * as React from "react";
import { CarCardProps } from "./types";
import Link from "next/link";
import Image from "next/image";

export const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  capacity,
  price,
  originalPrice,
  liked,
}) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 w-full max-w-[1312px] mx-auto px-4">
      <div className="w-full sm:w-[304px] h-auto bg-white rounded-lg shadow-md  hover:border-[#33ffaa] hover:rounded-lg p-2 overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9]">
        {/* Header Section */}
        <div className="flex justify-between items-start ">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-gray-800">{name}</h3>
            <p className="text-sm font-medium text-gray-500">{type}</p>
          </div>
          <Image
            src={liked ? "/icons/Heart.png" : "/icons/disLike.png"}
            className="w-6 h-6 object-contain"
            alt={liked ? "Liked car" : "Not liked car"}
            width={24}
            height={24}
          />
        </div>

        {/* Car Image */}
        <div className="mt-6 flex justify-center">
          <Image
            src={image}
            className="w-full max-w-[232px] h-auto object-contain"
            alt={`${name} ${type} car`}
            width={232}
            height={72}
          />
        </div>

        {/* Features Section */}
        <div className="mt-6 flex justify-between text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/feul.png"
              className="w-6 h-6 object-contain"
              alt="Fuel capacity icon"
              width={24}
              height={24}
            />
            <span>{fuelCapacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/manual.png"
              className="w-6 h-6 object-contain"
              alt="Transmission type icon"
              width={24}
              height={24}
            />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/people.png"
              className="w-6 h-6 object-contain"
              alt="Passenger capacity icon"
              width={24}
              height={24}
            />
            <span>{capacity}</span>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-xl font-bold text-gray-800">
              ${price}.00 <span className="text-sm text-gray-500">/day</span>
            </p>
            {originalPrice && (
              <p className="text-sm line-through text-gray-500">
                ${originalPrice}.00
              </p>
            )}
          </div>
          <Link href="/Form">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition hover:border-[#33ffaa] hover:rounded-lg p-2 overflow-hidden hover:shadow-[0_0_10px_2px_#3563E9]">
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
