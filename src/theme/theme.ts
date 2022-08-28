class BaseTheme {
    base = '#6190E8';
    light = '#2090FA';
    color = 'black';
    background = 'white';
    secondaryColor = '#acacac';
    secondaryBackground = '#f4f5f7';
    static baseSpace = 30;
    static smallFont = 22;
    name = 'base';
}
class LightTheme extends BaseTheme {
    name = 'light';
    color = 'black';
}
class DarkTheme extends BaseTheme {
    name = 'dark';
    secondaryBackground = "black";
    color = 'white';
    background = '#252525';
}
export {
    BaseTheme, LightTheme, DarkTheme
}