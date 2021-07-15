import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller DisplayCompetitorsListPage
import { DisplayNewTourneyPage, DisplayAboutPage, DisplayHomePage, DisplayActiveTourneyPage, DisplayServicesPage, DisplayViewTourneyPage } from '../Controllers/index';
/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/activetourney', DisplayActiveTourneyPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET new tourney page. */
router.get('/newtourney', DisplayNewTourneyPage);
// router.get('/competitor-list', DisplayCompetitorsListPage)

/* GET view tourney page. */
router.get('/viewtourney', DisplayViewTourneyPage);
//module.exports = router;
