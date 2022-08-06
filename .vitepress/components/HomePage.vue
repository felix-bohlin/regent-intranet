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
          <div
            class="mr-auto p-0 prose dark:prose-invert prose-a:text-blue prose-a:font-bold"
          >
            <HomeIntro />
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>
