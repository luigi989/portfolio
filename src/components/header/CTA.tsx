import { useTranslation } from "react-i18next";
import LinkButton from "../shared/LinkButton";
import CV from "/cv_eng.pdf";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[37px] flex gap-5 justify-center">
      <a className="bg-border-primary" href={CV} download>
        <button
          className="bg-liBg dark:bg-transparent dark:hover:bg-bgAlt dark:hover:text-white 
                      dark:hover:border-transparent dark:border-primary dark:text-primaryAlt dark:bg-none
                      border-solid border-2 border-liSec
                      text-liLight hover:bg-liSec hover:text-liBg
                      transition ease-linear duration-300
                      md:py-3 py-4 px-5 rounded-lg cursor-pointer text-center text-sm whitespace-nowrap md:text-lg md:whitespace-normal"
          title={t("header.downloadCV")}
        >
          {t("header.downloadCV")}
        </button>
      </a>
      <LinkButton link="#contact" title={t("contactButton.aria")}>
        {t("contactButton.text")}
      </LinkButton>
    </div>
  );
};

export default CTA;
