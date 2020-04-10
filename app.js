const express = require('express')
const app = express()
const moment = require("moment-timezone")
const port = 3000

let middleWare = (req, res, next) => {
    let time = Date.now()
    req.requestTime = moment(time).tz("Asia/Taipei").format("YYYY-MM-DD HH:mm:ss")
    let message = req.requestTime + ' | ' + req.method + ' from ' +  req.originalUrl
    console.log(message)

    // res.on('finish', () => {
    //     let finish = Date.now()
    //     console.log(finish, 'finish')
    // })

    next()
}

// 列出全部 Todo
app.get('/', middleWare, (req, res) => {
    res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', middleWare, (req, res) => {
    res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id/detail', middleWare, (req, res) => {
    res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', middleWare, (req, res) => {
    res.send('新增一筆  Todo')
})

app.delete('/:id/delete', middleWare, (req, res) => {
    res.send('刪除 Todo')
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})