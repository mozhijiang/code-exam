import { BaseTheme } from "../src/theme/theme";
export default defineAppConfig({
  pages: [
    'pages/books/books',
    'pages/my/my'
  ],
  usingComponents: {
    'custom-wrapper': '/custom-wrapper',
  },
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: new BaseTheme().light,
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
