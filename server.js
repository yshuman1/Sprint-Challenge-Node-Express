import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ hello: "yes" });
});

server.listen(3333, () => console.log("\n== API running on port 3333 ==\n"));
