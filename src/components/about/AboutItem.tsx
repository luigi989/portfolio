interface AboutItemProps {
  header: string;
  text: string;
  children: React.ReactNode;
}

const AboutItem = ({header, text, children}: AboutItemProps) => {
  return (
    <article className='bg-liSec dark:bg-bgAlt
    border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-8 text-center
    transition ease-linear duration-300'>
      {children}
      <h1 className='text-base text-liLight dark:text-white'>{header}</h1>
      <small className='text-xs text-liBg  dark:text-light'>{text}</small>
    </article>
  )
}
export default AboutItem;