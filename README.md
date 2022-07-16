# express-typescript-configuration
setup of express using typescript

# Install Dependencies
npm install express && npm install --save-dev typescript nodemon @types/node @types/express

Can ignore typescript and node if set globally.

# Configure Package.json
{
    "main":"dist/index.js",
    "scripts":{
        "build": "tsc",
        "start": "tsc & node .",
        "dev":"tsc -w & nodemon ."
    }
}


# Configure tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": ["node_modules/*"]
    }
  },
  "include": ["src/**/*"]
}

# CREATE main Server
import express, { Request, Response } from 'express'

const app = express()

app.get('/' , (req:Request , res:Response) => {
    res.end("Hello world")
} )

const port = 4000
app.listen(port , 'localhost', ()=> console.log(`Server listening on ${port}`))

# RUN SERVER
npm run dev
