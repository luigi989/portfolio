import React from 'react'

const AvatarCard = (props) => {
    return (
        <article className='testimonial'>
            <div className='w-[rem] aspect-square overflow-hidden'>
                <img src={props.path} alt='Avatar one' />
            </div>
            <h5 className='client_name'>{props.name}</h5>
            <small className='cleint_review'>{props.text}</small>
        </article>
    )
}

export default AvatarCard