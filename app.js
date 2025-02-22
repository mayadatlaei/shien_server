const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./routes/routes");
const cors = require("cors")



const app = express();
app.use(express.json());
app.use("/",Routes)
app.use(cors())
// app.use(cors());
// app.use('/' , Routes)
console.log('test');


const mongooseURL =
  "mongodb+srv://mayada:mayada123@cluster0.rl44i.mongodb.net/";

mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});

app.get("/getBtata", (req, res) => {
  res.status(200).json({
    name: "btata",
    price: "5$",
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);

  if (req.body.grade > 90) {
    res.status(200).json({
      name: req.body.name,
      type: "SHATOOR",
    });
  } else {
    res.status(200).json({
      name: req.body.name,
      type: "TEES",
    });
  }
});

app.post("/whatsyourname", (req, res) => {
  const { name, lastName } = req.body;
  console.log(name, lastName);

  if (!name && !lastName) {
    res.status(400).json({
      message: "pleas  enter your name and LastName"
    })
  }
  res.status(200).json({ message: "hello " + name + " " + lastName })
})

app.post("/checkAge", (req, res) => {
  const { name, age } = req.body;

  if (age < 18) {
    res.status(400).json({
      message: "too young " + name
    })
    return
  }

  res.status(200).json({ message: "welcom" + " " + name })
})

// app.post("/logIn", (req, res) => {
//   const { name, password } = req.body;


//   if (name == "yyyy" && password == "987") {
//     res.status(200).json({
//       message: "the name or the password is  correct",
//     })
//   }
//   res.status(400).json({ message: "The name and the passwod is not correct" })
// })

app.post("/sum", (req, res) => {
  const { x, y } = req.body
  if (!x && !y) {
    res.status(400).json({
      message: "pleas  enter a number"
    })
    return;
  }
  res.status(200).json({ resut: x + y })
})




module.exports = app;