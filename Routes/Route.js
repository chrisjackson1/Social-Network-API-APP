const express = require('express');

const PORT = 3001;

const app = express();

//Get All Users
app.get('/', (req, res) => {
    res.json(`${req.method} request received`);
});
// Get a single user by _id
app.get('/:id', (req, res) => {
    res.json(`${req.method} request received`);
});

// Post a new user
app.post("/", (req, res) => {
    res.json(`${req.method} request received`);
});
//Put to update a user by id
app.put("/:id ", (req, res) => {
    res.json(`${req.method} request received`);

});
// Delete to remove user by id
app.delete("/:id", (req, res) => {
    res.json(`${req.method} request received`);

});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
