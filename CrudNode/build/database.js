"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const keys_1 = __importDefault(require("./keys"));
const pool = new mssql_1.default.ConnectionPool(keys_1.default, err => {
    if (err) {
        console.error("Connection failed", err);
    }
    else {
        console.log("Conectado");
    }
    ;
});
exports.default = pool;
