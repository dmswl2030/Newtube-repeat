import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";

const globalRouter = express.Router(); //라우터 변수를 생성

globalRouter.get("/", trending); //라우터를 핸들러에 연결
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
