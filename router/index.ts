import * as express from "express";
import TodoController from "../app/controllers/todo.controller";
import UserController from "../app/controllers/user.controller";
import JsonResponse from "../libs/response";

const Router = express.Router();

Router.get("/", (req, res) => {
    JsonResponse.success(res, 200, 'hello world')
});

Router.get("/users", UserController.index);
Router.get("/users/create", UserController.create);
Router.get("/todos", TodoController.index);
Router.get("/todos/create", TodoController.create)
Router.get("/todos/:id/show", TodoController.show, )

export default Router;
