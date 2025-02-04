import React from "react";

const Spinner = () => {
  return (
    <div className="relative inline-block w-32 h-32">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute left-[18.5px] bottom-0 w-[3px] h-[11px] rounded bg-transparent origin-center`}
          style={{
            transform: `rotate(${i * 30}deg)`,
            animation: `spinner-fade 1s linear infinite`,
            animationDelay: `${i * 0.083}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Spinner;
