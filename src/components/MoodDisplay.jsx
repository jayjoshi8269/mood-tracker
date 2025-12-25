function MoodDisplay({ mood }) {
  if (!mood) {
    return (
      <p className="text-center text-gray-500 animate-pulse">
        Select a mood to see it here 👆
      </p>
    );
  }

  return (
    <div className="text-center mt-8 space-y-6 animate-[fadeIn_0.6s_ease-out]">

      <h2
        className="
          text-2xl font-bold text-emerald-300 animate-[slideDown_0.6s_ease-out]
        "
      >
        Your current mood is
      </h2>

  
      <div className=" mx-auto w-fit rounded-2xl overflow-hidden border border-emerald-400/40  shadow-[0_0_30px_rgba(16,185,129,0.5)]
          transform hover:scale-105  transition-all duration-500  animate-[zoomIn_0.6s_ease-out]">
        <img
          src={mood.image}
          alt={mood.label}className=" h-72 object-cover animate-[float_3s_ease-in-out_infinite] "
        />
      </div>

  
      <p className="text-xl font-semibold text-emerald-400 tracking-wide animate-[glowText_2s_ease-in-out_infinite]"
      >
        {mood.label}
      </p>
      <p className="text-xl font-semibold text-emerald-400 tracking-wide animate-glowZoom3D transform-gpu">
      
        {mood.contanct}
      </p>
    </div>
  );
}

export default MoodDisplay;
