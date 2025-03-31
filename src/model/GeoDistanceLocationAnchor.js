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
 * The GeoDistanceLocationAnchor model module.
 * @module model/GeoDistanceLocationAnchor
 * @version 8.0.0
 */
class GeoDistanceLocationAnchor {
    /**
     * Constructs a new <code>GeoDistanceLocationAnchor</code>.
     * Specifies the location of the pin point used for search
     * @alias module:model/GeoDistanceLocationAnchor
     */
    constructor() { 
        
        GeoDistanceLocationAnchor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GeoDistanceLocationAnchor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeoDistanceLocationAnchor} obj Optional instance to populate.
     * @return {module:model/GeoDistanceLocationAnchor} The populated <code>GeoDistanceLocationAnchor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeoDistanceLocationAnchor();

            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], Object);
            }
            if (data.hasOwnProperty('lon')) {
                obj['lon'] = ApiClient.convertToType(data['lon'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GeoDistanceLocationAnchor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GeoDistanceLocationAnchor</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Latitude of the anchor point
 * @member {Object} lat
 */
GeoDistanceLocationAnchor.prototype['lat'] = undefined;

/**
 * Longitude of the anchor point
 * @member {Object} lon
 */
GeoDistanceLocationAnchor.prototype['lon'] = undefined;






export default GeoDistanceLocationAnchor;

