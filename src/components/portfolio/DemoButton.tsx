import { useTranslation } from "react-i18next";

interface DemoButtonProps {
  link: string;
}

const DemoButton = ({ link }: DemoButtonProps) => {
  const { t } = useTranslation();

  return (
    <a
      target="_blank"
      rel="noreferrer"
      title={t("portfolio.liveDemo")}
      href={link}
    >
      <button
        className="hover:text-liSec hover:bg-liPrimary dark:hover:text-light dark:hover:bg-bgAlt 
                transition ease-linear duration-300
                w-max py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px] 
                border-liPrimary bg-transparent text-liPrimary dark:border-primary dark:bg-primaryAlt dark:text-bg
                print:text-xs flex items-center gap-2"
      >
        {t("portfolio.liveDemo")}
      </button>
    </a>
  );
};

export default DemoButton;
