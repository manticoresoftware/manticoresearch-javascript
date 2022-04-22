/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.UtilsApi = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.ErrorResponse);
  }
}(this, function(ApiClient, ErrorResponse) {
  'use strict';

  /**
   * Utils service.
   * @module api/UtilsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new UtilsApi. 
   * @alias module:api/UtilsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Perform SQL requests
     * Run a query in SQL format. Expects a query string passed through `body` parameter and optional `raw_response` parameter that defines a format of response. `raw_response` can be set to `False` for Select queries only, e.g., `SELECT * FROM myindex` The query string must stay as it is, no URL encoding is needed. The response object depends on the query executed. In select mode the response has same format as `/search` operation. 
     * @param {String} body A query parameter string. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.rawResponse Optional parameter, defines a format of response. Can be set to `False` for Select only queries and set to `True` or omitted for any type of queries:  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    this.sqlWithHttpInfo = function(body, opts) {
      opts = opts || {};
      var postBody = body;

      if (postBody) {
        if  ('rawResponse' in opts && !opts.rawResponse)
          postBody = 'query=' + encodeURIComponent( String( postBody ) );
        else if ( !('rawResponse' in opts) || opts.rawResponse)
          postBody = 'mode=raw&query=' + encodeURIComponent( String( postBody ) );
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sql");
      }

      var pathParams = {
      };
      var queryParams = {
        'raw_response': opts['rawResponse'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = [Object];
      if ('rawResponse' in opts && !opts.rawResponse) 
        returnType = Object;
      return this.apiClient.callApi(
        '/sql', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      ).then( function(res) {
        if ('rawResponse' in opts && !opts.rawResponse)
          res['data'] = [ res['data'] ];
        return res;
      });
    }

    /**
     * Perform SQL requests
     * Run a query in SQL format. Expects a query string passed through `body` parameter and optional `raw_response` parameter that defines a format of response. `raw_response` can be set to `False` for Select queries only, e.g., `SELECT * FROM myindex` The query string must stay as it is, no URL encoding is needed. The response object depends on the query executed. In select mode the response has same format as `/search` operation. 
     * @param {String} body A query parameter string. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.rawResponse Optional parameter, defines a format of response. Can be set to `False` for Select only queries and set to `True` or omitted for any type of queries:  (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    this.sql = function(body, opts) {
      return this.sqlWithHttpInfo(body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
