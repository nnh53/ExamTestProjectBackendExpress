// file này dùng để định nghĩa lại những cái có sẵn

import User from './models/schemas/User.schema'
import { Request } from 'express'

declare module 'express' {
  interface Request {
    user?: User
  }
}
