import { random } from "faker";
import { UrlPair } from "../models/urlPair";

export const getNewCode = async () => {
  let newCode = random.alphaNumeric(5);
  while ((await UrlPair.findOne({ shortCode: newCode }).exec()) !== null) {
    console.log("bruh");
    newCode = random.alphaNumeric(5);
  }
  return newCode;
};
