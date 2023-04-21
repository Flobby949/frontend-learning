function hasPermission(value, el = false) {
	const store = useAdminStore()
	if (!Array.isArray(value)) {
		throw new Error(`需要配置全局权限，例如 v-permission="['sys:notice:page']"`)
	}
	// 和全局仓库中的 authorities 匹配
	const hasAuth = value.findIndex(v => store.authorities.includes(v)) != -1
	if (el && !hasAuth) {
		el.parentNode && el.parentNode.removeChild(el)
	}
	return hasAuth
}

export default {
	// APP 注册自定义指令，permission 对应 v-xxx 中的指令名
	install(app) {
		app.directive('permission', {
			mounted(el, binding) {
				hasPermission(binding.value, el)
			}
		})
	}
}
