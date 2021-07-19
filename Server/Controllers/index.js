//      File Name: index.js
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayViewTourneyPage = exports.DisplayNewTourneyPage = exports.DisplayServicesPage = exports.DisplayActiveTourneyPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const competitor_1 = __importDefault(require("../Models/competitor"));
const tournament_1 = __importDefault(require("../Models/tournament"));
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayActiveTourneyPage(req, res, next) {
    res.render("index", { title: "Active Tournaments", page: "activetourney" });
}
exports.DisplayActiveTourneyPage = DisplayActiveTourneyPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayNewTourneyPage(req, res, next) {
    res.render('index', { title: 'Create New A Tournament', page: 'newtourney' });
}
exports.DisplayNewTourneyPage = DisplayNewTourneyPage;
function DisplayViewTourneyPage(req, res, next) {
    competitor_1.default.find(function (err, competitorCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Tournament Tree', page: 'viewtourney', competitor: competitorCollection });
    });
    tournament_1.default.find(function (err, tournamentCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Tournament Tree', page: 'viewtourney', tournament: tournamentCollection });
    });
}
exports.DisplayViewTourneyPage = DisplayViewTourneyPage;
//# sourceMappingURL=index.js.map