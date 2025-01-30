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
 * The AggTerms model module.
 * @module model/AggTerms
 * @version 6.0.0
 */
class AggTerms {
    /**
     * Constructs a new <code>AggTerms</code>.
     * Object containing term fields to aggregate on
     * @alias module:model/AggTerms
     * @param field {String} Name of attribute to aggregate by
     */
    constructor(field) { 
        
        AggTerms.initialize(this, field);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, field) { 
        obj['field'] = field;
    }

    /**
     * Constructs a <code>AggTerms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggTerms} obj Optional instance to populate.
     * @return {module:model/AggTerms} The populated <code>AggTerms</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AggTerms();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AggTerms</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AggTerms</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AggTerms.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
            throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
        }

        return true;
    }


}

AggTerms.RequiredProperties = ["field"];

/**
 * Name of attribute to aggregate by
 * @member {String} field
 */
AggTerms.prototype['field'] = undefined;

/**
 * Maximum number of buckets in the result
 * @member {Number} size
 */
AggTerms.prototype['size'] = undefined;






export default AggTerms;

