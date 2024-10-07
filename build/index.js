"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware que transforma la req boddy a um json
const PORT = 3000;
//i los parametros quieren ser ignorados se coloca un guion bajo solo o al comienzo de parametro ,solo en typescript
app.get('/ping', (_req, res) => {
    console.log("alguien pingueo", +new Date().toLocaleDateString());
    res.send("pong");
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log('server corriendo en el puerto ${PORT}');
});
