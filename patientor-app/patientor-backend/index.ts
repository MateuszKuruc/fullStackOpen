import express from "express";

const app = express();
app.use(express.json());

const PORT = 3003;

app.get("/api/ping", (_req, res) => {
  console.log("test pinging");
  res.send("pooooong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
