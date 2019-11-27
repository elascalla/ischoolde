import { Router } from "express";

import UserController from "./app/controllers/UserController";
import PanelController from "./app/controllers/PanelController";
import SessionController from "./app/controllers/SessionController";
import GitHubUserCreationChallengeController from "./app/controllers/GitHub/GitHubUserCreationChallengeController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

// Guest
routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

//Temporário (mover para depois do middleware de autenticação)
routes.post(
  "/challenges/github/users",
  GitHubUserCreationChallengeController.store
);
//Fim do temporário (mover para depois do middleware de autenticação)

// Middleware de autenticação
routes.use(authMiddleware);

// Auth
routes.put("/users", UserController.update);
routes.get("/panels", PanelController.index);
routes.get("/panels/totalInstallation/:userId", PanelController.sumTotal);
routes.get("/panels/maxCost/:userId", PanelController.maxCost);
routes.get("/panels/largerMonths/:userId", PanelController.largerMonths);
routes.get("/panels/graphic/:userId", PanelController.graphic);

export default routes;
