import React from 'react';
import SectionTitle from '../Title/SectionTitle';
import { FaFlag } from "react-icons/fa";
import { FaLaugh } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";

const BusinessSummery = () => {
    return (
        <div>
            <SectionTitle>Our Business Summery</SectionTitle>
            <div className="m-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 shadow-lg pt-4">
        <div className="card lg:w-full border-2 rounded-none">
          <figure className="px-10 pt-10">
            <FaFlag className="h-16 w-16 text-secondary"></FaFlag>
          </figure>
          <div className="card-body p-4 items-center text-center">
            <h2 className="text-3xl font-bold text-primary">35</h2>
            <p className="text-secondary font-bold">YEARS EXPERIENCE</p>
          </div>
        </div>
        <div className="card lg:w-full border-2 rounded-none">
          <figure className="px-10 pt-10">
            <FaLaugh className="h-12 w-12 text-primary"></FaLaugh>
          </figure>
          <div className="card-body p-4 items-center text-center">
            <h2 className="text-3xl font-bold  text-secondary">1500+</h2>
            <p className="text-primary font-bold">HAPPY CUSTOMER</p>
          </div>
        </div>
        <div className="card lg:w-full  border-2 rounded-none ">
          <figure className="px-10 pt-10">
            <FaNetworkWired className="h-12 w-12 text-secondary"></FaNetworkWired>
          </figure>
          <div className="card-body p-4 items-center text-center">
            <h2 className="text-3xl font-bold text-primary">250</h2>
            <p className="text-secondary font-bold">DISTRIBUTOR</p>
          </div>
        </div>
        <div className="card lg:w-full border-2 rounded-none ">
          <figure className="px-10 pt-10">
            <FaIndustry className="h-12 w-12 text-primary"></FaIndustry>
          </figure>
          <div className="card-body p-4 items-center text-center">
            <h2 className="text-3xl font-bold text-secondary">45</h2>
            <p className="text-primary font-bold">FACTORY INDUSTRIAL</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default BusinessSummery;