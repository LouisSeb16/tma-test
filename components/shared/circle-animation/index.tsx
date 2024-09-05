import React from "react";

const CircleAnimation = () => {
  return (
    <ul className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
      <CircleItem left={25} size={80} delay={0} />
      <CircleItem left={10} size={70} delay={2} duration={12} />
      <CircleItem left={70} size={40} delay={4} />
      <CircleItem left={40} size={60} delay={0} duration={18} />
      <CircleItem left={65} size={50} delay={0} />
      <CircleItem left={75} size={110} delay={3} />
      <CircleItem left={35} size={150} delay={7} />
      <CircleItem left={50} size={65} delay={15} duration={45} />
      <CircleItem left={20} size={35} delay={2} duration={35} />
      <CircleItem left={85} size={150} delay={0} duration={11} />
    </ul>
  );
};

export default CircleAnimation;

const CircleItem = ({ left, size, delay, duration }: any) => (
  <li
    className={`
          absolute block w-5 h-5 
          bg-gradient-radial from-[rgb(69,86,102)] to-[rgb(34,34,34)]
          animate-float
        `}
    style={{
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration || 25}s`,
      bottom: "-150px",
    }}
  />
);
