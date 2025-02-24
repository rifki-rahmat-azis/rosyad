"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Skills from "./skills/page";
import Portofolio from "./portofolio/page";
import Layanan from "./layanan/page";
import Kontak from "./kontak/page";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="relative flex flex-col items-center text-center bg-gradient-to-r from-white to-yellow-400 text-black py-24 px-6 md:px-12 rounded-b-3xl shadow-lg border-b-4 border-white/30">
        {/* Foto Profil */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl hover:scale-105 transition-transform duration-300">
          <Image
            src="/rifki.jpg"
            alt="Rifki Rahmat Azis"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Nama & Profesi */}
        <h1 className="text-5xl md:text-6xl font-extrabold mt-6 drop-shadow-lg">Rifki Rahmat Azis</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2 bg-yellow-500 text-white px-6 py-2 rounded-xl shadow-md">
          Web Developer & UI/UX Designer
        </h2>

        {/* Deskripsi Singkat */}
        <p className="text-gray-800 mt-6 max-w-3xl text-lg md:text-xl leading-relaxed bg-white/50 px-6 py-4 rounded-lg shadow-md">
          Saya seorang mahasiswa  Ma'soem University yang memiliki minat dalam pengembangan web dan teknologi modern.
          Berpengalaman dalam membangun website interaktif, responsif, dan optimal untuk berbagai kebutuhan bisnis.
        </p>

        {/* Informasi Tambahan */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Email */}
          <div className="bg-white/50 p-6 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-700">rifkiacil8@gmail.com</p>
          </div>

          {/* Lokasi */}
          <div className="bg-white/50 p-6 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold">Lokasi</h3>
            <p className="text-gray-700">Sumedang, Indonesia</p>
          </div>

          {/* Pendidikan */}
          <div className="bg-white/50 p-6 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold">Pendidikan</h3>
            <p className="text-gray-700">Mahasiswa Sistem Informasi</p>
          </div>

          {/* Keahlian */}
          <div className="bg-white/50 p-6 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold">Keahlian</h3>
            <p className="text-gray-700">React.js, Next.js, UI/UX Design</p>
          </div>

          {/* Pengalaman */}
          <div className="bg-white/50 p-6 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold">Pengalaman</h3>
            <p className="text-gray-700">3+ Tahun di Web Development</p>
          </div>

          {/* Kontak */}
          <div className="bg-white/50 p-6 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-xl font-semibold">Kontak</h3>
            <p className="text-gray-700">08765432 (WhatsApp)</p>
          </div>
        </div>
      </section>

      <Skills />
      <Portofolio />
      <Layanan />
      <Kontak />
    </>
  );
}
