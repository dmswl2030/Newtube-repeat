import express from "express";
const PORT = 5000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router(); //라우터 변수를 생성
const userRouter = express.Router();
const videoRouter = express.Router();

const handleHome = (req, res) => res.send("Home"); //핸들러 함수 생성
const handleEditUser = (req, res) => res.send("Edit User");
const handleWatchVideo = (req, res) => res.send("Watch Video");

globalRouter.get("/", handleHome); //라우터를 핸들러에 연결
userRouter.get("/edit", handleEditUser);
videoRouter.get("/watch", handleWatchVideo);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
