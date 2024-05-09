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
   * @version 4.0.0
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
     * Performs a percolate search.  This method must be used only on percolate indexes.  Expects two parameters: the index name and an object with array of documents to be tested. An example of the documents object:    ```   {     \"query\":     {       \"percolate\":       {         \"document\":         {           \"content\":\"sample content\"         }       }     }   }   ```  Responds with an object with matched stored queries:     ```   {     'timed_out':false,     'hits':     {       'total':2,       'max_score':1,       'hits':       [         {           '_index':'idx_pq_1',           '_type':'doc',           '_id':'2',           '_score':'1',           '_source':           {             'query':             {               'match':{'title':'some'}             }           }         },         {           '_index':'idx_pq_1',           '_type':'doc',           '_id':'5',           '_score':'1',           '_source':           {             'query':             {               'ql':'some | none'             }           }         }       ]     }   }   ``` 
     * @param {String} index Name of the percolate index
     * @param {module:model/PercolateRequest} percolateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchResponse} and HTTP response
     */
    this.percolateWithHtstringtpInfo = function(index, percolateRequest) {
      var postBody = JSON.parse(JSON.stringify(percolateRequest));


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
        '/pq/{index}/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      ).then( function(res) {
        return res;
      });
    }

    /**
     * Perform reverse search on a percolate index
     * Performs a percolate search.  This method must be used only on percolate indexes.  Expects two parameters: the index name and an object with array of documents to be tested. An example of the documents object:    ```   {     \"query\":     {       \"percolate\":       {         \"document\":         {           \"content\":\"sample content\"         }       }     }   }   ```  Responds with an object with matched stored queries:     ```   {     'timed_out':false,     'hits':     {       'total':2,       'max_score':1,       'hits':       [         {           '_index':'idx_pq_1',           '_type':'doc',           '_id':'2',           '_score':'1',           '_source':           {             'query':             {               'match':{'title':'some'}             }           }         },         {           '_index':'idx_pq_1',           '_type':'doc',           '_id':'5',           '_score':'1',           '_source':           {             'query':             {               'ql':'some | none'             }           }         }       ]     }   }   ``` 
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
     * Performs a search on an index
     *  The method expects an object with the following mandatory properties: * the name of the index to search * the match query object For details, see the documentation on [**SearchRequest**](SearchRequest.md) The method returns an object with the following properties: - took: the time taken to execute the search query. - timed_out: a boolean indicating whether the query timed out. - hits: an object with the following properties:    - total: the total number of hits found.    - hits: an array of hit objects, where each hit object represents a matched document. Each hit object has the following properties:      - _id: the ID of the matched document.      - _score: the score of the matched document.      - _source: the source data of the matched document.  In addition, if profiling is enabled, the response will include an additional array with profiling information attached. Here is an example search response:    ```   {     'took':10,     'timed_out':false,     'hits':     {       'total':2,       'hits':       [         {'_id':'1','_score':1,'_source':{'gid':11}},         {'_id':'2','_score':1,'_source':{'gid':12}}       ]     }   }   ```  For more information about the match query syntax and additional parameters that can be added to request and response, please see the documentation [here](https://manual.manticoresearch.com/Searching/Full_text_matching/Basic_usage#HTTP-JSON). 
     * @param {module:model/SearchRequest} searchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchResponse} and HTTP response
     */
    this.searchWithHttpInfo = function(searchRequest) {
      var postBody = ApiClient.JSONbig.parse(ApiClient.JSONbig.stringify(searchRequest));


      // verify the required parameter 'searchRequest' is set
      if (searchRequest === undefined || searchRequest === null) {
        throw new Error("Missing the required parameter 'searchRequest' when calling search");
      }
	  
      if (postBody['source']) {
		postBody['_source'] = postBody['source']; 
		delete postBody['source'];
	  }

	  let restructObj = function(obj, objType) {
		if (!obj['attr'] && !obj['name'] && !obj['query_fields'] && !obj['value'] && !obj['values']
			&& !obj['field'] && !obj['location_anchor'] && !obj['must'] && !obj['must_not'] && !obj['should']
		) {
			return obj;
		}
		
		let keyPropVal;
		let newObj = {};
		if (objType == 'fulltext_filter') {
			if (obj['query_fields']) {
				keyPropVal = obj['query_fields'];
				if (obj['query_phrase']) {
					newObj[keyPropVal] = obj['query_phrase']; 
					newObj = {'match_phrase': newObj};
				} else { 
					newObj[keyPropVal] = obj['operator'] ? {'query': obj['query_string'], 'operator':obj['operator']} : obj['query_string'];
					newObj = {'match': newObj};
				}
			} else {
				newObj = obj;
			}
		} else if (objType == 'attr_filter') {
			if (obj['field']) {
				keyPropVal = obj['field'];
				if (obj['value']) {
					newObj[keyPropVal] = obj['value']; 
					newObj = {'equals': newObj};
				} else if (obj['values']) {
					newObj[keyPropVal] = obj['values']; 
					newObj = {'in': newObj};
				} else  {
					newObj[keyPropVal] = obj;
					delete newObj[keyPropVal]['field'];
					newObj = {'range': newObj};
				} 
			} else {
				if (!obj['must'] && !obj['must_not'] && !obj['should']) {
					newObj = {'geo_distance': obj};
				} else {
					['must', 'must_not', 'should'].forEach(propName => {
						if (obj[propName]) {
							newObj[propName] = obj[propName].map(filter => {
								if (filter['query_fields'] || filter['query_string']) 
									return restructObj(filter, 'fulltext_filter');
								else 
									return restructObj(filter, 'attr_filter');
							});
						}
					});
					newObj = {'bool': newObj};
				}
			}
		} else {
			let keyPropName = obj['attr'] ? 'attr' : 'name';
			keyPropVal = obj[keyPropName];
			delete obj[keyPropName];
			newObj[keyPropVal] = obj;
		}
		
		return newObj;
	  };

	  let restructNestedObj = function(nestedObj, propNames) {
	    let newProp = {};
	  	nestedObj[nestedObj.length-1].forEach( propVal => {
			let oldProp = restructObj(propVal, propNames[propNames.length-1]);
			newProp = {...newProp, ...oldProp};
		});
		nestedObj[nestedObj.length-1] = newProp;
	  	
		for (let i=propNames.length-1; i >=0; i--) {
			nestedObj[i][propNames[i]] = nestedObj[i+1];
		}
	  };   

	  if (postBody['sort']) {
		postBody['sort'] = postBody['sort'].map(
			sort => restructObj(sort, 'sort')
		);
	  }

	  if (postBody['fulltext_filter'] || postBody['attr_filter']) {
		postBody['query'] = {};
		let filterObj;
		['fulltext_filter', 'attr_filter'].forEach(propName => {
			if (postBody[propName]) {
				filterObj = restructObj(postBody[propName], propName);
				postBody['query'] = {...postBody['query'], ...filterObj};
				delete postBody[propName];
			}
		});
	  }
	  
	  ['highlight.fields'].forEach(propSign => {
		const propNames = propSign.split('.');
		let nestedObj = [postBody];
		for (let i=0; i < propNames.length; i++) {
			if (!nestedObj[i][propNames[i]]) {
				return;
			}
			nestedObj.push(nestedObj[i][propNames[i]]);
		}
		
		restructNestedObj(nestedObj, propNames);
	  });


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
        '/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      ).then( function(res) {
        return res;
      });
    }

    /**
     * Performs a search on an index
     *  The method expects an object with the following mandatory properties: * the name of the index to search * the match query object For details, see the documentation on [**SearchRequest**](SearchRequest.md) The method returns an object with the following properties: - took: the time taken to execute the search query. - timed_out: a boolean indicating whether the query timed out. - hits: an object with the following properties:    - total: the total number of hits found.    - hits: an array of hit objects, where each hit object represents a matched document. Each hit object has the following properties:      - _id: the ID of the matched document.      - _score: the score of the matched document.      - _source: the source data of the matched document.  In addition, if profiling is enabled, the response will include an additional array with profiling information attached. Here is an example search response:    ```   {     'took':10,     'timed_out':false,     'hits':     {       'total':2,       'hits':       [         {'_id':'1','_score':1,'_source':{'gid':11}},         {'_id':'2','_score':1,'_source':{'gid':12}}       ]     }   }   ```  For more information about the match query syntax and additional parameters that can be added to request and response, please see the documentation [here](https://manual.manticoresearch.com/Searching/Full_text_matching/Basic_usage#HTTP-JSON). 
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
