import React from 'react'

interface HeaderSocialProps {
  label: string
  url: string;
  icon: React.ReactNode;
}

const HeaderSocial = ({ label, url, icon }: HeaderSocialProps) => {
  return (
    <a className='inline-block transition ease-linear duration-300 cursor-pointer
          text-liSec hover:text-liLight dark:text-primaryAlt dark:hover:text-light'
      href={url}
      aria-label={label}
      title={label}
      target='_blank'
      rel='noreferrer'>
      {icon}
    </a>
  )
}

export default HeaderSocial;