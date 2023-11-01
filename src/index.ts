import express, { NextFunction, Request, Response } from 'express'

import userRouter from './routes/users.routers'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'

const PORT = 9000

const app = express()
app.use(express.json())

// MongoDB
databaseService.connect()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/users', userRouter)

// error handler tổng
app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`backend này đang chạy trên post ${PORT}`)
})
