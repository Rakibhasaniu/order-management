import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { UserRoutes } from './app/modules/user/user.route'
import cors from "cors";

const app:Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req:Request, res:Response) => {
 
  res.send('Hello World!')
})

app.use('/api/users',UserRoutes)
app.use(globalErrorHandler)

export default app;