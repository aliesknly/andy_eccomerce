import mongoose from "mongoose";

const BD_URL = "mongodb://localhost:27017";
const BD_NAME = "andy_ecommerce";

export async function initMongoConnect() {
  await mongoose
    .connect(`${BD_URL}/${BD_NAME}`)
    .then(() => {
      console.log("Data Base connected success!!");
    })
    .catch((err) => {
      console.log("Have a error :(");
      console.log(err);
    });
}
