const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Get information on a dogma attribute.
     * @exports attrInfo
     * @async
     * @param attr {number}
     * @returns {object} Info on the attribute.
     */
    attrInfo (attribute) {
        inputValidation({ input: attribute, type: 'number', message: `The function 'dogma.attrInfo' requires an attribute!` })

        return request({ subUrl: `dogma/attributes/${attribute}` })
    },
    /**
     * Get a list of dogma attribute ids.
     * @exports attrs
     * @async
     * @returns {[number]} A array of all attributes.
     */
    attrs () {
        return request({ subUrl: `dogma/attributes` })
    },
    /**
     * Returns info about a dynamic item resulting from mutation with a mutaplasmid.
     * @exports dynamicItemInfo
     * @param itemID {number} 
     * @param typeID {number}
     * @async
     * @returns {object} Info on the mutation.
     */
    dynamicItemInfo (itemID, typeID) {
        inputValidation({ input: itemID, type: 'number', message: `The function 'dogma.attrs' requires an attribute!` })
        inputValidation({ input: typeID, type: 'number', message: `The function 'dogma.attrs' requires an typeID!` })

        return request({ subUrl: `dogma/dynamic/items/${typeID}/${itemID}` })
    },
    /**
     * Get information on a dogma effect.
     * @exports effectInfo
     * @param effect {number}
     * @async
     * @returns {object} Info on the effect.
     */
    effectInfo (effect) {
        inputValidation({ input: effect, type: 'number', message: `The function 'dogma.effectInfo' requires a effect ID!` })

        return request({ subUrl: `dogma/effects/${effect}` })
    },
    /**
     * Get a list of dogma effect ids.
     * @exports effects
     * @async
     * @returns {[number]} A array of dogma effects.
     */
    effects () {
        return request({ subUrl: `dogma/effects` })
    }
}