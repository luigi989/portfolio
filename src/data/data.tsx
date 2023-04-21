import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { BsBriefcase, BsMessenger, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

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

    export const contacts = [
        { 
            title: 'Email',
            subtitle: 'ludde.lindahl@gmail.com',
            link: 'mailto:ludde.lindahl@gmail.com',
            icon: <FiMail />
        },
        {
            title: 'Messenger',
            subtitle: 'Ludvig Lindahl',
            link: 'https://m.me/ludvig.lindahl.1',
            icon: <BsMessenger />
        },
        {
            title: 'WhatsApp',
            subtitle: '+46705789618',
            link: 'https://wa.me/46705789618',
            icon: <BsWhatsapp />
        }
    ]