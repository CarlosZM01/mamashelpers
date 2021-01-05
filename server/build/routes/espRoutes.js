"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const espController_1 = __importDefault(require("../controllers/espController"));
class EspecialistasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', espController_1.default.getEspecialistas);
        this.router.get('/:id', espController_1.default.getEsp);
        // this.router.post('/', especialistasController.create);
        // this.router.put('/:id', especialistasController.update);
        // this.router.delete('/:id', especialistasController.delete);
    }
}
const especialistasRoutes = new EspecialistasRoutes();
exports.default = especialistasRoutes.router;
