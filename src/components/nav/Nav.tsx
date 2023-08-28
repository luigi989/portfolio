import { useEffect, useState } from "react";
import { BiMoon } from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { RiEnglishInput } from 'react-icons/ri';
import { CgSweden } from 'react-icons/cg';
import { IoMdClose } from "react-icons/io";
import { useSetRecoilState } from "recoil";
import { darkModeState } from "../../atoms/atoms";
import NavItem from "./NavItem";
import SwapButton from "./SwapButton";
import { sections } from "../../data/data";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [navVisible, setNavVisible] = useState(false);
  const setIsDark = useSetRecoilState(darkModeState);

  const getLanguage = () => i18next.language || window.localStorage.i18nextLng;

  const setCurrentLocale = () => {
    const currLocale = getLanguage();
    if (currLocale == "sv") i18n.changeLanguage("en");
    else i18n.changeLanguage("sv");
  };

  const setDarkMode = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setIsDark(false);
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        setIsDark(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setIsDark(true);
      }
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, [setIsDark]);

  return (
    <div
      className={
        "fixed bg-red flex flex-col left-1 lg:left-12 justify-center items-center gap-1 lg:gap-5 lg:-translate-y-1/2 bottom-3 lg:top-1/2 print:hidden " +
        (navVisible
          ? "pointer-events-auto"
          : "pointer-events-none lg:pointer-events-auto")
      }
    >
      <nav
        className={
          "bg-liSec dark:bg-black w-max py-3 px-4 flex flex-col gap-5 lg:gap-3 " +
          "rounded-[3rem] backdrop-blur-lg " +
          (navVisible ? "visible" : "invisible lg:visible")
        }
      >
        {sections.map((section) => (
          <NavItem
            key={section.title}
            href={section.link}
            title={t(section.title)}
            ariaLabel={t(section.title)}
            icon={section.icon}
          />
        ))}
      </nav>

      <SwapButton
        title={t('nav.switchLang')}
        ariaLabel={t('nav.switchLang')}
        onClickP={(e) => {
          setCurrentLocale();
        }}
        icon1={<CgSweden className="swap-off fill-current w-6 h-6" />}
        icon2={<RiEnglishInput className="swap-on fill-current w-6 h-6" />}
      />

      <SwapButton
        className={navVisible ? "visible" : "invisible lg:visible"}
        title={t('nav.switchColor')}
        ariaLabel={t('nav.switchColor')}
        onClick={setDarkMode}
        icon1={<BiMoon className="swap-on fill-current w-6 h-6" />}
        icon2={<ImSun className="swap-off fill-current w-6 h-6" />}
      />

      <SwapButton
        title={t('nav.openMenu')}
        ariaLabel={t('nav.openMenu')}
        mobile
        onClickP={(e) => {
          setNavVisible((e.target as HTMLInputElement).checked);
        }}
        icon1={<FiMenu className="swap-off fill-current w-6 h-6" />}
        icon2={<IoMdClose className="swap-on fill-current w-6 h-6" />}
      />
    </div>
  );
};

export default Nav;
