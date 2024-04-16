import { Schema, model } from 'mongoose'
import { TAddress, TFullName, TUser, UserModel } from './user.interface'


const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: [true, 'First name is required'] },
  lastName: { type: String, required: [true, 'Last name is required'] },
})

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: [true, 'street is required'] },
  city: { type: String, required: [true, 'city is required'] },
  country: { type: String, required: [true, 'country is required'] },
})

const userSchema = new Schema<TUser, UserModel>({
  userId: {
    type: Number,
    required: [true, 'userId is required'],
    unique: true,
    index: true,
  },
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: [true, 'username is required'],
  },
  fullName: {
    type: fullNameSchema,
    required: true,
  },
  age: {
    type: Number,
    required: [true, 'age is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  isActive: {
    type: Boolean,
    required: [true, 'active status  is required'],
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: addressSchema,
    required: true,
  },
})

// userSchema.pre('save', function () {
//   const user = this
//   const salt = bcrypt.genSaltSync(parseInt(config.salt_round as string))
//   user.password = bcrypt.hashSync(user.password, salt)
// })

userSchema.statics.isUserExistsById = async (userId: number) => {
  if (await User.exists({ userId })) {
    return true
  } else {
    return false
  }
}

export const User = model<TUser, UserModel>('user', userSchema)

