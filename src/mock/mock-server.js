// 引入mock
import Mock from 'mockjs'
// 引入data数据
import data from './data.json'
Mock.mock('/shopcat', { code: 0, data: data.hothome })