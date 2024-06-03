import { navLinks } from "../constants";

const Hamburger = () => {
  return (
    <div className="head">
      <div>
        <div className="fixed z-50 inset-0 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"></div>
          <div
            className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6
      text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
          >
            <button
              type="button"
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="sr-only">Close navigation</span>
              <svg
                viewBox="0 0 10 10"
                className="w-2.5 h-2.5 overflow-hidden"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
            <ul className="space-y-6">
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
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="theme"
                  className="text-slate-700 font-normal dark:text-slate-400"
                >
                  Switch theme
                </label>
                <div className="">
                  <svg></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" aria-hidden="true" className="hambuger"></button>
    </div>
  );
};

export default Hamburger;
