import WebFont from 'webfontloader'
export { default as lightTheme } from './light'
export { default as darkTheme } from './dark'

WebFont.load({
  google: {
    families: ['Nunito Sans:400,500,900', 'sans-serif']
  }
})
