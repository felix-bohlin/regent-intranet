import DefaultTheme from 'vitepress/theme'
import '../style/vars.css'
import 'uno.css'
import HomePage from '../components/HomePage.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: HomePage
}
