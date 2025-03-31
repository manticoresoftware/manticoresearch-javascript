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
 * The DeleteResponse model module.
 * @module model/DeleteResponse
 * @version 8.0.0
 */
class DeleteResponse {
    /**
     * Constructs a new <code>DeleteResponse</code>.
     * Response object for successful delete request
     * @alias module:model/DeleteResponse
     */
    constructor() { 
        
        DeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteResponse} obj Optional instance to populate.
     * @return {module:model/DeleteResponse} The populated <code>DeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteResponse();

            if (data.hasOwnProperty('table')) {
                obj['table'] = ApiClient.convertToType(data['table'], 'String');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('found')) {
                obj['found'] = ApiClient.convertToType(data['found'], 'Boolean');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['table'] && !(typeof data['table'] === 'string' || data['table'] instanceof String)) {
            throw new Error("Expected the field `table` to be a primitive type in the JSON string but got " + data['table']);
        }
        // ensure the json data is a string
        if (data['result'] && !(typeof data['result'] === 'string' || data['result'] instanceof String)) {
            throw new Error("Expected the field `result` to be a primitive type in the JSON string but got " + data['result']);
        }

        return true;
    }


}



/**
 * The name of the table from which the document was deleted
 * @member {String} table
 */
DeleteResponse.prototype['table'] = undefined;

/**
 * Number of documents deleted
 * @member {Number} deleted
 */
DeleteResponse.prototype['deleted'] = undefined;

/**
 * The ID of the deleted document. If multiple documents are deleted, the ID of the first deleted document is returned
 * @member {Number} id
 */
DeleteResponse.prototype['id'] = undefined;

/**
 * Indicates whether any documents to be deleted were found
 * @member {Boolean} found
 */
DeleteResponse.prototype['found'] = undefined;

/**
 * Result of the delete operation, typically 'deleted'
 * @member {String} result
 */
DeleteResponse.prototype['result'] = undefined;






export default DeleteResponse;

