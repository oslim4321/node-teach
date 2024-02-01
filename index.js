// const express = require('express')

// const app = express()

// app.use(express.json())

// app.get('/', function(req, res){
//     res.send('Hello World');
// })

// // how to make a post request ad get the data they are sending
// app.post('/user', (req,res)=>{
//     const data = req.body
//     console.log(data)
//     const isError = false
//     if(isError){
//         return res.status(404).json({
//             message: "An Error occured"
//         })
//     }
//     res.status(201).json(data)
// })

// // how to make a get request
// let users = [
//     {id: 1, name: 'userA', age: 11},
//     {id: 2, name: 'userB', age: 14},
//     {id: 3, name: 'userC', age: 17},
// ]
// app.get('/users',(req,res)=>{
//     res.json(users)
// })

// // Getting single user data
// app.get("/users/:id", (req, res) => {
//     const {id} = req.params;
//     const user = users.filter(user => user.id == id);
//     console.log(user)
//     if(user.length < 1){
//         res.status(404).json({
//             status: "Error",
//             message: "User with the specified ID not found!"
//         })
//     }
//     res.status(200).json({
//         status: "Success",
//         message: "User found successfully",
//         data: user
//     })

// })

// // Creating a middleware function
// const sayHelloToTheConsole = (req, res, next) => {
//     console.log('Hello World');
//     const yoo = setTimeout(() => {
//         console.log("Timeout babby!!!")
//     }, 3000)
//     next();
// }

// // Getting single user by name
// app.get("/users/name/:name", sayHelloToTheConsole, (req, res) => {
//     const {name} = req.params;
//     const user = users.filter(user => user.name === name);
//     if(user.length < 1){
//         res.status(404).json({
//             status: "Error",
//             message: "User with the specified name not found!"
//         })
//     }
//     res.status(200).json({
//         status: "Success",
//         message: "User found successfully",
//         data: user
//     })

// })

// app.listen(5000, 'localhost', ()=>{
//     console.log('server is listening on port 5000');
// })

// TODO APP

const express = require("express");
const todoRouter = require("./src/route/todo");
const app = express();
const cors = require("cors");
const conn = require("./conn");

app.use(express.json());
app.use(cors());

app.use("/todo", todoRouter);

const start = async () => {
  await conn();
  app.listen(5000, "localhost", () => {
    console.log("server is listening on port 5000");
  });
};

start();
