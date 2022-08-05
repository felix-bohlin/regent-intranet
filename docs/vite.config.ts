import Unocss from 'unocss/vite'
import presetWind from '@unocss/preset-wind'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Unocss({
      presets: [presetWind()]
    })
  ]
})
