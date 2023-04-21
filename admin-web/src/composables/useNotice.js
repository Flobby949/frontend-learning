export function useNotice() {
	const tableData = ref([])
	const loading = ref(false)

	// 分页信息
	const currentPage = ref(1)
	const total = ref(0)
	const limit = ref(12)
	const keyword = ref('')

	// 获取数据
	onMounted(() => {
		getData()
	})

	const getData = (p = null) => {
		if (typeof p == 'number') {
			currentPage.value = p
		}
		loading.value = true
		getNoticePage(currentPage.value, limit.value, keyword.value)
			.then(res => {
				tableData.value = res.data.list
				total.value = res.data.total
			})
			.finally(() => {
				loading.value = false
			})
	}

	const formDrawerRef = ref(null)
	const formRef = ref(null)
	const form = reactive({
		title: '',
		content: ''
	})
	const rules = {
		title: [{ required: true, message: '公告标题不能为空', trigger: 'blur' }],
		content: [{ required: true, message: '公告内容不能为空', trigger: 'blur' }]
	}

	// 切换抽屉的标题
	const editId = ref(0)
	const drawerTitle = computed(() => {
		return editId.value ? '修改' : '新增'
	})

	// 编辑
	const handleEdit = row => {
		editId.value = row.id
		resetForm(row)
		formDrawerRef.value.open()
	}

	// 新增和修改
	const handleSubmit = () => {
		formRef.value.validate(valid => {
			if (!valid) {
				return
			}
			formDrawerRef.value.showLoading()

			const fun = editId.value
				? updateNotice({
						id: editId.value,
						title: form.title,
						content: form.content
				  })
				: saveNotice(form)
			fun
				.then(res => {
					if (res.code == 1) {
						toast(drawerTitle.value + '成功')
						// 修改刷新当前页 新增刷新第一页
						getData(editId.value ? false : 1)
						formDrawerRef.value.close()
					}
				})
				.finally(() => {
					formDrawerRef.value.hideLoading()
				})
		})
	}

	// 新增
	const handleCreate = () => {
		editId.value = 0
		resetForm({
			title: '',
			content: ''
		})
		formDrawerRef.value.open()
	}

	// 重置表单
	function resetForm(row = false) {
		if (formRef.value) {
			formRef.value.clearValidate()
		}
		if (row) {
			for (const key in form) {
				form[key] = row[key]
			}
		}
	}

	// 删除
	const handleDelete = id => {
		loading.value = true
		deleteNotice(id)
			.then(res => {
				if (res.code === 1) {
					toast('删除成功')
					getData()
				}
			})
			.finally(() => {
				loading.value = false
			})
	}

	const importNotice = () => {
		console.log('导入')
	}
	const exportNotice = () => {
		console.log('导出')
	}

	return {
		tableData,
		loading,
		currentPage,
		total,
		limit,
		keyword,
		form,
		formRef,
		formDrawerRef,
		rules,
		drawerTitle,
		getData,
		handleEdit,
		handleSubmit,
		handleCreate,
		handleDelete,
		importNotice,
		exportNotice
	}
}
