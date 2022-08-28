import { useEffect, useState } from "react";
import globalData from "./globalData";

function useTheme() {
    const [theme, setTheme] = useState(globalData.themeList[globalData.currentThtme]);
    useEffect(() => {
        globalData.registoryTheme(setTheme);
        return () => {
            console.log('unRegistoryTheme...');
            globalData.unRegistoryTheme(setTheme);
        };
    }, []);
    return theme;
}
export {
    useTheme
}