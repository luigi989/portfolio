import express, { Express, Request, Response } from "express";
import cors from "cors";
import { getMarkdown } from "./data-utils";
import fs from 'graceful-fs';

const app: Express = express();

app.use(cors());

app.get('/:filename', (req: Request, res: Response) => {
    try {
        const filename = './' + req.params.filename + '.md'
        const result = getMarkdown('./' + req.params.filename + '.md');
        console.log('Fetched all content from ' + filename)
        console.log(result.data);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('all', (req: Request, res: Response) => {
    console.log("here");
    const dir = './';
    try {
        fs.readdir(dir, (err, files) => {
            files.forEach(file => {
                console.log("file: " + file);
            })
        })    
        res.status(200).send();  
    } catch (error) {
        console.log("something went wrong");
        res.status(500).send(error);
    }
});

app.get('titles', (req: Request, res: Response) => {
    console.log("here");
    const dir = './';
    try {
        fs.readdir(dir, (err, files) => {
            files.forEach(file => {
                console.log("file: " + file);
            })
        })    
        res.status(200).send();  
    } catch (error) {
        console.log("something went wrong");
        res.status(500).send(error);
    }
});

const port = 3001;

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});