/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BulkResponse', 'model/DeleteDocumentRequest', 'model/DeleteResponse', 'model/ErrorResponse', 'model/InsertDocumentRequest', 'model/SuccessResponse', 'model/UpdateDocumentRequest', 'model/UpdateResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BulkResponse'), require('../model/DeleteDocumentRequest'), require('../model/DeleteResponse'), require('../model/ErrorResponse'), require('../model/InsertDocumentRequest'), require('../model/SuccessResponse'), require('../model/UpdateDocumentRequest'), require('../model/UpdateResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.IndexApi = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.BulkResponse, root.Manticoresearch.DeleteDocumentRequest, root.Manticoresearch.DeleteResponse, root.Manticoresearch.ErrorResponse, root.Manticoresearch.InsertDocumentRequest, root.Manticoresearch.SuccessResponse, root.Manticoresearch.UpdateDocumentRequest, root.Manticoresearch.UpdateResponse);
  }
}(this, function(ApiClient, BulkResponse, DeleteDocumentRequest, DeleteResponse, ErrorResponse, InsertDocumentRequest, SuccessResponse, UpdateDocumentRequest, UpdateResponse) {
  'use strict';

  /**
   * Index service.
   * @module api/IndexApi
   * @version 3.3.1
   */

  /**
   * Constructs a new IndexApi. 
   * @alias module:api/IndexApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Bulk index operations
     * Sends multiple operatons like inserts, updates, replaces or deletes.  For each operation it's object must have same format as in their dedicated method.  The method expects a raw string as the batch in NDJSON.  Each operation object needs to be serialized to   JSON and separated by endline (\\n).      An example of raw input:      ```   {\"insert\": {\"index\": \"movies\", \"doc\": {\"plot\": \"A secret team goes to North Pole\", \"rating\": 9.5, \"language\": [2, 3], \"title\": \"This is an older movie\", \"lon\": 51.99, \"meta\": {\"keywords\":[\"travel\",\"ice\"],\"genre\":[\"adventure\"]}, \"year\": 1950, \"lat\": 60.4, \"advise\": \"PG-13\"}}}   \\n   {\"delete\": {\"index\": \"movies\",\"id\":700}}   ```      Responds with an object telling whenever any errors occured and an array with status for each operation:      ```   {     'items':     [       {         'update':{'_index':'products','_id':1,'result':'updated'}       },       {         'update':{'_index':'products','_id':2,'result':'updated'}       }     ],     'errors':false   }   ```   
     * @param {String} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BulkResponse} and HTTP response
     */
    this.bulkWithHttpInfo = function(body) {
      var postBody = JSON.parse(JSON.stringify(body));


      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bulk");
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
      var contentTypes = ['application/x-ndjson'];
      var accepts = ['application/json'];
      var returnType = BulkResponse;
      return this.apiClient.callApi(
        '/bulk', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      ).then( function(res) {
        return res;
      });
    }

    /**
     * Bulk index operations
     * Sends multiple operatons like inserts, updates, replaces or deletes.  For each operation it's object must have same format as in their dedicated method.  The method expects a raw string as the batch in NDJSON.  Each operation object needs to be serialized to   JSON and separated by endline (\\n).      An example of raw input:      ```   {\"insert\": {\"index\": \"movies\", \"doc\": {\"plot\": \"A secret team goes to North Pole\", \"rating\": 9.5, \"language\": [2, 3], \"title\": \"This is an older movie\", \"lon\": 51.99, \"meta\": {\"keywords\":[\"travel\",\"ice\"],\"genre\":[\"adventure\"]}, \"year\": 1950, \"lat\": 60.4, \"advise\": \"PG-13\"}}}   \\n   {\"delete\": {\"index\": \"movies\",\"id\":700}}   ```      Responds with an object telling whenever any errors occured and an array with status for each operation:      ```   {     'items':     [       {         'update':{'_index':'products','_id':1,'result':'updated'}       },       {         'update':{'_index':'products','_id':2,'result':'updated'}       }     ],     'errors':false   }   ```   
     * @param {String} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BulkResponse}
     */
    this.bulk = function(body) {
      return this.bulkWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a document in an index
     * Delete one or several documents. The method has 2 ways of deleting: either by id, in case only one document is deleted or by using a  match query, in which case multiple documents can be delete . Example of input to delete by id:    ```   {'index':'movies','id':100}   ```  Example of input to delete using a query:    ```   {     'index':'movies',     'query':     {       'bool':       {         'must':         [           {'query_string':'new movie'}         ]       }     }   }   ```  The match query has same syntax as in for searching. Responds with an object telling how many documents got deleted:     ```   {'_index':'products','updated':1}   ``` 
     * @param {module:model/DeleteDocumentRequest} deleteDocumentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteResponse} and HTTP response
     */
    this.callDeleteWithHttpInfo = function(deleteDocumentRequest) {
      var postBody = JSON.parse(JSON.stringify(deleteDocumentRequest));


      // verify the required parameter 'deleteDocumentRequest' is set
      if (deleteDocumentRequest === undefined || deleteDocumentRequest === null) {
        throw new Error("Missing the required parameter 'deleteDocumentRequest' when calling callDelete");
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
      var returnType = DeleteResponse;
      return this.apiClient.callApi(
        '/delete', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      ).then( function(res) {
        return res;
      });
    }

    /**
     * Delete a document in an index
     * Delete one or several documents. The method has 2 ways of deleting: either by id, in case only one document is deleted or by using a  match query, in which case multiple documents can be delete . Example of input to delete by id:    ```   {'index':'movies','id':100}   ```  Example of input to delete using a query:    ```   {     'index':'movies',     'query':     {       'bool':       {         'must':         [           {'query_string':'new movie'}         ]       }     }   }   ```  The match query has same syntax as in for searching. Responds with an object telling how many documents got deleted:     ```   {'_index':'products','updated':1}   ``` 
     * @param {module:model/DeleteDocumentRequest} deleteDocumentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteResponse}
     */
    this.callDelete = function(deleteDocumentRequest) {
      return this.callDeleteWithHttpInfo(deleteDocumentRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new document in an index
     * Insert a document.  Expects an object like:     ```   {     'index':'movies',     'id':701,     'doc':     {       'title':'This is an old movie',       'plot':'A secret team goes to North Pole',       'year':1950,       'rating':9.5,       'lat':60.4,       'lon':51.99,       'advise':'PG-13',       'meta':'{\"keywords\":{\"travel\",\"ice\"},\"genre\":{\"adventure\"}}',       'language':[2,3]     }   }   ```   The document id can also be missing, in which case an autogenerated one will be used:             ```   {     'index':'movies',     'doc':     {       'title':'This is a new movie',       'plot':'A secret team goes to North Pole',       'year':2020,       'rating':9.5,       'lat':60.4,       'lon':51.99,       'advise':'PG-13',       'meta':'{\"keywords\":{\"travel\",\"ice\"},\"genre\":{\"adventure\"}}',       'language':[2,3]     }   }   ```   It responds with an object in format:      ```   {'_index':'products','_id':701,'created':true,'result':'created','status':201}   ``` 
     * @param {module:model/InsertDocumentRequest} insertDocumentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SuccessResponse} and HTTP response
     */
    this.insertWithHttpInfo = function(insertDocumentRequest) {
      var postBody = JSON.parse(JSON.stringify(insertDocumentRequest));


      // verify the required parameter 'insertDocumentRequest' is set
      if (insertDocumentRequest === undefined || insertDocumentRequest === null) {
        throw new Error("Missing the required parameter 'insertDocumentRequest' when calling insert");
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
      var returnType = SuccessResponse;
      return this.apiClient.callApi(
        '/insert', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      ).then( function(res) {
        return res;
      });
    }

    /**
     * Create a new document in an index
     * Insert a document.  Expects an object like:     ```   {     'index':'movies',     'id':701,     'doc':     {       'title':'This is an old movie',       'plot':'A secret team goes to North Pole',       'year':1950,       'rating':9.5,       'lat':60.4,       'lon':51.99,       'advise':'PG-13',       'meta':'{\"keywords\":{\"travel\",\"ice\"},\"genre\":{\"adventure\"}}',       'language':[2,3]     }   }   ```   The document id can also be missing, in which case an autogenerated one will be used:             ```   {     'index':'movies',     'doc':     {       'title':'This is a new movie',       'plot':'A secret team goes to North Pole',       'year':2020,       'rating':9.5,       'lat':60.4,       'lon':51.99,       'advise':'PG-13',       'meta':'{\"keywords\":{\"travel\",\"ice\"},\"genre\":{\"adventure\"}}',       'language':[2,3]     }   }   ```   It responds with an object in format:      ```   {'_index':'products','_id':701,'created':true,'result':'created','status':201}   ``` 
     * @param {module:model/InsertDocumentRequest} insertDocumentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SuccessResponse}
     */
    this.insert = function(insertDocumentRequest) {
      return this.insertWithHttpInfo(insertDocumentRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace new document in an index
     * Replace an existing document. Input has same format as `insert` operation. <br/> Responds with an object in format: <br/>    ```   {'_index':'products','_id':1,'created':false,'result':'updated','status':200}   ``` 
     * @param {module:model/InsertDocumentRequest} insertDocumentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SuccessResponse} and HTTP response
     */
    this.replaceWithHttpInfo = function(insertDocumentRequest) {
      var postBody = JSON.parse(JSON.stringify(insertDocumentRequest));


      // verify the required parameter 'insertDocumentRequest' is set
      if (insertDocumentRequest === undefined || insertDocumentRequest === null) {
        throw new Error("Missing the required parameter 'insertDocumentRequest' when calling replace");
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
      var returnType = SuccessResponse;
      return this.apiClient.callApi(
        '/replace', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      ).then( function(res) {
        return res;
      });
    }

    /**
     * Replace new document in an index
     * Replace an existing document. Input has same format as `insert` operation. <br/> Responds with an object in format: <br/>    ```   {'_index':'products','_id':1,'created':false,'result':'updated','status':200}   ``` 
     * @param {module:model/InsertDocumentRequest} insertDocumentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SuccessResponse}
     */
    this.replace = function(insertDocumentRequest) {
      return this.replaceWithHttpInfo(insertDocumentRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a document in an index
     * Update one or several documents. The update can be made by passing the id or by using a match query in case multiple documents can be updated.  For example update a document using document id:    ```   {'index':'movies','doc':{'rating':9.49},'id':100}   ```  And update by using a match query:    ```   {     'index':'movies',     'doc':{'rating':9.49},     'query':     {       'bool':       {         'must':         [           {'query_string':'new movie'}         ]       }     }   }   ```   The match query has same syntax as for searching. Responds with an object that tells how many documents where updated in format:     ```   {'_index':'products','updated':1}   ``` 
     * @param {module:model/UpdateDocumentRequest} updateDocumentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateResponse} and HTTP response
     */
    this.updateWithHttpInfo = function(updateDocumentRequest) {
      var postBody = JSON.parse(JSON.stringify(updateDocumentRequest));


      // verify the required parameter 'updateDocumentRequest' is set
      if (updateDocumentRequest === undefined || updateDocumentRequest === null) {
        throw new Error("Missing the required parameter 'updateDocumentRequest' when calling update");
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
      var returnType = UpdateResponse;
      return this.apiClient.callApi(
        '/update', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      ).then( function(res) {
        return res;
      });
    }

    /**
     * Update a document in an index
     * Update one or several documents. The update can be made by passing the id or by using a match query in case multiple documents can be updated.  For example update a document using document id:    ```   {'index':'movies','doc':{'rating':9.49},'id':100}   ```  And update by using a match query:    ```   {     'index':'movies',     'doc':{'rating':9.49},     'query':     {       'bool':       {         'must':         [           {'query_string':'new movie'}         ]       }     }   }   ```   The match query has same syntax as for searching. Responds with an object that tells how many documents where updated in format:     ```   {'_index':'products','updated':1}   ``` 
     * @param {module:model/UpdateDocumentRequest} updateDocumentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateResponse}
     */
    this.update = function(updateDocumentRequest) {
      return this.updateWithHttpInfo(updateDocumentRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
