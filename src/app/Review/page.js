"use client";
import React, { useState } from "react";
import { facebokicon, googleicon, JustDialLogo, shortlistlogo } from "../../../public/images/Images/page";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

const Review = () => {
  // Review data array
  const review = [
    {
      id: 1,
      name: "Google",
      review: 5,
      user: 850,
      logo: googleicon,
    },
    {
      id: 2,
      name: "Facebook",
      review: 5,
      user: 500,
      logo: facebokicon,
    },
    {
      id: 3,
      name: "JustDial",
      review: 5,
      user: 1000,
      logo: JustDialLogo,
    },
    {
      id: 4,
      name: "Shortlist",
      review: 5,
      user: 10,
      logo: shortlistlogo,
    },
  ];

  // Function to render the stars based on the review score
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars (1, 2, 3, ...)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star (0.5, 1.5, ...)
    const emptyStars = 5 - fullStars - halfStars; // Empty stars (0, 1, 2, ...)

    const stars = [];
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`full-${i}`} className="fa fa-star" aria-hidden="true"></i>
      );
    }
    // Add half stars
    for (let i = 0; i < halfStars; i++) {
      stars.push(
        <i
          key={`half-${i}`}
          className="fa fa-star-half-o"
          aria-hidden="true"
        ></i>
      );
    }
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="fa fa-star-o" aria-hidden="true"></i>
      );
    }
    return stars;
  };

  return (
    <div className="reviews-section py-10">
      <div className="flex flex-wrap justify-center gap-6">
        {review.map(({ id, name, review, user, logo }) => (
          <div
            key={id}
            className="review-card p-4 bg-white shadow-lg flex items-center flex-col rounded-lg max-w-sm w-full"
          >
            {/* Using the IntersectionObserver to trigger CountUp when in view */}
            <div className="flex items-center mb-4">
              <div className="image-container overflow-hidden relative">
                <Image
                  src={logo}
                  alt={name}
                  width={200}
                  height={200}
                  className="rounded-full transition-transform transform hover:scale-110 hover:rotate-3d"
                />
              </div>
            </div>

            <div className="mt-[-37px]">
              {/* Intersection Observer: Trigger CountUp only when in view */}
              <CountUp
                start={0}
                end={user}
                duration={2}
                separator=","
                className="text-gray-500 text-[25px] font-roboto font-semibold"
              />
              <span> + Users</span>
              <div className="stars mb-3 text-yellow-500 flex justify-center">
                {renderStars(review)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
