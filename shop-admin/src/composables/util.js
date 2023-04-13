import { ElNotification, ElMessageBox } from 'element-plus'
import nprogress from 'nprogress'

// 封装 弹窗消息
export function toast(message, type = 'success', duration = 2000) {
    ElNotification({
        message,
        type,
        duration
    })
}

// 封装 全局进度条
// 显示
export function showFullLoading() {
    nprogress.start()
}

// 隐藏
export function hideFullLoading() {
    nprogress.done()
}

// 疯转全局模态提示框
export function showModal(content = "提示内容", type = "warning", title = "") {
    return ElMessageBox.confirm(
        content,
        title,
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type
        }
    )
}