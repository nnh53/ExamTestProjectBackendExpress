import { Router } from 'express'
import { registerController } from '~/controllers/users.controllers'
import { wrapAsync } from '~/utils/handlers'

const userRouter = Router()

/*
des: đăng ký
path: /users/register
method: POST
body: {
  name, 
  email, 
  password,
  confirm_password
  data_of_birth
}
*/

userRouter.post('/register', registerValidator, wrapAsync(registerController)) //đúng ra là phải thêm có validator

export default userRouter
