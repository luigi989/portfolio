import express, { Express, Request, Response } from "express";
import cors from "cors";
import { getMarkdown } from "./data-utils";

const app: Express = express();

app.use(cors());

app.get('/periodic', (req: Request, res: Response) => {
    try {
        const result = getMarkdown("./periodic.md");
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

const port = 3001;

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});