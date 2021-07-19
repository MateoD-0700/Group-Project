//      File Name: index.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import express, { Request, Response, NextFunction } from 'express';

import Competitor from '../Models/competitor';
import Match from '../Models/match';
import Tournament from '../Models/tournament';


// Display Page Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about'  });
}

export function DisplayActiveTourneyPage(req: Request, res: Response, next: NextFunction): void
{
    res.render("index", { title: "Active Tournaments", page: "activetourney" });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services'  });
}
export function DisplayNewTourneyPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Create New A Tournament', page: 'newtourney'  });
}

export function DisplayViewTourneyPage(req: Request, res: Response, next: NextFunction): void
{
    Competitor.find(function(err, competitorCollection){
        if(err)
        {
            return console.error(err);
        }

        res.render('index', {title: 'Tournament Tree', page: 'viewtourney', competitor: competitorCollection});
    });

    Tournament.find(function(err, tournamentCollection){
        if(err)
        {
            return console.error(err);
        }
        res.render('index', {title: 'Tournament Tree', page: 'viewtourney', tournament: tournamentCollection});
    });
}
// export function DisplayCompetitorsListPage(req: Request, res: Response, next: NextFunction): void
// {
//     res.render('index', {title: 'Competitors List', page: 'competitor-list'});
// }

