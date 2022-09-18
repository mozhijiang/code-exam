export default defineAppConfig({
  pages: [
    'pages/books/books',
    'pages/books/catelogs',
    'pages/books/question',
    'pages/my/my',
  ],
  usingComponents: {
    'custom-wrapper': '/custom-wrapper',
  },
  window: {
    navigationStyle: 'custom'
  }
})
