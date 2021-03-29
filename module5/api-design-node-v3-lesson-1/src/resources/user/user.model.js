import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    email: {
      String,
      required: true,
      unique: true,
      trim: true
    },

    password: {
      String,
      required: true
    },
    settings: {
      theme: {
        String,
        required: true,
        default: 'dark'
      },
      notifications: {
        Boolean,
        required: true,
        default: true
      },
      compactMode: {
        Boolean,
        required: true,
        default: false
      }
    }
  },
  { timestamps: true }
)

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next()
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err)
    }

    this.password = hash
    next()
  })
})

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err)
      }

      resolve(same)
    })
  })
}

export const User = mongoose.model('user', userSchema)
