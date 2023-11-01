// giả sử anh đag làm route login
// thì người dùng sẽ truyền email và password
// tạo 1 req có body là email và password
// - làm 1 middleware kiểm tra xem email và password có đc truyền lên hay ko

//************  Request / Response : CHÚ Ý LÀ XÀI CỦA EXPRESS ****************** */
import { NextFunction, Request, Response } from 'express'
import { USERS_MESSAGES } from '~/constants/message'
import { checkSchema } from 'express-validator'
import { ErrorWithStatus } from '~/models/Errors'
import userService from '~/services/users.services'
import { validate } from '~/utils/validation'
import databaseService from '~/services/database.services'
import { hashPassword } from '~/utils/crypto'

export const registerValidator = validate(
  checkSchema({
    name: {
      notEmpty: {
        errorMessage: USERS_MESSAGES.NAME_IS_REQUIRED
      },
      isString: {
        errorMessage: USERS_MESSAGES.NAME_MUST_BE_A_STRING
      },
      trim: true,
      isLength: {
        options: {
          min: 1,
          max: 100
        },
        errorMessage: USERS_MESSAGES.NAME_LENGTH_MUST_BE_FROM_1_TO_100
      }
    },
    email: {
      notEmpty: {
        errorMessage: USERS_MESSAGES.EMAIL_IS_REQUIRED
      },
      isEmail: {
        errorMessage: USERS_MESSAGES.EMAIL_IS_INVALID
      },
      trim: true
    },
    test_id: {
      notEmpty: {
        errorMessage: USERS_MESSAGES.TEST_ID_IS_REQUIRED
      },
      trim: true
    },
    user_info_token: {
      notEmpty: {
        errorMessage: USERS_MESSAGES.USER_INFO_TOKEN_IS_REQUIRED
      },
      trim: true
    }
  })
)
