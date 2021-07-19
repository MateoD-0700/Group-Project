//      File Name: match.js
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const MatchItemSchema = new Schema({
    matchNumber: String,
    competitor1Name: String,
    competitor2Name: String,
    winner: String
}, {
    collection: "match"
});
const Model = mongoose_1.default.model("Match", MatchItemSchema);
exports.default = Model;
//# sourceMappingURL=match.js.map