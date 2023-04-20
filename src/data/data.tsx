import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';

export const sections =
    [
        { title: 'Home', link: '/#', icon: <AiOutlineHome/> },
        { title: 'About', link: '#about', icon: <AiOutlineUser/> },
        { title: 'Experience', link: '#experience', icon: <BiBook/>},
        { title: 'Portfolio', link: '#portfolio', icon: <BsBriefcase/> },
        { title: 'Contact', link: '#contact', icon: <BiMessageSquareDetail/> },
    ];

export const socials = 
    [
        { 
            title: 'Linkedin',
            link: 'https://www.linkedin.com/in/ludvig-lindahl/',
            icon: <BsLinkedin />
        },
        {
            title: 'Github',
            link: 'https://github.com/luigi989',
            icon: <BsGithub />
        },
        {
            title: 'Facebook',
            link: 'https://www.facebook.com/ludvig.lindahl.1',
            icon: <BsFacebook />
        }
    ];