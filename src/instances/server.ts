import cors from "cors";
import express from "express";
import "../db/mongoose";
import { default as homePage } from "../routers";

export const startServer = (port: string, withMessage = true) => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(homePage);

  app.get("/*", (_, res) => {
    res.json({ message: "OOPS" });
  });

  return app.listen(port, () => {
    if (withMessage) {
      console.log(`Server started on port ${port}`);
    }
  });
};
