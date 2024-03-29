interface ServiceListProps {
    title: string;
    children: React.ReactNode;
}

const ServiceList = ({ title, children } : ServiceListProps) => {
    return (
        <article className='lg:h-fit bg-bgAlt border-solid border-[1px] border-primaryAlt rounded-b-[2rem] 
                            hover:bg-transparent hover:border-primary cursor-default 
                            transition ease-linear duration-300 service'>
            <div className='bg-primaryAlt py-6 mb-6 rounded-b-[2rem] service_head'>
                <h3 className='text-bgAlt text-center'>{title}</h3>
            </div>

            <ul className='my-8 flex flex-col gap-2 text-sm service_list'>
                {children}
            </ul>
        </article>
    )
}

export default ServiceList;