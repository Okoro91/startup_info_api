import mongoose, { Schema } from "mongoose";

const founderSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false,
    },
  },
  { _id: false }
);

const businessAddressSchema = new Schema(
  {
    street: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
  },
  { _id: false }
);

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
    business_address: businessAddressSchema,
    founders: [founderSchema],
    employees: {
      type: Number,
      required: false,
    },
    website: {
      type: String,
      required: true,
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
