interface AvatarCardProps {
    path: string;
    name: string;
    text: string;
}

const AvatarCard = ({ path, name, text} : AvatarCardProps) => {
    return (
        <article className='bg-liSec dark:bg-bgAlt text-center p-8 rounded-[2rem] select-none'>
            <div className='w-[4rem] aspect-square overflow-hidden rounded-full mx-auto mt-0 mb-4
                border-solid border-[0.4rem] border-liLight dark:border-primary'>
                <img src={path} alt='Avatar one' />
            </div>
            <h5 className='client_name text-liBg dark:text-white'>{name}</h5>
            <small className='block text-liPrimary dark:text-light font-light w-5/6 md:w-4/5 mx-auto mt-3 mb-3'>{text}</small>
        </article>
    )
}

export default AvatarCard