<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import HomeIntro from './HomeIntro.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="w-full content-container">
        <div class="container mx-auto">
          <HomeIntro />
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
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
</style>
