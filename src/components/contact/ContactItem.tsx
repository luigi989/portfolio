interface ContactItemProps {
  header: string;
  contact: string;
  link: string;
  children: React.ReactNode;
}

const ContactItem = ({header, contact, link, children}: ContactItemProps) => {
  return (
    <article className='bg-liSec dark:bg-bgAlt border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-6 text-center
            transition ease-linear duration-300 flex flex-col'>
        {children}
        <h1 className='text-base text-liBg dark:text-white'>{header}</h1>
        <small className='mb-4 text-xs text-liBg dark:text-light'>{contact}</small> 
        <a href={link} target='_blank' rel='noreferrer' 
          className='text-sm text-liLight hover:text-liBg dark:text-primary dark:hover:text-light'>Send a Message</a>
    </article>
  )
}

export default ContactItem;