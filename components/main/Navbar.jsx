"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="flex flex-row items-center justify-between m-auto px-[10px] w-full h-full ">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/code.png"
            alt="logo"
            width={35}
            height={35}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 text-[1.3rem]">
            Abuzar Bukhari
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#skills" className="cursor-pointer">
              Skills
            </Link>
            <Link
              href="/register"
              className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-extrabold text-xl"
              prefetch={true}
            >
              Register
            </Link>

            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social, index) => (
            <Link key={index} href={social.href} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
          <div className="text-white">
            <button
              onClick={() => {
                signOut();
              }}
            >
              <Image
                src="/logout.png"
                alt="logo"
                width={25}
                height={25}
                className="cursor-pointer hover:animate-slowspin"
                title="Logout"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
