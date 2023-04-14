import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminStore } from '~/store'
import { showModal, toast } from './util'
import { updatePassword } from '~/api/admin'
import { storeToRefs } from 'pinia'


export function useUpdatePassword() {
    const router = useRouter()
    const store = useAdminStore()
    const { adminLogout } = store

    const updatePasswordForm = reactive({
        oldPassword: '',
        newPassword: '',
        rePassword: ''
    })
    const formRef = ref(null)

    // 确认密码规则
    const rePassRule = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('确认密码不能为空'))
        } else if (value !== updatePasswordForm.newPassword) {
            callback(new Error('与新密码不一致'))
        } else {
            callback()
        }
    }

    // 规则
    const rules = {
        oldPassword: [
            { required: true, message: '旧密码不能为空', trigger: 'blur' }
        ],
        newPassword: [
            { required: true, message: '新密码不能为空', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        rePassword: [
            { required: true, validator: rePassRule, trigger: 'blur' }
        ]
    }

    const formDrawerRef = ref(null);

    const update = () => {
        formRef.value.validate((valid) => {
            if (!valid) {
                return
            }
            formDrawerRef.value.showLoading()
            updatePassword(updatePasswordForm.oldPassword, updatePasswordForm.newPassword).then((res) => {
                if (res.code === 0) {
                    toast('修改成功，请重新登录')
                    adminLogout().then(() => router.push('/login'))
                } else {
                    toast(res.msg, 'error')
                }
            }).finally(() => {
                formDrawerRef.value.hideLoading()
            })
        })
    }

    const showPasswordDrawer = () => {
        formDrawerRef.value.openDrawer()
    };

    return {
        updatePasswordForm,
        formRef,
        rules,
        formDrawerRef,
        update,
        showPasswordDrawer
    }
}

export function useLogin() {
    const router = useRouter()
    const store = useAdminStore()
    const { adminLogin } = store

    const form = reactive({
        username: 'admin',
        password: '123456'
    })
    
    const rules = {
        username: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
    }
    
    const formRef = ref(null)
    const loading = ref(false)
    
    const onSubmit = () => {
        formRef.value.validate((valid) => {
            if (!valid) {
                // 校验失败
                return
            }
            loading.value = true
            adminLogin(form.username, form.password).then((res) => {
                toast(res.msg)
                if (res.code === 0) {
                    router.push('/')
                }
                loading.value = false
            })
        })
    }

    return {
        form,
        rules,
        formRef,
        loading,
        onSubmit
    }
}

export function useLogout() {
    const router = useRouter()
    const store = useAdminStore()
    const { adminLogout } = store

    const handleLogout = () => {
        showModal('是否要退出系统?').then(() => {
            adminLogout().then(() => {
                toast('退出登录成功')
                router.push('/login')
            })
        })
    }

    return {
        handleLogout
    }
}

export function useGetAdminInfo() {
    const store = useAdminStore()
    const { getInfo } = store
    const { adminInfo } = storeToRefs(store)
    return {
        getInfo,
        adminInfo
    }
}