module.exports = {
    // 基础配置 详情看文档
    publicPath: './', //  基本路径
    outputDir: 'dist', 
    assetsDir: 'public', 
    lintOnSave: true, //  是否在保存的时候使用 `eslint-loader` 进行检查。
    productionSourceMap: false, //  如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    devServer: {
        port: 8080,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy:{
            [process.env.VUE_APP_BASE_API]:{
                target: `http://127.0.0.1:8888/api/private/v1/`,
                changeOrigin: true
            }
        }
    }
}