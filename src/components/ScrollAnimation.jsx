import React from "react";
import { useInView } from "react-intersection-observer";

function ScrollAnimation({ children, direction = "down", delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const getTransitionClasses = () => {
    if (direction === "up") {
      return inView
        ? `opacity-100 -translate-y-0 delay-${delay}`
        : `opacity-0 -translate-y-20`;
    } else if (direction === "left") {
      return inView
        ? `opacity-100 -translate-x-0 delay-${delay}`
        : `opacity-0 -translate-x-28`;
    } else if (direction === "right") {
      return inView
        ? `opacity-100 translate-x-0 delay-${delay}`
        : `opacity-0 translate-x-28`;
    } else {
      // Default direction is down
      return inView
        ? `opacity-100 translate-y-0 delay-${delay}`
        : `opacity-0 translate-y-20`;
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${getTransitionClasses()}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimation;
