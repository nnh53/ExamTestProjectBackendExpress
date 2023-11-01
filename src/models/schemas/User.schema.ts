import { ObjectId } from 'mongodb'
//đặt interface vì theo chuẩn ts thôi, chứ làm thực tế thì khác
interface UserType {
  _id?: ObjectId
  name: string //required
  email: string
  test_id: string
  user_info_token: string
  created_at?: Date
  updated_at?: Date //lúc mới tạo chưa có gì thì nên cho bằng create_at
}

export default class User {
  _id?: ObjectId
  name: string
  email: string
  test_id?: string
  user_info_token?: string
  created_at?: Date
  updated_at?: Date

  constructor(user: UserType) {
    const date = new Date() //tạo này cho ngày created_at updated_at bằng nhau
    this._id = user._id || new ObjectId() // tự tạo id
    this.name = user.name || '' // nếu người dùng tạo mà k truyền ta sẽ để rỗng
    this.email = user.email || ''
    this.created_at = user.created_at || date
    this.updated_at = user.updated_at || date
  }
}
