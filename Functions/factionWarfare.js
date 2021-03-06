const request = require('./esiJS-Utils/request')

module.exports = {
    leaderboards: {
        /**
         * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
         * @async
         * @returns {object} Character leaderboard of kills and victory points within faction warfare.
         */
        characters () {
            return request({ subUrl: `fw/leaderboards/characters` })
        },
        /**
         * 
         * @async
         * @returns {object} Corporation leaderboard of kills and victory points within faction warfare.
         */
        corps () {
            return request({ subUrl: `fw/leaderboards/corporations` })
        },
        /**
         * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday.
         * @async
         * @returns {object} All-time leaderboard of kills and victory points within faction warfare.
         */
        leaderboard () {
            return request({ subUrl: `fw/leaderboards` })
        }
    },
    /**
     * Statistical overviews of factions involved in faction warfare
     * @async
     * @returns {object} Per faction breakdown of faction warfare statistics.
     */
    stats () {
        return request({ subUrl: `fw/stats` })
    },
    /**
     * An overview of the current ownership of faction warfare solar systems.
     * @async
     * @returns {object}
     */
    systems () {
        return request({ subUrl: `fw/systems` })
    },
    /**
     * Data about which NPC factions are at war.
     * @async
     * @returns {object}
     */
    wars () {
        return request({ subUrl: `fw/wars` })
    }
}
