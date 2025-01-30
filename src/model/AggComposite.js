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
import AggCompositeSource from './AggCompositeSource';

/**
 * The AggComposite model module.
 * @module model/AggComposite
 * @version 6.0.0
 */
class AggComposite {
    /**
     * Constructs a new <code>AggComposite</code>.
     * Object to perform composite aggregation, i.e., grouping search results by multiple fields
     * @alias module:model/AggComposite
     */
    constructor() { 
        
        AggComposite.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AggComposite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggComposite} obj Optional instance to populate.
     * @return {module:model/AggComposite} The populated <code>AggComposite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AggComposite();

            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('sources')) {
                obj['sources'] = ApiClient.convertToType(data['sources'], [{'String': AggCompositeSource}]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AggComposite</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AggComposite</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['sources'])) {
            throw new Error("Expected the field `sources` to be an array in the JSON data but got " + data['sources']);
        }

        return true;
    }


}



/**
 * Maximum number of composite buckets in the result
 * @member {Number} size
 */
AggComposite.prototype['size'] = undefined;

/**
 * @member {Array.<Object.<String, module:model/AggCompositeSource>>} sources
 */
AggComposite.prototype['sources'] = undefined;






export default AggComposite;

