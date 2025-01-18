import React from "react";
import Navbar from "../Components/Navbarr/Navbar";
import Image from "next/image";
export default function Dashboard(){
    return(
        <div>
            <Navbar />
            <div className="w-[1440px] h-[900px]">
            <Image
                        src="/images/dashboard.png"
                       alt="dash"
                       width={1440}
                       height={900}
                       
                    />
            </div>
        </div>
    )
}