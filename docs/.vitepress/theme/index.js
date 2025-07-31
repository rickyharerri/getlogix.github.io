import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import CustomFooter from './CustomFooter.vue'
import TestimonialsSection from './TestimonialsSection.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(TestimonialsSection),
      'layout-bottom': () => h(CustomFooter)
    })
  },
  enhanceApp({ app }) {
    app.component('TestimonialsSection', TestimonialsSection)
  }
}
