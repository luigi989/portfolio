import { useTranslation } from "react-i18next";

interface ContactItemProps {
  header: string;
  contact: string;
  link: string;
  icon: React.ReactNode;
}

const ContactItem = ({ header, contact, link, icon }: ContactItemProps) => {
  const { t } = useTranslation();
  return (
    <article
      className="bg-liSec dark:bg-bgAlt border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-6 text-center
            transition ease-linear duration-300 flex flex-col"
    >
      <div className="text-liBg dark:text-primaryAlt m-auto text-2xl mb-4">
        {icon}
      </div>
      <h1 className="text-base text-liBg dark:text-white">{header}</h1>
      <small className="mb-4 text-xs text-liBg dark:text-light">
        {contact}
      </small>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        title={t("contact.sendLong") + " " + t("contact.by") + " " + header}
        className="text-sm text-liBg hover:underline dark:text-primaryAlt dark:hover:text-light dark:hover:no-underline"
      >
        {t("contact.sendLong")}
      </a>
    </article>
  );
};

export default ContactItem;
