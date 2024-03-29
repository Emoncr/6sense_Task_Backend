import { throwError } from "../../utils/customError.js";
import User from "../models/user.model.js";

// CREATING NEW USER
export const createUser = async (req, res, next) => {
  try {
    const result = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      result,
    });
  } catch (error) {
    next(error);
  }
};

// GET ALL USERS NAME AND STATUS
export const getUsers = async (req, res, next) => {
  try {
    const result = await User.find({}, "firstName status");
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    next(error);
  }
};

// GET USER ALL DETAILS HERE
export const getUserDetails = async (req, res, next) => {
  try {
    const requestID = req.params.id;
    const result = await User.findById(requestID);

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    next(error);
  }
};

//  UPDATE USER INFORMATION
export const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const isEmailExist = req.body.email;
    if (isEmailExist)
      return next(throwError(400, "You can't update your email"));

    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

//  UPDATE USER  STATUS INFORMATION
export const updateUserStatus = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userStatus = req.body.status;
    if (userStatus !== "active" && userStatus !== "blocked")
      return next(
        throwError(401, "You can't set value except 'active' or 'blocked'")
      );
    const updatedStatus = await User.findByIdAndUpdate(
      userId,
      { status: req.body.status },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      updatedStatus,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE USER FROM DATABASE
export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) return next(throwError(404, "User not found!"));

    res.status(200).json({
      success: true,
      deletedUser,
    });
  } catch (error) {
    next(error);
  }
};
