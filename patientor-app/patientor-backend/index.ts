import express from "express";

const app = express();
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged");
  res.send("pooooong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});