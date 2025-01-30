/**
 * Manticore Search Client
 * Сlient for Manticore Search. 
 *
 * The version of the OpenAPI document: 5.0.0
 * Contact: info@manticoresearch.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FulltextFilter model module.
 * @module model/FulltextFilter
 * @version 6.0.0
 */
class FulltextFilter {
    /**
     * Constructs a new <code>FulltextFilter</code>.
     * Defines a type of filter for full-text search queries
     * @alias module:model/FulltextFilter
     */
    constructor() { 
        
        FulltextFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FulltextFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FulltextFilter} obj Optional instance to populate.
     * @return {module:model/FulltextFilter} The populated <code>FulltextFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulltextFilter();

            if (data.hasOwnProperty('query_string')) {
                obj['query_string'] = ApiClient.convertToType(data['query_string'], 'String');
            }
            if (data.hasOwnProperty('match')) {
                obj['match'] = ApiClient.convertToType(data['match'], Object);
            }
            if (data.hasOwnProperty('match_phrase')) {
                obj['match_phrase'] = ApiClient.convertToType(data['match_phrase'], Object);
            }
            if (data.hasOwnProperty('match_all')) {
                obj['match_all'] = ApiClient.convertToType(data['match_all'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FulltextFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FulltextFilter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['query_string'] && !(typeof data['query_string'] === 'string' || data['query_string'] instanceof String)) {
            throw new Error("Expected the field `query_string` to be a primitive type in the JSON string but got " + data['query_string']);
        }

        return true;
    }


}



/**
 * Filter object defining a query string
 * @member {String} query_string
 */
FulltextFilter.prototype['query_string'] = undefined;

/**
 * Filter object defining a match keyword passed as a string or in a Match object
 * @member {Object} match
 */
FulltextFilter.prototype['match'] = undefined;

/**
 * Filter object defining a match phrase
 * @member {Object} match_phrase
 */
FulltextFilter.prototype['match_phrase'] = undefined;

/**
 * Filter object to select all documents
 * @member {Object} match_all
 */
FulltextFilter.prototype['match_all'] = undefined;






export default FulltextFilter;

