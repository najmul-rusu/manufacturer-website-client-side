import React from 'react';
import SectionTitle from '../Title/SectionTitle';
import { FaFlag } from "react-icons/fa";
import { FaLaugh } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";

const BusinessSummery = () => {
    return (
        <div>
            <SectionTitle>Business Summery</SectionTitle>
            <div className="mx-12 my-20">
      <h2 className='text-3xl py-2 text-primary text-center font-bold'>Our Summary</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 shadow-lg pt-4">
        <div class="card lg:w-full border-2 rounded-none">
          <figure class="px-10 pt-10">
            <FaFlag className="h-16 w-16 text-secondary"></FaFlag>
          </figure>
          <div class="card-body p-4 items-center text-center">
            <h2 class="text-3xl font-bold text-primary">35</h2>
            <p className="text-secondary font-bold">YEARS EXPERIENCE</p>
          </div>
        </div>
        <div class="card lg:w-full border-2 rounded-none">
          <figure class="px-10 pt-10">
            <FaLaugh className="h-12 w-12 text-primary"></FaLaugh>
          </figure>
          <div class="card-body p-4 items-center text-center">
            <h2 class="text-3xl font-bold  text-secondary">1500+</h2>
            <p className="text-primary font-bold">HAPPY CUSTOMER</p>
          </div>
        </div>
        <div class="card lg:w-full  border-2 rounded-none ">
          <figure class="px-10 pt-10">
            <FaNetworkWired className="h-12 w-12 text-secondary"></FaNetworkWired>
          </figure>
          <div class="card-body p-4 items-center text-center">
            <h2 class="text-3xl font-bold text-primary">250</h2>
            <p className="text-secondary font-bold">DISTRIBUTOR</p>
          </div>
        </div>
        <div class="card lg:w-full border-2 rounded-none ">
          <figure class="px-10 pt-10">
            <FaIndustry className="h-12 w-12 text-primary"></FaIndustry>
          </figure>
          <div class="card-body p-4 items-center text-center">
            <h2 class="text-3xl font-bold text-secondary">45</h2>
            <p className="text-primary font-bold">FACTORY INDUSTRIAL</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default BusinessSummery;