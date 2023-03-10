import { atom } from "recoil";

export const darkModeState = atom({
    key: 'darkModeState',
    default: true,
 });

 export const chosenProjectState = atom({
    key: 'chosenProjectState',
    default: '',
 })