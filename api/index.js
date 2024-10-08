import connectDatabase from "../config/database.js";
import app from "../app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`App is running on PORT ${process.env.PORT}`);
});
