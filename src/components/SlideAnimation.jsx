import React, { useState, useEffect } from "react";

function SlideAnimation({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`${
        show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      } transition-all duration-1000`}
    >
      {children}
    </div>
  );
}

export default SlideAnimation;
