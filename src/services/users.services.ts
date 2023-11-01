import databaseService from '~/services/database.services'
import User from '~/models/schemas/User.schema'
import { RegisterReqBody } from '~/models/requests/Users.request'
import { hashPassword } from '~/utils/crypto'
import { signToken } from '~/utils/jwt'
import { TokenType } from '~/constants/enums'
import { config } from 'dotenv'
import RefreshToken from '~/models/schemas/RefreshToken.schema'
import { ObjectId } from 'mongodb'
config()

class UsersService {
  async register(payLoad: RegisterReqBody) {
    // prettier-ignore
    const result = await databaseService.users.insertOne(
      new User({
        ...payLoad,
      })
    )

    // // hàm nhận vào user_id để bỏ vào payload tạo access token
    // signAccessToken(user_id: string) {
    //   return signToken({
    //     payload: {
    //       user_id,
    //       token_type: TokenType.AccessToken,
    //       options: {
    //         expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN
    //       }
    //     }
    //   })
    // }

    // // hàm nhận vào user_id để bỏ vào payload tạo refresh token
    // signRefreshToken(user_id: string) {
    //   return signToken({
    //     payload: {
    //       user_id,
    //       token_type: TokenType.RefreshToken,
    //       options: {
    //         expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN
    //       }
    //     }
    //   })
    // }

    // // ký access_token và refresh_token
    // private signAccessAndRefreshToken(user_id: string) {
    //   return Promise.all([this.signAccessToken(user_id), this.signRefreshToken(user_id)])
    // }

    // async checkEmailExist(email: string) {
    //   const user = await databaseService.users.findOne({ email })
    //   return Boolean(user)
    // }

    // // lấy user_id từ user mới tạo
    // const user_id = result.insertedId.toString()
    // const [access_token, refresh_token] = await this.signAccessAndRefreshToken(user_id)

    // // lưu refresh_token vào database
    // await databaseService.refreshTokens.insertOne(
    //   new RefreshToken({ token: refresh_token, user_id: new ObjectId(user_id) })
    // )

    return { message: 'insert complete' }
  }
}

const userService = new UsersService()
export default userService
