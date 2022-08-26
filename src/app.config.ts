import Theme from "./theme/theme";
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
    navigationBarBackgroundColor: Theme.light,
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
