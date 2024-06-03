import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
// import Button from "./Button";
// import { BsSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

//Dark Mode Code
import { useState, useEffect } from "react";
import sun from "../assets/dark/day-mode.png";
import moon from "../assets/dark/full-moon.png";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  const [clicked, setClicked] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className="px-[20px] py-8 relative z-10">
      {/* flex justify-between items-center max-w-screen-2xl m-auto */}
      <div className="relative flex items-center">
        <nav className="NavbarItems bg-white dark:bg-navbardark">
          <a href="#">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          {/* flex-1 flex justify-center items-center gap-16 max-lg:hidden */}

          {/* section for hamburger menu */}
          {/* <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-MENU space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            ></div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <button className="" onClick={() => setIsNavOpen(false)}>
                <GiHamburgerMenu
                  className="mx-5 max-lg:block space-y-2"
                  fontSize={30}
                  color="ff4040"
                />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray dark:text-coral-red"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section> */}

          {/* ......................................................... */}
          <ul className="text-sm leading-6 font-semibold flex gap-20 relative max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray dark:text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* <button label="Dark Mode" onClick={handleThemeSwitch}>
          <img
            className="dark:hidden"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSEvdVtFNBUEInFeJWolaiVqJWolaiVqJWolmXhYzj8DCXkwukeR+7vYYGAbYA3ayw0642Ap8DuBmBP0C4HM1ga3AVwBeB9g1gLd/AcysLgE8Btl0MuYZWshGRrU5Zu2eA3DWmE/mWP+/i8Az4FsAT8MxwZk1A+iYssHzoQZm4jJwAkdRW9aeSr7/qIRXqZrgBDbndHoPgO/N7DtZsbbKgvr9qQJWaj2FnvalknSBlT4CPgD4GshUvjFAcNa0HChdYA4La49ILMoGy8IzU1NgbRH+xKgt8u/hhcqm0CJjF5gmLuSABXziU4EpGlJoZpkpzQTN2ioaKl4X9H8cSKvAs7msvc+MyVYL2FOt/blCtSaUlm+LuCK6NbOZDpb72LcTnb8PL2dOG0ZzW9VVB2gNo7PZaA39VlSTQm0ru3mo+u279u5spR4DmQHraoumUTaPq5U6BW6ttqQ2fqVG+zzNuLPabCJpKSwWBV/ex7PV1rn6+JV6QlAlrkzpHeA/ayd1tBvwbhf6atiU37fWuHRcHfgB+Nt7HypWlqEAAAAASUVORK5CYII="
          />
          <img
            className="lg:hidden dark:bg-orange-400"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZZJREFUSEvFloFNxDAMRf9NAkwCTAJMAkwCTAJMAkwCeqiu3OA0TkpVS6eTrqc8+9vfzUkHxekgrnrBV5IuJb1I+tySdBZ8K+lGEmDiWdLd3uBXBzTWrmCqe5J0HlT2IOlxj4qBfbiD3yZp7TdkpurhqPXYy3stCTDxPX3vAr6XhJQEQMAWVIwa/95jLzF2uSi0NCXKhLolL6X21UYD5J+T1LCX18BR/1GEqjfLXR5uwxPJbHJiMRYKMWyrGnjtQF818CHJPdgPVqsS32vg2IuBS/e8VnHGLiXclkwKXoLNp1m70GsS8GsVMB/O+JJ0Nj3nPyjzm1gJ9hsr++biQODs9mive4/PG688nAqY2pGhsXe1JRAlMQ9iCfYTiySsy1TPKquLJFCRWFg0krO1vXrWo2/dwimt7TQiuSXm2/ZnWGsDVE4r2fbcs3yl4RZcm1wkJwEbkoxPfZVWuX+fz21qWaZ2/SEJ8ym3zshKq8PZApNhj0+touYNJQO2w1o+Zc2+Z+9iPeDIRqgx5POt4B5PL/57GPgHWn1jH7negl0AAAAASUVORK5CYII="
          />
        </button> */}
          <div className="flex items-center w-[102px]">
            {theme === "dark" ? (
              <button onClick={handleThemeSwitch} className="">
                {/* <BsSun fontSize={30} color="#ff4040" /> */}
                <img
                  className="max-w-[45%] ml-auto max-lg:hidden"
                  src={moon}
                  alt="moon"
                />
              </button>
            ) : (
              <button onClick={handleThemeSwitch} className="">
                {/* <BsSun fontSize={30} color="#ff4040" /> */}
                <img
                  className="max-w-[45%] ml-auto max-lg:hidden"
                  src={sun}
                  alt="sun"
                />
              </button>
            )}
            <button className="" onClick={() => setClicked(!clicked)}>
              <GiHamburgerMenu
                className="mx-5 max-lg:inline space-y-2 hidden"
                fontSize={30}
                color="ff4040"
              />
            </button>
            {/* <div className="hidden max-lg:block dark:text-white ">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

{
  /* <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i> */
}
{
  /* <div className="nav-links">
              <ul className={clicked ? "nav-menu.active" : "nav-menu"}>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-slate-gray dark:text-coral-red"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */
}
