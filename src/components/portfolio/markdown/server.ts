import express, { Express, Request, Response } from "express";
import cors from "cors";
import { getMarkdown } from "./data-utils";
import fs from 'graceful-fs';

interface projectType {
    [index: string]: {};
}

const app: Express = express();
app.use(cors());

app.get('/all', (req: Request, res: Response) => {
    const dir = './';
    const fileNames: string[] = [];
    const data:projectType = {};
    try {
        fs.readdir(dir, (err, files) => {
            files.forEach(file => {
                const fileExtension = file.split('.').pop();
                if(fileExtension == 'md') {
                    fileNames.push(file.split('.')[0]);
                }
            });

            fileNames.forEach(fileName => {
                const result = getMarkdown('./' + fileName + '.md');
                console.log('Fetched all content from ' + fileName);
                
                const file = fileName.split('.')[0];
                data[file] = result;
            });
            console.log("Combined all fetched content");
        })    
        res.status(200).send(data);  
    } catch (error) {
        res.status(500).send(error);
    }
});

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

const port = 3001;

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});