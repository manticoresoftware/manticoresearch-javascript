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
import AggCompositeTerm from './AggCompositeTerm';

/**
 * The AggCompositeSource model module.
 * @module model/AggCompositeSource
 * @version 7.0.0
 */
class AggCompositeSource {
    /**
     * Constructs a new <code>AggCompositeSource</code>.
     * Object containing terms used for composite aggregation.
     * @alias module:model/AggCompositeSource
     * @param terms {module:model/AggCompositeTerm} 
     */
    constructor(terms) { 
        
        AggCompositeSource.initialize(this, terms);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, terms) { 
        obj['terms'] = terms;
    }

    /**
     * Constructs a <code>AggCompositeSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggCompositeSource} obj Optional instance to populate.
     * @return {module:model/AggCompositeSource} The populated <code>AggCompositeSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AggCompositeSource();

            if (data.hasOwnProperty('terms')) {
                obj['terms'] = AggCompositeTerm.constructFromObject(data['terms']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AggCompositeSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AggCompositeSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AggCompositeSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `terms`
        if (data['terms']) { // data not null
          AggCompositeTerm.validateJSON(data['terms']);
        }

        return true;
    }


}

AggCompositeSource.RequiredProperties = ["terms"];

/**
 * @member {module:model/AggCompositeTerm} terms
 */
AggCompositeSource.prototype['terms'] = undefined;






export default AggCompositeSource;

