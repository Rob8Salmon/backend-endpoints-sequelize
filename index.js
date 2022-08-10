const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 4000
const ctrl = require('./controller')

//Middleware
const app = express()
app.use(express.json())
app.use(cors())

//Endpoints
app.post('/api/addItem', ctrl.addItem)
app.get('/api/getList', ctrl.getList)
app.delete('.api/deleteList', ctrl.deleteList)
app.delete('/api/deleteItem/:id', ctrl.deleteItem)

app.listen(PORT, () => console.log(`It's over ${PORT}!!!`))