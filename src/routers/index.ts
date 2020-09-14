import { Router } from "express";
import { UrlPair } from "../models/urlPair";
import { UrlShortenRequest } from "../types";
import { getNewCode } from "../utils/shortenUrl";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    message: "Welcome to this URL shortener"
  });
});

router.post("/", async (req, res) => {
  const { url: original } = req.body as UrlShortenRequest;
  const code = await getNewCode();
  const newPair = new UrlPair({ original, shortCode: code });
  await newPair.save();
  res.json({
    url: `http://localhost:4000/${code}`
  });
});

router.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;
    const { original: url } = (await UrlPair.findOne({ shortCode })) as any;
    res.redirect(url);
  } catch (e) {
    res.send("BRUH");
  }
});

export default router;
