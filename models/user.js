import mongoose from "mongoose"

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    isActive: { type: Boolean, required: true, default: true },
    careerScore: { type: Number },
    drinkingFrequency: { type: Number },
    isNightOwl: { type: Boolean, required: true },
    livingSituation: { type: String }, // Alone, Roommates, Family
    profession: { type: String }, // Student, Employed, Unemployed
  },
  { timestamps: true }
)

const user = mongoose.model("User", userSchema)

export default user
