import { model, Schema } from "mongoose";

const urlSchema = new Schema({
  original: {
    type: String,
    required: true,
    trim: true
  },
  shortCode: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: /[a-zA-Z0-9]{5}/
  }
});

export const UrlPair = model("urlPair", urlSchema);
