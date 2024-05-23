"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Location from "../Components/Location";
import TextSlider from "../Components/TextSlider";

const Form = () => {
  const backgroundImageUrl = `/contactbanner.webp`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <>
      <div className="relative bg-gradient-to-tr from-slate-600 to-black h-[23rem] ">
        <Image
          src="/appointmentimg.webp"
          alt="slider"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="  object-cover absolute mix-blend-overlay"
        />
        <div className=" pl-[12rem] pt-[18rem] text-white font-bold text-4xl">
          {"Books For Counseling"}
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto p-8 bg-gray-100 shadow-md rounded-lg mt-[2rem] mb-3 z-20"
      >
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              {...register("fullName", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Mobile Number
            </label>
            <input
              {...register("mobileNumber", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-sm">
                Valid mobile number is required
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Valid email is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Address</label>
            <input
              {...register("address", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Education Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Current Education Qualification
            </label>
            <select
              {...register("education", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="SEE">SEE</option>
              <option value="+2">+2</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Diploma">Diploma</option>
              <option value="Masters">Masters</option>
              <option value="Diploma after +2">Diploma after +2</option>
              <option value="Masters after Bachelor">
                Masters after Bachelor
              </option>
            </select>
            {errors.education && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Passed Year
            </label>
            <input
              {...register("passedYear", { required: true })}
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.passedYear && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <select
              {...register("subject", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="Science">Science</option>
              <option value="Management">Management</option>
              <option value="Humanities">Humanities</option>
              <option value="Arts">Arts</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Percentage</label>
            <input
              {...register("percentage", {
                required: true,
                pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.percentage && (
              <p className="text-red-500 text-sm">
                Valid percentage is required
              </p>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Abroad Study</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Country
            </label>
            <select
              {...register("country", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="India">India</option>
              <option value="Japan">Japan</option>
              <option value="Sweden">Sweden</option>
              <option value="Denmark">Denmark</option>
              <option value="Ireland">Ireland</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Course</label>
            <select
              {...register("course", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="Engineering">Engineering</option>
              <option value="Nursing">Nursing</option>
              <option value="IT">IT</option>
              <option value="Accounting">Accounting</option>
              <option value="MBA">MBA</option>
              <option value="Hospitality Management">
                Hospitality Management
              </option>
              <option value="Agriculture">Agriculture</option>
              <option value="Public Health">Public Health</option>
            </select>
            {errors.course && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Test Preparation
            </label>
            <select
              {...register("testPreparation", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="IELTS">IELTS</option>
              <option value="GRE">GRE</option>
              <option value="TOEFL">TOEFL</option>
              <option value="PTE">PTE</option>
              <option value="SAT">SAT</option>
              <option value="GMAT">GMAT</option>
              <option value="JLPT/NAT">JLPT/NAT</option>
            </select>
            {errors.testPreparation && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Visited Before
            </label>
            <select
              {...register("visitedBefore", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.visitedBefore && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Booking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Appointment Date
            </label>
            <input
              {...register("appointmentDate", { required: true })}
              type="date"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.appointmentDate && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-[#f74f4f] text-white py-2 px-4 rounded hover:bg-purple-700"
          >
            Book Free Counseling{" "}
          </button>
        </div>
      </form>
      <div>
        <div className="bg-gray-100">
          {/* Full-screen section with fixed background image */}
          <div
            className="relative h-[20rem] bg-fixed bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="absolute inset-0 bg-primary-450 opacity-60"></div>
            {/* Semi-transparent black overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            {/* Content */}
            <div className="relative md:px-0 px-4 z-10 flex flex-col items-center justify-center h-full">
              <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="uppercase text-accent-350 z-40 text-xl md:text-2xl font-bold text-white"
              >
                {`Let's Connect`}{" "}
              </h1>
            </div>
          </div>
        </div>{" "}
      </div>
      <Location />
    </>
  );
};

export default Form;
