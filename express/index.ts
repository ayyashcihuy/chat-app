import express, {Express, Response, Request} from "express"

const app: Express = express()
const port = 3000

app.use(express.json())

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})