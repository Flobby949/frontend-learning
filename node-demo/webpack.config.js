module.exports = {
    entry: {
        // 设置入口文件
        index: './src/main.js'
    },
    output: {
        // 打包输出文件名
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: "./",
        },
        port: 8888
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}