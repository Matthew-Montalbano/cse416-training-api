import Interest from "../models/interest.js";

export const getInterests = async (req, res) => {
  try {
    const interests = await Interest.find();
    console.log(interests);
    res.status(200).json(interests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addInterest = async (req, res) => {
  const interest = req.body;
  const newInterest = new Interest(interest);
  try {
    await newInterest.save();
    res.status(201).json(newInterest);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
