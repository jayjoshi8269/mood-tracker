import React from "react";

function Header() {
  return (
    <div className="flex justify-center mt-10">
      <div
        className="
          relative bg-black rounded-2xl px-12 py-8 border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(16,185,129,0.9)] transition-all duration-500 transform hover:scale-105
        "
      >
        {/* Floating Emoji */}
        <div className=" absolute -top-7 left-1/2 -translate-x-1/2 text-5xl animate-[float_3s_ease-in-out_infinite] drop-shadow-[0_0_12px_rgba(16,185,129,0.9)]" >
          😁
        </div>

        {/* Title */}
        <h1 className=" text-4xl md:text-5xl font-extrabold text-center  bg-linear-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent tracking-wider animate-[glow_2s_ease-in-out_infinite]">
          MOOD TRACKER
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-center text-emerald-300/70 text-sm">
          Track your mood. Feel better. 🌙
        </p>
      </div>
    </div>
  );
}

export default Header;
