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
import Aggregation from './Aggregation';
import Highlight from './Highlight';
import Join from './Join';
import KnnQuery from './KnnQuery';
import SearchQuery from './SearchQuery';

/**
 * The SearchRequest model module.
 * @module model/SearchRequest
 * @version 7.0.0
 */
class SearchRequest {
    /**
     * Constructs a new <code>SearchRequest</code>.
     * Request object for search operation
     * @alias module:model/SearchRequest
     * @param table {String} The table to perform the search on
     */
    constructor(table) { 
        
        SearchRequest.initialize(this, table);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, table) { 
        obj['table'] = table;
    }

    /**
     * Constructs a <code>SearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchRequest} obj Optional instance to populate.
     * @return {module:model/SearchRequest} The populated <code>SearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchRequest();

            if (data.hasOwnProperty('table')) {
                obj['table'] = ApiClient.convertToType(data['table'], 'String');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = SearchQuery.constructFromObject(data['query']);
            }
            if (data.hasOwnProperty('join')) {
                obj['join'] = ApiClient.convertToType(data['join'], [Join]);
            }
            if (data.hasOwnProperty('highlight')) {
                obj['highlight'] = Highlight.constructFromObject(data['highlight']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('knn')) {
                obj['knn'] = KnnQuery.constructFromObject(data['knn']);
            }
            if (data.hasOwnProperty('aggs')) {
                obj['aggs'] = ApiClient.convertToType(data['aggs'], {'String': Aggregation});
            }
            if (data.hasOwnProperty('expressions')) {
                obj['expressions'] = ApiClient.convertToType(data['expressions'], {'String': 'String'});
            }
            if (data.hasOwnProperty('max_matches')) {
                obj['max_matches'] = ApiClient.convertToType(data['max_matches'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = ApiClient.convertToType(data['profile'], 'Boolean');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], Object);
            }
            if (data.hasOwnProperty('_source')) {
                obj['_source'] = ApiClient.convertToType(data['_source'], Object);
            }
            if (data.hasOwnProperty('track_scores')) {
                obj['track_scores'] = ApiClient.convertToType(data['track_scores'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['table'] && !(typeof data['table'] === 'string' || data['table'] instanceof String)) {
            throw new Error("Expected the field `table` to be a primitive type in the JSON string but got " + data['table']);
        }
        // validate the optional field `query`
        if (data['query']) { // data not null
          SearchQuery.validateJSON(data['query']);
        }
        if (data['join']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['join'])) {
                throw new Error("Expected the field `join` to be an array in the JSON data but got " + data['join']);
            }
            // validate the optional field `join` (array)
            for (const item of data['join']) {
                Join.validateJSON(item);
            };
        }
        // validate the optional field `highlight`
        if (data['highlight']) { // data not null
          Highlight.validateJSON(data['highlight']);
        }
        // validate the optional field `knn`
        if (data['knn']) { // data not null
          KnnQuery.validateJSON(data['knn']);
        }

        return true;
    }


}

SearchRequest.RequiredProperties = ["table"];

/**
 * The table to perform the search on
 * @member {String} table
 */
SearchRequest.prototype['table'] = undefined;

/**
 * @member {module:model/SearchQuery} query
 */
SearchRequest.prototype['query'] = undefined;

/**
 * Join clause to combine search data from multiple tables
 * @member {Array.<module:model/Join>} join
 */
SearchRequest.prototype['join'] = undefined;

/**
 * @member {module:model/Highlight} highlight
 */
SearchRequest.prototype['highlight'] = undefined;

/**
 * Maximum number of results to return
 * @member {Number} limit
 */
SearchRequest.prototype['limit'] = undefined;

/**
 * @member {module:model/KnnQuery} knn
 */
SearchRequest.prototype['knn'] = undefined;

/**
 * Defines aggregation settings for grouping results
 * @member {Object.<String, module:model/Aggregation>} aggs
 */
SearchRequest.prototype['aggs'] = undefined;

/**
 * Expressions to calculate additional values for the result
 * @member {Object.<String, String>} expressions
 */
SearchRequest.prototype['expressions'] = undefined;

/**
 * Maximum number of matches allowed in the result
 * @member {Number} max_matches
 */
SearchRequest.prototype['max_matches'] = undefined;

/**
 * Starting point for pagination of the result
 * @member {Number} offset
 */
SearchRequest.prototype['offset'] = undefined;

/**
 * Additional search options
 * @member {Object} options
 */
SearchRequest.prototype['options'] = undefined;

/**
 * Enable or disable profiling of the search request
 * @member {Boolean} profile
 */
SearchRequest.prototype['profile'] = undefined;

/**
 * @member {Object} sort
 */
SearchRequest.prototype['sort'] = undefined;

/**
 * @member {Object} _source
 */
SearchRequest.prototype['_source'] = undefined;

/**
 * Enable or disable result weight calculation used for sorting
 * @member {Boolean} track_scores
 */
SearchRequest.prototype['track_scores'] = undefined;






export default SearchRequest;

