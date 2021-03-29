import mongoose from 'mongoose'

const listSchema = new mongoose.Schema(
  {
    name: {
      String,
      required: true,
      trim: true,
      maxlength: 50
    },
    description: String,
    createdBy: {
      mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
)

listSchema.index({ user: 1, name: 1 }, { unique: true })

export const List = mongoose.model('list', listSchema)
