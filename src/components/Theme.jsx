import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Theme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const setDarkMode = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const storedTheme = localStorage.theme;
      const isDarkMode =
        storedTheme === "dark" || (!storedTheme && prefersDarkMode);

      document.documentElement.classList.toggle("dark", isDarkMode);
      setIsDark(isDarkMode);
    };

    setDarkMode();
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-0 left-0 p-2 hover:bg-sky-400 duration-300 rounded-full"
    >
      {isDark ? <MdOutlineLightMode size={30} /> : <MdDarkMode size={30} />}
    </button>
  );
};

export default Theme;
