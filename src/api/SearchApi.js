/**
 * Manticore Search Client
 * Experimental low-level client for Manticore Search. 
 * Contact: info@manticoresearch.com
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse', 'model/PercolateRequest', 'model/SearchRequest', 'model/SearchResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/PercolateRequest'), require('../model/SearchRequest'), require('../model/SearchResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.SearchApi = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.ErrorResponse, root.Manticoresearch.PercolateRequest, root.Manticoresearch.SearchRequest, root.Manticoresearch.SearchResponse);
  }
}(this, function(ApiClient, ErrorResponse, PercolateRequest, SearchRequest, SearchResponse) {
  'use strict';

  /**
   * Search service.
   * @module api/SearchApi
   * @version 1.0.2
   */

  /**
   * Constructs a new SearchApi. 
   * @alias module:api/SearchApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the percolate operation.
     * @callback module:api/SearchApi~percolateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Perform reverse search on a percolate index
     * Performs a percolate search.  This method must be used only on percolate indexes.  Expects two paramenters: the index name and an object with array of documents to be tested. An example of the documents object:    ```   {\"query\":{\"percolate\":{\"document\":{\"content\":\"sample content\"}}}}   ```  Responds with an object with matched stored queries:     ```   {'timed_out':false,'hits':{'total':2,'max_score':1,'hits':[{'_index':'idx_pq_1','_type':'doc','_id':'2','_score':'1','_source':{'query':{'match':{'title':'some'},}}},{'_index':'idx_pq_1','_type':'doc','_id':'5','_score':'1','_source':{'query':{'ql':'some | none'}}}]}}   ``` 
     * @param {String} index Name of the percolate index
     * @param {module:model/PercolateRequest} percolateRequest 
     * @param {module:api/SearchApi~percolateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchResponse}
     */
    this.percolate = function(index, percolateRequest, callback) {
      var postBody = percolateRequest;
      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling percolate");
      }
      // verify the required parameter 'percolateRequest' is set
      if (percolateRequest === undefined || percolateRequest === null) {
        throw new Error("Missing the required parameter 'percolateRequest' when calling percolate");
      }

      var pathParams = {
        'index': index
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SearchResponse;
      return this.apiClient.callApi(
        '/json/pq/{index}/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the search operation.
     * @callback module:api/SearchApi~searchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Performs a search
     *  Expects an object with mandatory properties: * the index name * the match query object Example :    ```   {'index':'movies','query':{'bool':{'must':[{'query_string':' movie'}]}},'script_fields':{'myexpr':{'script':{'inline':'IF(rating>8,1,0)'}}},'sort':[{'myexpr':'desc'},{'_score':'desc'}],'profile':true}   ```  It responds with an object with: - time of execution - if the query timed out - an array with hits (matched documents) - additional, if profiling is enabled, an array with profiling information is attached     ```   {'took':10,'timed_out':false,'hits':{'total':2,'hits':[{'_id':'1','_score':1,'_source':{'gid':11}},{'_id':'2','_score':1,'_source':{'gid':12}}]}}   ```  For more information about the match query syntax, additional paramaters that can be set to the input and response, please check: https://docs.manticoresearch.com/latest/html/http_reference/json_search.html. 
     * @param {module:model/SearchRequest} searchRequest 
     * @param {module:api/SearchApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchResponse}
     */
    this.search = function(searchRequest, callback) {
      var postBody = searchRequest;
      // verify the required parameter 'searchRequest' is set
      if (searchRequest === undefined || searchRequest === null) {
        throw new Error("Missing the required parameter 'searchRequest' when calling search");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SearchResponse;
      return this.apiClient.callApi(
        '/json/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
