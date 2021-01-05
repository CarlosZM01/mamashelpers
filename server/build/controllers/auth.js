"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = require("morgan");
const database_1 = __importDefault(require("../database"));
class Auth {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.params;
            const { contrasena } = req.params;
            if (email != null && contrasena != null) {
                yield database_1.default.query('SELECT * FROM usuarios WHERE email = ? AND contrasena = ?', [email, contrasena], function (err, result, fields) {
                    if (result.length > 0) {
                        res.json(result[0]);
                        res.json(morgan_1.token);
                    }
                    else {
                        res.send('Datos incorrectos');
                    }
                    res.end();
                });
            }
            else {
                res.send('Por favor ingrese un email y contraseña');
                res.end();
            }
        });
    }
}
;
const auth = new Auth();
exports.default = auth;
