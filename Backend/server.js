import "dotenv/config";
import cookieParser from "cookie-parser";
import express from "express";
import connectDb from "./Utilts/db.js";
import cors from "cors";
import userRouter from "./routes/user-route.js";

const app = express();

const coreOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(coreOptions));

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/app/v1/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).json("hello");
});

const port = process.env.PORT;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
  });
});
