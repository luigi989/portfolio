import { atom } from "recoil";

export const darkModeState = atom({
    key: 'darkModeState',
    default: true,
 });

 export const chosenProjectInfo = atom({
   key: 'chosenProjectInfo',
   default: {
      title: '',
      github_link: '',
      live_demo: '',
      tags: [''],
      description: '',
      link: '',
      // imgPath: ''
   },
 })