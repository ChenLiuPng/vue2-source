import babel from 'rollup-plugin-babel'; // 让rollup打包的适合可以采用babel

export default {
    input: "./src/index.js", // 打包入口
    output: {
        file: "dist/vue.js", // 打包后的文件存放在output中 iife(global)
        format: 'umd', // 统一模块规范 支持commonjs amd(Window.Vue)
        name:"Vue",
        sourcemap: true, // 为了增加调试功能
    },
    plugins:[
        babel({
            exclude: "node_modules/**", // 不去编译 node_modules下的文件夹
        })
    ]
}