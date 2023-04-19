import express, { Express, Request, Response } from "express";
import cors from "cors";
import { getMarkdown } from "./data-utils";
import fs from 'graceful-fs';

const app: Express = express();
app.use(cors());

const log = (message: string) => {
    const timeFormat = new Date().toLocaleTimeString(
        'en-US', { hour12: false }
    );
    console.log(timeFormat + ": " + message);
    console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
}

app.get('/all', (req: Request, res: Response) => {
    const dir = './';
    const fileNames: string[] = [];
    const data: { [key: string]: string }[] = [];

    log('GET request recieved');

    try {
        fs.readdir(dir, (err, files) => {
            files.forEach(file => {
                const fileExtension = file.split('.').pop();
                if (fileExtension == 'md') {
                    fileNames.push(file.split('.')[0]);
                }
            });

            fileNames.forEach(fileName => {
                const file = fileName + '.md';
                const result = getMarkdown('./' + file);
                log('Fetched all content from ' + file);
                data.push(result.data);
            });
            res.status(200).send(data);
            log('Returned data');
        })
    } catch (error) {
        res.status(500).send(error);
        log("An error occured")
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