/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
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
   * @version 2.0.2
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
     * Perform reverse search on a percolate index
     * Performs a percolate search.  This method must be used only on percolate indexes.  Expects two parameters: the index name and an object with array of documents to be tested. An example of the documents object:    ```   {\"query\":{\"percolate\":{\"document\":{\"content\":\"sample content\"}}}}   ```  Responds with an object with matched stored queries:     ```   {'timed_out':false,'hits':{'total':2,'max_score':1,'hits':[{'_index':'idx_pq_1','_type':'doc','_id':'2','_score':'1','_source':{'query':{'match':{'title':'some'},}}},{'_index':'idx_pq_1','_type':'doc','_id':'5','_score':'1','_source':{'query':{'ql':'some | none'}}}]}}   ``` 
     * @param {String} index Name of the percolate index
     * @param {module:model/PercolateRequest} percolateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchResponse} and HTTP response
     */
    this.percolateWithHttpInfo = function(index, percolateRequest) {
      var postBody = percolateRequest;

      var isSqlFunc = false;

      if (postBody && isSqlFunc) {
        if  ('rawResponse' in opts && !opts.rawResponse)
          postBody = 'query=' + encodeURIComponent( String( postBody ) );
        else if ( !('rawResponse' in opts) || opts.rawResponse)
          postBody = 'mode=raw&query=' + String( postBody );
      }

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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Perform reverse search on a percolate index
     * Performs a percolate search.  This method must be used only on percolate indexes.  Expects two parameters: the index name and an object with array of documents to be tested. An example of the documents object:    ```   {\"query\":{\"percolate\":{\"document\":{\"content\":\"sample content\"}}}}   ```  Responds with an object with matched stored queries:     ```   {'timed_out':false,'hits':{'total':2,'max_score':1,'hits':[{'_index':'idx_pq_1','_type':'doc','_id':'2','_score':'1','_source':{'query':{'match':{'title':'some'},}}},{'_index':'idx_pq_1','_type':'doc','_id':'5','_score':'1','_source':{'query':{'ql':'some | none'}}}]}}   ``` 
     * @param {String} index Name of the percolate index
     * @param {module:model/PercolateRequest} percolateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchResponse}
     */
    this.percolate = function(index, percolateRequest) {
      return this.percolateWithHttpInfo(index, percolateRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Performs a search
     *  Expects an object with mandatory properties: * the index name * the match query object Example :    ```   {'index':'movies','query':{'bool':{'must':[{'query_string':' movie'}]}},'script_fields':{'myexpr':{'script':{'inline':'IF(rating>8,1,0)'}}},'sort':[{'myexpr':'desc'},{'_score':'desc'}],'profile':true}   ```  It responds with an object with: - time of execution - if the query timed out - an array with hits (matched documents) - additional, if profiling is enabled, an array with profiling information is attached     ```   {'took':10,'timed_out':false,'hits':{'total':2,'hits':[{'_id':'1','_score':1,'_source':{'gid':11}},{'_id':'2','_score':1,'_source':{'gid':12}}]}}   ```  For more information about the match query syntax, additional paramaters that can be set to the input and response, please check: https://docs.manticoresearch.com/latest/html/http_reference/json_search.html. 
     * @param {module:model/SearchRequest} searchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchResponse} and HTTP response
     */
    this.searchWithHttpInfo = function(searchRequest) {
      var postBody = searchRequest;

      var isSqlFunc = false;

      if (postBody && isSqlFunc) {
        if  ('rawResponse' in opts && !opts.rawResponse)
          postBody = 'query=' + encodeURIComponent( String( postBody ) );
        else if ( !('rawResponse' in opts) || opts.rawResponse)
          postBody = 'mode=raw&query=' + String( postBody );
      }

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
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Performs a search
     *  Expects an object with mandatory properties: * the index name * the match query object Example :    ```   {'index':'movies','query':{'bool':{'must':[{'query_string':' movie'}]}},'script_fields':{'myexpr':{'script':{'inline':'IF(rating>8,1,0)'}}},'sort':[{'myexpr':'desc'},{'_score':'desc'}],'profile':true}   ```  It responds with an object with: - time of execution - if the query timed out - an array with hits (matched documents) - additional, if profiling is enabled, an array with profiling information is attached     ```   {'took':10,'timed_out':false,'hits':{'total':2,'hits':[{'_id':'1','_score':1,'_source':{'gid':11}},{'_id':'2','_score':1,'_source':{'gid':12}}]}}   ```  For more information about the match query syntax, additional paramaters that can be set to the input and response, please check: https://docs.manticoresearch.com/latest/html/http_reference/json_search.html. 
     * @param {module:model/SearchRequest} searchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchResponse}
     */
    this.search = function(searchRequest) {
      return this.searchWithHttpInfo(searchRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
