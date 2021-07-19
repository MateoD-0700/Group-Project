import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the mongoose schema

const TournamentItemSchema = new Schema
({
    
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