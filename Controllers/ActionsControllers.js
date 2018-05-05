import ActionHelpers from "../data/helpers/actionModel";

const handleError = (status, action, res) => {
  res.status(status).json({ error: `Could not ${action} action` });
};

const ActionControllers = {
  getAction: (req, res) => {
    const { id } = req.params;
    ActionHelpers.get(id)
      .then(action => {
        res.status(200).json(action);
      })
      .catch(err => handleError(500, "get", res));
  },
  createAction: (req, res) => {
    const newAction = req.body;
    if ("description" in newAction && "notes" in newAction) {
      ActionHelpers.insert(newAction)
        .then(action => {
          res.status(200).json(action);
        })
        .catch(err => handleError(500, "post", res));
    } else {
      handleError(500, "post", res);
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
        .catch(err => handleError(500, "update", res));
    } else {
      handleError(500, "upadate", res);
    }
  },
  deleteAction: (req, res) => {
    const { id } = req.params;
    if (typeof parseInt(id) === "number") {
      ActionHelpers.delete(id)
        .then(() => res.status(200).json({ success: `deleted id ${id}` }))
        .catch(err => handleError(500, "delete", res));
    } else {
      handleError(500, "delete", res);
    }
  }
};

export default ActionControllers;
