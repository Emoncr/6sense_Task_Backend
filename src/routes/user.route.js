import express from "express";
import {
  createUser,
  getUsers,
  getUserDetails,
  updateUser,
  updateUserStatus,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/user/create", createUser);
router.get("/users", getUsers);
router.get("/userdetails/:id", getUserDetails);
router.patch("/user/update/:id", updateUser);
router.patch("/user/status/update/:id", updateUserStatus);
router.delete("/user/delete/:id", deleteUser);

export default router;
