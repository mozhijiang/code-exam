export default defineAppConfig({
  pages: [
    'pages/books/books',
    'pages/books/catelogList',
    'pages/my/my',
  ],
  usingComponents: {
    'custom-wrapper': '/custom-wrapper',
  },
  window: {
    navigationStyle: 'custom'
  }
})
