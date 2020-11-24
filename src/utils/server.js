// import express from 'express'
// import bodyParser from 'body-parser'
// import cors from 'cors'
// const Axios = require('axios')
// const app = express()

// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.post('/', async (req, res) => {
//   const result = await Axios.get(req.body.url)
//   res.json({
//     code: 1,
//     info: result.data
//   })
// })

// // app.get('/', (req, res) => {
// //   return res.send(req)
// // })

// app.listen(23201)

import express from 'express'
import cors from 'cors'
const Axios = require('axios')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/', async (req, res) => {
  const result = await Axios.get(req.body.url)
  res.json({
    code: 1,
    info: result.data
  })
})

app.listen(23201)
