import express,{json} from "express";
import { initMongoConnect } from "./config/database/mongo.database";
import { routes } from "./routes/routes";
import cors from 'cors'

//APP
const app = express();

//Middelware
app.use(cors())
app.use(json())

//Routes
app.get("/test", (req, res) => {
  return res.send("test");
});

app.use("/api", routes);

//Database
initMongoConnect();

//Running server
app.listen(5000, () => {
  console.log("Server runing on port 5000");
});
