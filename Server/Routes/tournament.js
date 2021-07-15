"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const tournament_1 = require("../Controllers/tournament");
router.get('/', tournament_1.DisplayTournamentListPage);
router.get('/add', tournament_1.DisplayAddPage);
router.get('/edit/:id', tournament_1.DisplayEditPage);
router.post('/add', tournament_1.ProcessAddPage);
router.post('/edit/:id', tournament_1.ProcessEditPage);
router.get('/delete/:id', tournament_1.ProcessDeletePage);
//# sourceMappingURL=tournament.js.map