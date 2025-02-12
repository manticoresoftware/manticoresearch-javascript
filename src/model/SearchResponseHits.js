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
 * The SearchResponseHits model module.
 * @module model/SearchResponseHits
 * @version 7.0.0
 */
class SearchResponseHits {
    /**
     * Constructs a new <code>SearchResponseHits</code>.
     * Object containing the search hits, which represent the documents that matched the query.
     * @alias module:model/SearchResponseHits
     */
    constructor() { 
        
        SearchResponseHits.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchResponseHits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchResponseHits} obj Optional instance to populate.
     * @return {module:model/SearchResponseHits} The populated <code>SearchResponseHits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchResponseHits();

            if (data.hasOwnProperty('max_score')) {
                obj['max_score'] = ApiClient.convertToType(data['max_score'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('total_relation')) {
                obj['total_relation'] = ApiClient.convertToType(data['total_relation'], 'String');
            }
            if (data.hasOwnProperty('hits')) {
                obj['hits'] = ApiClient.convertToType(data['hits'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchResponseHits</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchResponseHits</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['total_relation'] && !(typeof data['total_relation'] === 'string' || data['total_relation'] instanceof String)) {
            throw new Error("Expected the field `total_relation` to be a primitive type in the JSON string but got " + data['total_relation']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['hits'])) {
            throw new Error("Expected the field `hits` to be an array in the JSON data but got " + data['hits']);
        }

        return true;
    }


}



/**
 * Maximum score among the matched documents
 * @member {Number} max_score
 */
SearchResponseHits.prototype['max_score'] = undefined;

/**
 * Total number of matched documents
 * @member {Number} total
 */
SearchResponseHits.prototype['total'] = undefined;

/**
 * Indicates whether the total number of hits is accurate or an estimate
 * @member {String} total_relation
 */
SearchResponseHits.prototype['total_relation'] = undefined;

/**
 * Array of hit objects, each representing a matched document
 * @member {Array.<Object>} hits
 */
SearchResponseHits.prototype['hits'] = undefined;






export default SearchResponseHits;

