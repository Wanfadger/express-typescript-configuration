"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.end("Hello world");
});
const port = 4000;
app.listen(port, 'localhost', () => console.log(`Server listening on ${port}`));
//# sourceMappingURL=index.js.map