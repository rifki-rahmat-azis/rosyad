"use client";
import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="kontak" className="relative bg-gradient-to-r from-white to-yellow-400 text-black py-20 px-6 md:px-12 rounded-t-3xl shadow-lg border-t-4 border-white/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-black drop-shadow-lg mb-6">
          Kontak Saya
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Jangan ragu untuk menghubungi saya melalui media sosial atau email berikut!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-white/30 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <FaEnvelope className="text-yellow-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-700">rifkiacil8@gmail.com</p>
          </div>

          {/* Instagram */}
          <div className="bg-white/30 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <FaInstagram className="text-pink-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Instagram</h3>
            <p className="text-gray-700">@1eu1k1</p>
          </div>

          {/* TikTok */}
          <div className="bg-white/30 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <FaTiktok className="text-black text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">TikTok</h3>
            <p className="text-gray-700">@bintangjauh</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white/30 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <FaWhatsapp className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p className="text-gray-700">08765432</p>
          </div>

          {/* LinkedIn */}
          <div className="bg-white/30 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <FaLinkedin className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p className="text-gray-700">Rifki Rahmat Azis</p>
          </div>

          {/* GitHub */}
          <div className="bg-white/30 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300">
            <FaGithub className="text-gray-900 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p className="text-gray-700">github.com/rifki-azis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
