import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import CustomFooter from './CustomFooter.vue'
import TestimonialsSection from './TestimonialsSection.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => [
        h(TestimonialsSection),
        h(CustomFooter)
      ],
      // Override any other footer slots
      'doc-after': () => null,
      'doc-footer-before': () => null,
      'home-footer': () => null
    })
  },
  enhanceApp({ app }) {
    app.component('TestimonialsSection', TestimonialsSection)
  }
}
