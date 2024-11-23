"use client";
import Image from 'next/image';
import React from 'react';
import { DedicatedTeam, GlobalExpertise, InnovativeSolutions, StrategicPlanning } from '../../../public/images/Images/page';

const InnovativeStrategies = () => {
    
  const strengths = [
    { id: 1, title: 'Innovative Solutions', image: InnovativeSolutions },
    { id: 2, title: 'Strategic Planning', image: StrategicPlanning },
    { id: 3, title: 'Global Expertise', image: GlobalExpertise },
    { id: 4, title: 'Dedicated Team', image: DedicatedTeam },
  ];

  return (
    <div className="lg:max-w-[1745px] px-[20px] m-auto my-[70px]">
      <div className='flex lg:flex-row gap-[25px] items-center'>
        <div className="w-[50%]">
          <p className="text-bgorg font-semibold  text-[20px]">Our Strengths</p>
          <h1 className="text-[35px] font-semibold font-roboto text-gray-800 leading-snug">
            Fuel Your Growth with BrightenSolutionss'<br/> Unmatched Expertise
          </h1>
          <p className="text-gray-500 mt-[15px] w-[60%]">
            At BrightenSolutionss, we redefine success through innovative strategies and a commitment to excellence. Our strengths lie in combining creativity, technical expertise, and a client-focused approach to deliver outstanding results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[30px]">
            {strengths.map((item) => (
              <div
                key={item.id}
                className="flex flex-row gap-[25px] items-center innovatibox-shadow p-[10px] border-[1px] rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-white p-[5px] rounded-md">
                  <Image src={item.image} alt={item.title} width={100} height={100} />
                </div>
                <div>
                  <p className="font-roboto font-medium text-[20px] text-gray-700">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='w-[50%] bg-[#555555] h-[500px]'>
              
        </div>
      </div>
    </div>
  );
};

export default InnovativeStrategies;
