<template>
    <Aside/>
</template>

<script>
import Aside from '@/layout/component/aside.vue'
export default {
	name: 'LayoutDefaults',
	components: { Aside },
	data() {
		return {}
	},
	computed: {
		// 是否开启固定 header
		isFixedHeader() {
			return this.$store.state.themeConfig.themeConfig.isFixedHeader
		}
	},
	watch: {
		// 监听路由的变化
		$route: {
			handler() {
				this.$refs.layoutDefaultsScrollbarRef.wrap.scrollTop = 0
			},
			deep: true
		}
	}
}
</script>
