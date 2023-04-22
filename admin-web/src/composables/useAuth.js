//账号密码登录 hooks
export function useAccountLogin () {
	const router = useRouter()
	const store = useAdminStore()
	const { storeLogin } = store

	const form = reactive({
		username: 'admin',
		password: '123456',
		key: '',
		captcha: '1234'
	})

	const rules = {
		username: [
			{
				required: true,
				message: '用户名不能为空',
				trigger: 'blur'
			}
		],
		password: [
			{
				required: true,
				message: '密码不能为空',
				trigger: 'blur'
			}
		],
		captcha: [
			{
				required: true,
				message: '验证码不能为空',
				trigger: 'blur'
			}
		]
	}

	const captchaBase64 = ref('')

	onMounted(() => {
		onCaptcha()
	})

	const onCaptcha = () => {
		getCaptcha().then(res => {
			form.key = res.data.key
			captchaBase64.value = res.data.image
		})
	}

	const formRef = ref(null)
	const loading = ref(false)

	const onSubmit = () => {
		formRef.value.validate(valid => {
			if (!valid) {
				return false
			}

			loading.value = true

			storeLogin(form).then(res => {
				if (res.code === 1) {
					toast('登录成功')
					router.push('/')
				} else {
					toast(res.msg)
					router.push('/login')
				}
				loading.value = false
			})
		})
	}
	return {
		form,
		formRef,
		rules,
		loading,
		captchaBase64,
		onSubmit,
		onCaptcha
	}
}

//手机短信登录 hooks
export function useMobileLogin () {
	const loginFormRef = ref()

	const loginForm = reactive({
		mobile: '13951905171',
		code: ''
	})

	const loginRules = ref({
		mobile: [
			{
				required: true,
				message: '手机号不能为空',
				trigger: 'blur'
			}
		]
	})

	// 发送短信验证码
	const sendCode = () => {
		loginFormRef.value.validate(valid => {
			if (!valid) {
				return false
			}
			timerHandler()
		})
	}

	// 短信计时器
	const sms = reactive({
		disabled: false,
		total: 60,
		count: 0
	})

	// 计时器处理器
	const timerHandler = () => {
		sms.count = sms.total
		sms.disabled = true

		let timer = setInterval(() => {
			if (sms.count > 1 && sms.count <= sms.total) {
				sms.count--
			} else {
				sms.disabled = false
				clearInterval(timer)
			}
		}, 1000)
	}
	return {
		loginFormRef,
		loginForm,
		loginRules,
		sms,
		sendCode,
		timerHandler
	}
}

//退出登录 hooks
export function useLogout () {
	const router = useRouter()
	const store = useAdminStore()
	const { storeLogout } = store
	const handleLogout = () => {
		showModal('是否要退出登录？').then(() => {
			storeLogout().then(() => {
				// 移除 cookie里的 token
				removeToken()
				router.push('/login')
			})
		})
	}
	return {
		handleLogout
	}
}
