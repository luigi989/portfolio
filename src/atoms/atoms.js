import { atom } from "recoil";

export const darkModeState = atom({
    key: 'darkModeState',
    default:'true',
 });

 export const headerVisibleState = atom({
    key: 'headerVisibleState',
    default: 'false',
})
 
export const aboutVisibleState = atom({
     key: 'aboutVisibleState',
     default: 'false',
 })


export const experienceVisibleState = atom({
    key: 'experienceVisibleState',
    default: 'false',
})

export const portfolioVisibleState = atom({
    key: 'portfolioVisibleState',
    default: 'false',
})

export const sectionVisibleState = atom({
    key: 'sectionVisibleState',
    default: {
        header: false,
        about: false,
        experiences: false,
        portfolio: false,
        contact: false,
    }
})