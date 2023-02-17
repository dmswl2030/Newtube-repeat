import mongoose, { mongo } from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/Newtube", {
  useNewUrlParser: true,
  useUnifiedtopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError); //on: 여러번 계속 발생
db.once("open", handleOpen); //once: 한번만 나오게
