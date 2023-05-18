interface ContactItemProps {
  header: string;
  contact: string;
  link: string;
  icon: React.ReactNode;
}

const ContactItem = ({header, contact, link, icon}: ContactItemProps) => {
  return (
    <article className='bg-liSec dark:bg-bgAlt border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-6 text-center
            transition ease-linear duration-300 flex flex-col'>
        <div className="text-liBg dark:text-primary m-auto text-2xl mb-4">
          {icon}
        </div> 
        <h1 className='text-base text-liBg dark:text-white'>{header}</h1>
        <small className='mb-4 text-xs text-liBg dark:text-light'>{contact}</small> 
        <a href={link} target='_blank' rel='noreferrer' 
          title={"Send message by " + header}
          aria-label={"Send message by " + header}
          className='text-sm text-liLight hover:text-liBg dark:text-primary dark:hover:text-light'>Send a Message</a>
    </article>
  )
}

export default ContactItem;