<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import HomeIntro from './HomeIntro.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="px-6 sm:px-12 lg:px-[64px]">
        <div class="max-w-6xl mx-auto">
          <HomeIntro />
        </div>
      </div>
    </template>
  </Layout>
</template>

<!-- <style>
.container {
  max-width: 1152px;
}
.content-container {
  padding-inline: 24px;
}
@media (min-width: 640px) {
  .content-container {
    padding-inline: 48px;
  }
}
@media (min-width: 960px) {
  .content-container {
    padding-inline: 64px;
  }
}
</style> -->
