import DefaultTheme from 'vitepress/theme'
import '../style/main.css'
import '../style/vars.css'
import HomePage from '../components/HomePage.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: HomePage
}
