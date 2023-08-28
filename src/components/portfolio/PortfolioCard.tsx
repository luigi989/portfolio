import { useTranslation } from "react-i18next";
import DemoButton from "./DemoButton";

interface PortfolioCardProps {
  header: string;
  demoLink?: string;
  path: string;
  onClick: () => void;
  path1x: string;
  path2x: string;
  path3x: string;
  path4x: string;
}

const PortfolioCard = ({
  header,
  demoLink,
  path,
  onClick,
  path1x,
  path2x,
  path3x,
  path4x,
}: PortfolioCardProps) => {
  const { t } = useTranslation();

  return (
    <article className="p-5 bg-liSec dark:bg-bgAlt rounded-2xl flex flex-col">
      <div className="rounded-2xl">
        <img
          className="rounded-2xl"
          alt="portfolio 1"
          src={path}
          srcSet={
            path4x + " 4x," + path3x + " 3x," + path2x + " 2x," + path1x + " 1x"
          }
        />
      </div>

      <h1 className="grow my-5 text-xl text-liBg dark:text-white">{header}</h1>
      <div className="flex gap-2">
        <button
          onClick={onClick}
          aria-label="Read more about project"
          title="Read more about project"
          className="hover:bg-liPrimary hover:text-liSec
                    dark:hover:bg-primary dark:hover:text-bgAlt 
                    transition ease-linear duration-300
                    w-max inline-block py-1 px-3 rounded-lg cursor-pointer border-solid border-[1px]
                    border-liPrimary dark:border-primaryAlt text-liPrimary dark:text-primaryAlt print:text-xs"
        >
          {t("portfolio.readMore")}
        </button>
        {demoLink && <DemoButton link={demoLink} />}
      </div>
    </article>
  );
};

export default PortfolioCard;
