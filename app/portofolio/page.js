"use client";
import React from "react";
import Image from "next/image";

export default function Portofolio() {
  const projects = [
    {
      title: "Website Company Profile",
      description: "Membangun website company profile yang responsif dan modern untuk perusahaan.",
      image: "/gambar1.jpg",
    },
    {
      title: "E-Commerce Website",
      description: "Membuat platform e-commerce dengan fitur cart, checkout, dan payment gateway.",
      image: "/gambar2.jpg",
    },
    {
      title: "Dashboard Admin",
      description: "Mendesain dashboard interaktif untuk manajemen data perusahaan.",
      image: "/gambar3.jpg",
    },
    {
      title: "Landing Page Event",
      description: "Landing page untuk promosi event dengan UI/UX menarik.",
      image: "/gambar4.jpg",
    },
    {
      title: "Mobile App Design",
      description: "Merancang desain UI/UX aplikasi mobile yang modern dan interaktif.",
      image: "/gambar5.jpg",
    },
    {
      title: "Blog Platform",
      description: "Membangun platform blog dengan fitur penulisan, komentar, dan manajemen artikel.",
      image: "/gambar6.jpg",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-r from-white to-yellow-400 text-black py-16 px-6 md:px-12 rounded-3xl shadow-lg mt-10"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Portofolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/30 p-6 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg">
              <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
