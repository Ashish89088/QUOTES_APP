const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const port = process.env.port | 8000

const staticpath = path.join(__dirname,'/views')
//  console.log(staticpath)

const partialpath = path.join(__dirname , '/views/partials')
// console.log(partialpath)

hbs.registerPartials(partialpath)

app.use(express.static(staticpath))

app.set('view engine','hbs')

app.get('/',(req,res) => {
    res.render('index' , {
        signIN : 'Ashish'
    })
})

// app.get('/',(req,res) => {
//     res.send('This is a home Page. .........................')
// })

app.get('/about',(req,res) => {
    res.render('about_page/about')
})

app.get('/collection' , (req,res) => {
    res.render('collection_page/collection')
})

app.listen(port,()=>{
    console.log('server started')
})