import bodyParser from "body-parser";
import express from "express";
import JsonResponse from "./libs/response";
import Router from "./router";

class Server {
  private port = 8000;
  private app = express();

  public start(): void {
    this.app.listen(this.port, () => {
      this.app.use(express.json());
      this.app.use(bodyParser.json({ limit: '50mb' }))
      this.loadRoutes();
      console.log(
        `⚡️[server]: Server is running at http://localhost:${this.port}`
      );
      this.app.get('*', (req, res)=> {
          JsonResponse.error(res, 404)
      })
    });
  }

  private loadRoutes(): void {
    this.app.use(Router);
  }
}

const app = new Server();

app.start();
