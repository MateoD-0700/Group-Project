//      File Name: tournament.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type competitor controller
import { DisplayAddPage, DisplayTournamentListPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage } from '../Controllers/tournament';

// Display the Competitor-List Page
router.get('/', DisplayTournamentListPage); // default route

/* GET - display /competitor-list/add page. */
router.get('/add', DisplayAddPage);

// Display the Edit page by id
router.get('/edit/:id', DisplayEditPage);

// Display the Add page
router.post('/add', ProcessAddPage);

/* POST - process /competitor-list/edit/:id page */
router.post('/edit/:id', ProcessEditPage);

/* GET - process /competitor-list/delete/:id */
router.get('/delete/:id', ProcessDeletePage);