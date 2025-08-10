import Startup from "../models/startup.js";

export const getAllStartups = async (req, res) => {
  try {
    const { search, industry, country } = req.query;

    // Initialize an array of conditions for the $and operator
    const queryConditions = [];

    // Add search conditions to the array if a search term is provided
    if (search) {
      queryConditions.push({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { industry: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { "founders.name": { $regex: search, $options: "i" } },
        ],
      });
    }

    if (industry) {
      queryConditions.push({
        industry: { $regex: industry, $options: "i" },
      });
    }

    if (country) {
      queryConditions.push({
        country: { $regex: country, $options: "i" },
      });
    }

    let query = {};
    if (queryConditions.length > 0) {
      query.$and = queryConditions;
    }

    const startups = await Startup.find(query);

    res.status(200).json(startups);
  } catch (error) {
    console.error("Error fetching startups:", error);
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
