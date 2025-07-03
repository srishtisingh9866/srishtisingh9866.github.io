import express from "express";
const app = express();

// Static routes
// app.get("/", (req, res) => {
//   res.send("Good Morning");
// });

// app.get("/user", (req, res) => {
//   res.send("Good Morning user");
// });app.get("/product/:id", (req, res) => {
  app.get("/product/:id", (req, res) => {
  const products = [
    { id: "1", name: "Product1", price: 41 },
    { id: "2", name: "Product2", price: 42 },
    { id: "3", name: "Product3", price: 43 },
  ];

  const id = req.params.id;
  const product = products.find(p => p.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});





// // ✅ Correct dynamic route
// app.get("/hello/:name", (req, res) => {
//   const { name } = req.params;
//   res.send(`Hello, ${name}`);
// // });
// app.get("/student/:name", (req, res) => {
//   res.send(req.params.name);
// });


// Start the server

// app.get("/", (req, res) => {
//   res.send(req.headers.authorization);
// // });
// app.get("/", (req, res) => {
//   res.send(req.query.name + req.query.age);
//   //http://localhost:8080/?name=john&age=25

// });


app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});