import mongoose, { Schema } from "mongoose";

const guestSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  passportid: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  language: { type: String, required: true },
  contactmethod: { type: String, required: true },
  country: { type: String, required: true },
  health: { type: String, required: true },
  payment: { type: String, required: true },
  request: { type: String, required: true },
});

export default mongoose.model("GuestModel", guestSchema);
