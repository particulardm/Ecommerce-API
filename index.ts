import express, { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { addItem } from "./shoppingCart";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('request received..')
})

app.get('/add', (req: Request, res: Response) => {
    let userID: string;
    const itemID: number = req.body["itemid"] || -1;

    if (req.headers.userid) {
        userID = req.headers.userid as string;
    }
    else {
        userID = uuidv4();
        res.set({ userid: userID });
    }

    const resultMessage = addItem(itemID, userID);
    res.json({ message: resultMessage });
})

app.listen(port, () => {
    console.log('listening on:', port);
})