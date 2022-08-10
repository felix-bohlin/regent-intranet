<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import HomeIntro from './HomeIntro.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="outer">
        <div class="inner">
          <div class="content vp-doc">
            <HomeIntro />
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.outer {
  padding-inline: 24px;
}

.inner {
  max-width: 1152px;
  margin: 0 auto;
}

.content {
  margin: 0 auto 0 0;
  max-width: 660px;
}

@media (min-width: 640px) {
  .outer {
    padding-inline: 48px;
  }
}
@media (min-width: 960px) {
  .outer {
    padding-inline: 64px;
  }
}
</style>
