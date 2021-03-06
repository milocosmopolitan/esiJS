const request = require('./esiJS-Utils/request')

module.exports = {
    /**
     * Return available insurance levels for all ship types.
     * @async
     * @returns {object}
     */
    prices () {
        return request({ subUrl: `insurance/prices` })
    }
}
