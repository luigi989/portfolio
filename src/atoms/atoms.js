import { atom } from "recoil";

export const darkModeState = atom({
    key: 'darkModeState',
    default:'true',
 });

export const sectionVisibleState = atom({
    key: 'sectionVisibleState',
    default: {
        header: false,
        about: false,
        experience: false,
        portfolio: false,
        contact: false,
    }
})