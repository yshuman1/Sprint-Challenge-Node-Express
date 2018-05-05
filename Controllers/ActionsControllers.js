import ActionHelpers from "../data/helpers/actionModel";

const ActionControllers = {
  getAction: (req, res) => {
    const { id } = req.params;
    ActionHelpers.get(id)
      .then(action => {
        res.status(200).json(action);
      })
      .catch(err => res.status(500).json({ error: "error fetching action" }));
  },
  createAction: (req, res) => {
    const newAction = req.body;
    if ("description" in newAction && "notes" in newAction) {
      ActionHelpers.insert(newAction)
        .then(action => {
          res.status(200).json(action);
        })
        .catch(err => res.status(500).json({ error: "create action failed" }));
    } else {
      res.status(500).json({ error: "create project failed" }));
    }
  },
  updateAction: (req, res) => {
    const update = req.body;
    const { id } = req.body;
    if (
      (typeof parseInt(id) === "number" && "description" in update) ||
      "notes" in update
    ) {
      ActionHelpers.update(id, update)
        .then(action => {
          res.status(200).json(action);
        })
        .catch(err =>
          res.status(500).json({ error: "error action project" })
        );
    } else {
      res.status(500).json({ error: "update action failed" });
    }
  },
  deleteAction: (req, res) => {
    const { id } = req.params;
    if (typeof parseInt(id) === "number") {
      ActionHelpers.delete(id)
        .then(() => res.status(200).json({ success: `deleted id ${id}` }))
        .catch(err =>
          res.status(400).json({ error: "error deleting action" })
        );
    } else {
      res.status(500).json({ error: "an id must be provided" });
    }
  }
};

export default ActionControllers;
