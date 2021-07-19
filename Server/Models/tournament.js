//      File Name: tournament.js
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
const TournamentItemSchema = new Schema({
    tournamentName: String,
    numberOfCompetitors: Number,
    type: String,
    description: String,
    competitorList: String,
    champion: String
}, {
    collection: "tournament"
});
const Model = mongoose_1.default.model("Tournament", TournamentItemSchema);
exports.default = Model;
//# sourceMappingURL=tournament.js.map