//      File Name: tournament.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//

import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the mongoose schema

const TournamentItemSchema = new Schema
    ({
    tournamentId: Number,
    tournamentName: String,
    numberOfCompetitors: Number,
    type: String,
    description: String,
    competitorList: String,
    champion: String
},
{
    collection: "tournament"
});

const Model = mongoose.model("Tournament", TournamentItemSchema);
export default Model;