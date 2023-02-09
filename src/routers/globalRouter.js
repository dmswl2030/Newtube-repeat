import express from "express";

const globalRouter = express.Router(); //라우터 변수를 생성

const handleHome = (req, res) => res.send("Home"); //핸들러 함수 생성

globalRouter.get("/", handleHome); //라우터를 핸들러에 연결

export default globalRouter;
