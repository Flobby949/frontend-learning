// 封装消息提示组件
import { ElNotification } from 'element-plus'

// 封装 弹窗消息
export function toast(message, type = 'success', duration = 2000) {
    ElNotification({
        message,
        type,
        duration
    })
}