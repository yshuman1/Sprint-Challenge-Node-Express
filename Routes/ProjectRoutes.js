import express from "express";
import ProjectControllers from "../Controllers/ProjectControllers";

const ProjectRouter = express.Router();
const {
  getProject,
  createProject,
  updateProject,
  deleteProject
} = ProjectControllers;

ProjectRouter.get("/:id", getProject);
ProjectRouter.post("/", createProject);
ProjectRouter.put("/:id", updateProject);
ProjectRouter.delete("/:id", deleteProject);

export default ProjectRouter;
