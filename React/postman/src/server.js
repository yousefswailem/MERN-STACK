const express = require("express");
const app = express();

// // req is short for request
// // res is short for response
// app.get("/api", (req, res) => {
//   res.send("Our express api server is now sending this over to the browser");
  
// });

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );


const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.get("/api/users", (req, res) => {
    res.json( users );
    console.log(req.body);
    users.push(req.body);
});



// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        console.log(req.params.id);
        // assuming this id is the index of the users array we could return one user this way
        res.json( users[req.params.id] );
    });