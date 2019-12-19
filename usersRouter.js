const express = require("express");
const Users = require("./data/dbHelpers/users");

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  try {
    const userss = await Users.get();
    res.status(201).json(userss);
  } catch (err) {
    res
      .status(500)
      .json({ err: "The users could not be retrieved." });
  }
});

// GET users by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Users.getById(id);
    if (users.length > 0) {
      res.status(201).json(users);
    } else {
      res
        .status(404)
        .json({ error: "The user with that id does not exist." });
    }
  } catch (err) {
    res.status(500).json({ err: "The user could not be retrieved." });
  }
});

// Add new users
router.post("/", async (req, res) => {
  try {
    const newUsers = req.body;
    if (newUsers.term && newUsers.definition && newUsers.reviewNameId) {
      const users = await Users.insert(newUsers);
      res.status(201).json({ newUsers: users });
    } else {
      res.status(400).json({ message: "Please provide term and definition." });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
});

// DELETE users
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const usersDelete = await Users.remove(id);
    if (usersDelete) {
      res.status(200).json({ deletedMessage: usersDelete });
    } else {
      res
        .status(404)
        .json({ message: "The users with the specified ID does not exist." });
    }
  } catch (err) {
    res.status(500).json({ err: "The users failed to delete." });
  }
});

//UPDATE, or edit, the users text and/or definition
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUsers = req.body;
    const users = await Users.update(id, updatedUsers);
    if (users) {
      if (
        updatedUsers.id &&
        updatedUsers.term &&
        updatedUsers.definition &&
        updatedUsers.reviewNameId
      ) {
        res.status(200).json({ updatedUsers: users });
      } else {
        res.status(400).json({
          err: "Please provide users ID,updated text and definition for users"
        });
      }
    } else {
      res
        .status(404)
        .json({ message: "The users with the specified ID does not exist." });
    }
  } catch (err) {
    res.status(500).json({ err: "Users failed to udpate." });
  }
});

module.exports = router;
