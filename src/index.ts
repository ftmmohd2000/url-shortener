import { startServer } from "./instances/server";

const port = process.env.PORT;
startServer(port as string);
