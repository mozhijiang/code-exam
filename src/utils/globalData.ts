import api from "../api/api";
import utils from "../utils/utils";
import { LightTheme, DarkTheme, BaseTheme } from '../theme/theme';
import Taro from "@tarojs/taro";
const themeList: { [themeName: string]: BaseTheme } = {
    dark: new DarkTheme,
    light: new LightTheme
};
const setThemeList: React.Dispatch<React.SetStateAction<BaseTheme>>[] = [];

const globalData = {
    api,
    utils,
    themeList,
    currentThtme: 'light',
    changeTheme(themeName: 'light' | 'dark' | string) {
        globalData.currentThtme = themeName;
        setThemeList.forEach(setTheme => setTheme(themeList[themeName]));
        Taro.setStorage({
            key: 'theme',
            data: themeName
        });
    },
    registoryTheme(setTheme:React.Dispatch<React.SetStateAction<BaseTheme>>) { setThemeList.push(setTheme) },
    unRegistoryTheme(setTheme:React.Dispatch<React.SetStateAction<BaseTheme>>) { setThemeList.splice(setThemeList.indexOf(setTheme), 1) }
};
export default globalData;