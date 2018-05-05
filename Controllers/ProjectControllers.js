import ProjectHelpers from "../data/helpers/projectModel";

const handleError = (status, action, res) => {
  res.status(status).json({ error: `Could not ${action} project` });
};

const ProjectControllers = {
  getProject: (req, res) => {
    const { id } = req.params;
    if (typeof parseInt(id) === "number") {
      ProjectHelpers.get(id)
        .then(res => {
          if (res.length > 0) {
            res.status(200).json(res[0]);
          } else {
            handleError(404, "get", res);
          }
        })
        .catch(err => handleError(500, "get", res));
    } else {
      res.status(500).json({ error: "An id must be provided" });
    }
  },
  createProject: (req, res) => {
    const project = req.body;
    if ("name" in project && "description" in project) {
      ProjectHelpers.insert(project)
        .then(res => {
          res.status(201).json(res[0]);
        })
        .catch(err => handleError(500, "post", res));
    } else {
      handleError(500, "post", res);
    }
  },
  updateProject: (req, res) => {
    const update = req.body;
    const { id } = req.params;
    if (
      (typeof parseInt(id) === "number" && "name" in project) ||
      "description" in project
    ) {
      ProjectHelpers.update(id, project)
        .then(res => {
          res.status(200).json(res[0]);
        })
        .catch(err => handleError(500, "update", res));
    } else {
      handleError(500, "update", res);
    }
  },
  deleteProject: (req, res) => {
    const { id } = req.params;
    if (typeof parseInt(id) === "number") {
      ProjectHelpers.remove(id)
        .then(res => {
          res.status(200).json({ success: `deleted project ${id}` });
        })
        .catch(err => handleError(400, "delete", res));
    } else {
      res.status(500).json({ error: "an id must be provided" });
    }
  }
};

export default ProjectControllers;
