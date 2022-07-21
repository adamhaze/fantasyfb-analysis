// Require mongoose
const mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

var RankTrackerSchema = new Schema({
    name: { type: String },
    date: { type: String, default: new Date(Date.now()).toDateString() },

    rankFPBrown: {type: Number, default: 0}, // change in rankings overall (Fantasy Pros)
    rankFPErickson: {type: Number, default: 0},
    rankFPFitz: {type: Number, default: 0},
    rankFPFreedman: {type: Number, default: 0},
    rankFPPisapia: {type: Number, default: 0},

    rankFPBrown1day: {type: Number, default: 0}, // 1 day change in rankings
    rankFPErickson1day: {type: Number, default: 0},
    rankFPFitz1day: {type: Number, default: 0},
    rankFPFreedman1day: {type: Number, default: 0},
    rankFPPisapia1day: {type: Number, default: 0},

    rankYahooBehrens: {type: Number, default: 0}, // Yahoo rankings (overall)
    rankYahooPianowski: {type: Number, default: 0},
    rankYahooDelDon: {type: Number, default: 0},
    rankYahooLoza: {type: Number, default: 0},
    rankYahooHarmon: {type: Number, default: 0},

    rankYahooBehrens1day: {type: Number, default: 0}, // Yahoo rankings (1 day)
    rankYahooPianowski1day: {type: Number, default: 0},
    rankYahooDelDon1day: {type: Number, default: 0},
    rankYahooLoza1day: {type: Number, default: 0},
    rankYahooHarmon1day: {type: Number, default: 0}

});

RankTrackerSchema.index({ '$**$': 'text' });

// Create the Player model
var RanksTracker = mongoose.model("RanksTracker", RankTrackerSchema);

// Export the Player model
module.exports = RanksTracker;