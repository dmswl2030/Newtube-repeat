import express from "express";

const userRouter = express.Router(); //라우터 변수를 생성

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/", handleEditUser); //라우터를 핸들러에 연결

export default userRouter;
