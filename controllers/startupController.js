import Startup from "../models/startup.js";

export const getAllStartups = async (req, res) => {
  try {
    const startup = await Startup.find({});
    res.status(201).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createStartup = async (req, res) => {
  try {
    const startup = await Startup.create(req.body);
    res.status(201).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStartupById = async (req, res) => {
  try {
    const { id } = req.params;
    const startup = await Startup.findById(id);
    res.status(201).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStartup = async (req, res) => {
  try {
    const { id } = req.params;
    const startup = await Startup.findByIdAndUpdate(id, req.body);

    if (!startup) {
      return res.status(404).json({ message: "Startup not found" });
    }

    const updatedStartup = await Startup.findById(id);
    res.status(201).json(updatedStartup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStartup = async (req, res) => {
  try {
    const { id } = req.params;
    const startup = await Startup.findByIdAndDelete(id, req.body);

    if (!startup) {
      return res.status(404).json({ message: "Startup not found" });
    }

    res.status(201).json({ message: "Startup successfull deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
