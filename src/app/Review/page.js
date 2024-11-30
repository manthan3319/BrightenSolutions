"use client";
import React from "react";
import {
  facebokicon,
  googleicon,
  JustDialLogo,
  shortlistlogo,
} from "../../../public/images/Images/page";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ReviewCard = ({ id, name, review, user, logo }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <motion.i
          key={`full-${i}`}
          className="fa fa-star text-yellow-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        ></motion.i>
      );
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(
        <motion.i
          key={`half-${i}`}
          className="fa fa-star-half-o text-yellow-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: (fullStars + i) * 0.1 }}
        ></motion.i>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <motion.i
          key={`empty-${i}`}
          className="fa fa-star-o text-yellow-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            delay: (fullStars + halfStars + i) * 0.1,
          }}
        ></motion.i>
      );
    }
    return stars;
  };

  return (
    <motion.div
      ref={ref}
      className="review-card p-6 bg-white shadow-lg flex items-center flex-col rounded-lg max-w-sm md:w-[37%] sm:w-[45%] xl:w-[22%] lg:w-[37%]"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="image-container overflow-hidden rounded-full mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={logo}
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
      </motion.div>

      <div className="text-center">
        {inView && (
          <CountUp
            start={0}
            end={user}
            duration={2}
            separator=","
            className="text-gray-500 text-[25px] font-roboto font-semibold"
          />
        )}
        <span className="text-sm text-gray-600"> + Users</span>
        <div className="stars flex justify-center mt-2">
          {renderStars(review)}
        </div>
      </div>
    </motion.div>
  );
};

const Review = () => {
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

  return (
    <div className="reviews-section py-10 px-4 md:px-10 overflow-hidden">
      <div className="flex flex-wrap justify-center gap-6">
        {review.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Review;
