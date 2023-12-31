import { ParamsDictionary } from 'express-serve-static-core'
import { Request, Response } from 'express'
import userService from '~/services/users.services'
import { RegisterReqBody } from '~/models/requests/Users.request'
import { ErrorWithStatus } from '~/models/Errors'
import User from '~/models/schemas/User.schema'
import { ObjectId } from 'mongodb'
import { USERS_MESSAGES } from '~/constants/message'
import databaseService from '~/services/database.services'

// export const loginController = async (req: Request, res: Response) => {
//   // throw new ErrorWithStatus({ message: 'error test', status: 401 })
//   //lấy user_id từ user của req
//   const user = req.user as User
//   const user_id = user._id as ObjectId

//   // dùng user_id tạo ra access_token và refresh_token
//   const result = await userService.login(user_id.toString())
//   // res access_token và refresh_token về cho client
//   res.json({ message: USERS_MESSAGES.LOGIN_SUCCESS, result })
// }

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  // nhét vô database
  const result = await userService.register(req.body)
  res.json({ message: USERS_MESSAGES.REGISTER_SUCCESS, result })
}

export const submitController = async (req: Request, res: Response) => {
  // nhét vô database
  const { name, email, testId, now } = req.body
  const user = await databaseService.users.findOne({ name, email, testId, now })
  if (user) {
    res.json(true)
  }
  throw new ErrorWithStatus({ message: 'error test', status: 401 })
}
