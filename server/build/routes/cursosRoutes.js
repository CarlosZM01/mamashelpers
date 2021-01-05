"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosController_1 = __importDefault(require("../controllers/cursosController"));
class CursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cursosController_1.default.getAll);
        this.router.get('/:id', cursosController_1.default.getOne);
        this.router.post('/', cursosController_1.default.create);
        this.router.put('/:id', cursosController_1.default.update);
        this.router.delete('/:id', cursosController_1.default.delete);
    }
}
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
