import React from 'react';

 const SkillCard  =  ({percentage,skill,desc}) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8  bg-[rgba(1,1,1,1)] border border-[rgba(115,115,115,1)] p-4 2xl:p-20   rounded-xl w-full lg:w-[49%]">
   <div className="relative w-32 h-32 md:w-40 md:h-40  flex-shrink-0">
        <svg className="w-full h-full -rotate-210" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b9d" />
            <stop offset="50%" stopColor="#ffb088" />
            <stop offset="100%" stopColor="#ffd95a" />
            </linearGradient>
          </defs>
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="17"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">{percentage}%</span>
        </div>
      </div>

      <div className="flex-2">
        <h2 className="font-bold text-white mb-3 sm:text-2xl 2xl:text-4xl">{skill}</h2>
        <p className=" text-white text-sm sm:text-lg xl:text-xl 2xl:text-xl leading-relaxed">
         {desc || ""} 
        </p>
      </div>
    </div>
  );
}

export default SkillCard;