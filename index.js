/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/
const express = require("express"); // similar to import express from "express"
const projectsRouter = require("./routers/projects-router");
const actionsRouter = require("./routers/actions-router");
//create a server
const server = express();

//middleware - to teach express new tricks
server.use(express.json()); //teaches how to parse JSON from the body

// // use routes and endpoints
server.use("/api/projects", projectsRouter);

server.use("/api/projects/:id/actions", actionsRouter);

// server.get("/", (req, res) => {
//   res.send(`<h2>Projects and Actions</h2>`);
// });

server.listen(8000, () => {
  console.log("\n*** Server Running on http://localhost:8000 ***\n");
});
