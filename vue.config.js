/*
 * @Author: your name
 * @Date: 2021-02-19 21:22:33
 * @LastEditTime: 2021-03-06 22:09:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \practicec:\Users\chentan\Desktop\news-project\vue.config.js
 */
module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://study.yuanjin.tech'
            }
        }
    },
    publicPath:'./',
    outputDir:'docs'

}