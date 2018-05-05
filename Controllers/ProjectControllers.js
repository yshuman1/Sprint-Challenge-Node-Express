import ProjectHelpers from "../data/helpers/projectModel";

const ProjectControllers = {
  getProject: (req, res) => {
    const { id } = req.params;
    if (typeof parseInt(id) === "number") {
      ProjectHelpers.get(id)
        .then(res => {
          if (res.length > 0) {
            res.status(200).json(res[0]);
          } else {
            res.status(404).json({ error: "error fetching id" });
          }
        })
        .catch(err => res.status(500).json({ error: "error fetching id" }));
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
        .catch(err => res.status(500).json({ error: "create project failed" }));
    } else {
      res.status(500).json({ error: "create project failed" });
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
        .catch(err =>
          res.status(500).json({ error: "error updating project" })
        );
    } else {
      res.status(500).json({ error: "update project failed" });
    }
  },
  deleteProject: (req, res) => {
    const { id } = req.params;
    if (typeof parseInt(id) === "number") {
      ProjectHelpers.remove(id)
        .then(res => {
          res.status(200).json({ success: `deleted project ${id}` });
        })
        .catch(err =>
          res.status(400).json({ error: "error deleting project" })
        );
    } else {
      res.status(500).json({ error: "an id must be provided" });
    }
  }
};

export default ProjectControllers;
