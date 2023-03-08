import { atom } from "recoil";

export const darkModeState = atom({
    key: 'darkModeState',
    default: true,
 });

export const sectionVisibleState = atom({
    key: 'sectionVisibleState',
    default: {
        visible: ''
    }
})