import mongoose, { Schema } from "mongoose";

const StartupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    founded: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    continent: {
      type: String,
      required: false,
    },
    founders: {
      type: String,
      required: false,
    },
    employees: {
      type: Number,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    mission_statement: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    is_seeking_funding: {
      type: Boolean,
      required: false,
    },
    has_mvp: {
      type: Boolean,
      required: false,
    },
    image_url: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Startup = mongoose.model("Startup", StartupSchema);
export default Startup;
