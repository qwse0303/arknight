<template>
  <Pc v-if="getThemeConfig.layout === 'pc'" />
  <Moblile v-else-if="getThemeConfig.layout === 'mobile'" />
  123213
</template>

<script>
export default {
	name: 'Layout',
	components: {
		Pc: () => import('@/layout/main/pc.vue'),
		Moblile: () => import('@/layout/main/mobile.vue'),
	},
	computed: {
		// 获取布局配置信息
		getThemeConfig() {
			return this.$store.state.themeConfig.themeConfig
		}
	},
	created() {
		this.onLayoutResize()
		window.addEventListener('resize', this.onLayoutResize)
    // 拼接ws地址
	},
	methods: {
	},
	distroyed() {
	}
}
</script>
