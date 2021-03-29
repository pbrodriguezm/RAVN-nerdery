import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
  {
    name: {
      String,
      required: true,
      trim: true,
      maxlength: 50
    },
    status: {
      String,
      required: true,
      enum: ['active', 'complete', 'pastdue'],
      default: 'active'
    },
    notes: String,
    due: Date,
    createdBy: {
      mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    },
    list: {
      mongoose.SchemaTypes.ObjectId,
      ref: 'list',
      required: true
    }
  },
  { timestamps: true }
)

itemSchema.index({ list: 1, name: 1 }, { unique: true })

export const Item = mongoose.model('item', itemSchema)
