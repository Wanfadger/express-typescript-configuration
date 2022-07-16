import express, { Request, Response } from 'express'

const app = express()

app.get('/' , (req:Request , res:Response) => {
    res.end("Hello world")
} )

const port = 4000
app.listen(port , 'localhost', ()=> console.log(`Server listening on ${port}`))