import { BiArrowFromBottom } from "react-icons/bi";
import { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={classNames(
        isVisible ? "opacity-100" : "opacity-0",
        "bg-blue-700 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
      )}
    >
      <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default ScrollButton;
