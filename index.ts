import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('request received..')
})

app.listen(port, () => {
    console.log('listening on:', port);
})