import mongoose from "mongoose";

const DogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    personality: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
    coat: {
      type: String,
      required: true,
    },
    coatColor: {
      type: String,
      required: true,
    },
    eyeColor: {
      type: String,
      required: true,
    },
    lifeExpectancy: {
      type: String,
      required: true,
    },
    history: {
      type: [String],
      required: true,
    },
    care: {
      type: [String],
      required: true,
    },
    health: {
      type: [String],
      required: true,
    },
    diet: {
      type: [String],
      required: true,
    },
    
  },
  { timestamps: true }
);

export default mongoose.models.Dog ||
  mongoose.model("Dog", DogSchema);