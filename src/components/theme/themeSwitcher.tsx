import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoDesktopSharp,
  IoDesktop,
  IoMoonSharp,
  IoSunny,
} from "react-icons/io5";
import { useOnClickOutside } from "usehooks-ts";

type Theme = "light" | "dark" | "system";

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const ref = useRef(null);
  const toggleMenu = () => setShowThemeMenu(!showThemeMenu);
  useOnClickOutside(ref, toggleMenu);

  function toggleTheme(mode: Theme) {
    setTheme(mode);
    setShowThemeMenu(false);
  }
  useEffect(() => {
    // useEffect only runs on the client, so now we can safely show the UI based on theme value and avoiding hydration error
    setMounted(true);
  }, []);

  if (!mounted) return <IoSunnyOutline className="animate-pulse" />;

  const selectedThemeIcon =
    theme === "dark" ? (
      <IoMoonSharp
        onClick={toggleMenu}
        className="cursor-pointer hover:text-gray-400"
      />
    ) : theme === "light" ? (
      <IoSunny
        onClick={toggleMenu}
        className="cursor-pointer hover:text-gray-400"
      />
    ) : (
      <IoDesktop
        onClick={toggleMenu}
        className="cursor-pointer hover:text-gray-400"
      />
    );

  return (
    <div className="relative z-10 mx-2 inline-flex items-center justify-center space-x-4 text-xl">
      {selectedThemeIcon}
      {showThemeMenu && (
        <ul
          ref={ref}
          className="absolute top-10 flex flex-col gap-1 rounded-md bg-slate-200 py-1 dark:bg-slate-700"
        >
          {[
            { mode: "Light", icon: <IoSunnyOutline /> },
            { mode: "Dark", icon: <IoMoonOutline /> },
            { mode: "System", icon: <IoDesktopSharp /> },
          ].map((elem) => (
            <li
              className={`${
                theme === elem.mode.toLowerCase() && "text-sky-500"
              } flex w-full cursor-pointer items-center gap-2 pl-4 pr-10 hover:bg-slate-100 dark:hover:bg-gray-600`}
              onClick={() => toggleTheme(elem.mode.toLowerCase() as Theme)}
              key={elem.mode}
            >
              {elem.icon}
              {elem.mode}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Toggle;
