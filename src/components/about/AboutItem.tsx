interface AboutItemProps {
  header: string;
  text: string;
  icon: React.ReactNode;
}

const AboutItem = ({header, text, icon}: AboutItemProps) => {
  return (
    <article className='bg-liSec dark:bg-bgAlt
    border-solid border-[1px] border-transparent rounded-2xl p-5 lg:p-8 text-center
    transition ease-linear duration-300'>
      <div className='flex justify-center m-auto text-liBg group-hover:text-liSec dark:text-primaryAlt text-2xl mb-4'>
        {icon}
      </div>
      <h1 className='text-base text-liBg dark:text-white'>{header}</h1>
      <small className='text-xs text-liBg  dark:text-light'>{text}</small>
    </article>
  )
}
export default AboutItem;