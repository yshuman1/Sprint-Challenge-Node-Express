import express from "express";
import ActionControllers from "../Controllers/ActionsControllers";

const ActionRouter = express.Router();
const {
  getAction,
  createAction,
  updateAction,
  deleteAction
} = ActionControllers;

ActionRouter.get("/:id", getAction);
ActionRouter.post("/", createAction);
ActionRouter.put("/:id", updateAction);
ActionRouter.delete("/:id", deleteAction);

export default ActionRouter;
