import express from "express";
import ProjectRouter from "./Routes/ProjectRoutes";
import ActionRouter from "./Routes/ActionRoutes";

const server = express();

server.use(express.json());
server.use("/projects", ProjectRouter);
server.use("/projects/:id/actions", ActionRouter);

server.listen(3333, () => console.log("\n== API running on port 3333 ==\n"));
