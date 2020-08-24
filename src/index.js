/**
 * Manticore Search Client
 * Experimental low-level client for Manticore Search. 
 * Contact: info@manticoresearch.com
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BulkResponse', 'model/DeleteDocumentRequest', 'model/DeleteResponse', 'model/ErrorResponse', 'model/InsertDocumentRequest', 'model/PercolateRequest', 'model/SearchRequest', 'model/SearchResponse', 'model/SearchResponseHits', 'model/SuccessResponse', 'model/UpdateDocumentRequest', 'model/UpdateResponse', 'api/IndexApi', 'api/SearchApi', 'api/UtilsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BulkResponse'), require('./model/DeleteDocumentRequest'), require('./model/DeleteResponse'), require('./model/ErrorResponse'), require('./model/InsertDocumentRequest'), require('./model/PercolateRequest'), require('./model/SearchRequest'), require('./model/SearchResponse'), require('./model/SearchResponseHits'), require('./model/SuccessResponse'), require('./model/UpdateDocumentRequest'), require('./model/UpdateResponse'), require('./api/IndexApi'), require('./api/SearchApi'), require('./api/UtilsApi'));
  }
}(function(ApiClient, BulkResponse, DeleteDocumentRequest, DeleteResponse, ErrorResponse, InsertDocumentRequest, PercolateRequest, SearchRequest, SearchResponse, SearchResponseHits, SuccessResponse, UpdateDocumentRequest, UpdateResponse, IndexApi, SearchApi, UtilsApi) {
  'use strict';

  /**
   * Experimental_low_level_client_for_Manticore_Search_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Manticoresearch = require('index'); // See note below*.
   * var xxxSvc = new Manticoresearch.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Manticoresearch.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Manticoresearch.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Manticoresearch.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BulkResponse model constructor.
     * @property {module:model/BulkResponse}
     */
    BulkResponse: BulkResponse,
    /**
     * The DeleteDocumentRequest model constructor.
     * @property {module:model/DeleteDocumentRequest}
     */
    DeleteDocumentRequest: DeleteDocumentRequest,
    /**
     * The DeleteResponse model constructor.
     * @property {module:model/DeleteResponse}
     */
    DeleteResponse: DeleteResponse,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The InsertDocumentRequest model constructor.
     * @property {module:model/InsertDocumentRequest}
     */
    InsertDocumentRequest: InsertDocumentRequest,
    /**
     * The PercolateRequest model constructor.
     * @property {module:model/PercolateRequest}
     */
    PercolateRequest: PercolateRequest,
    /**
     * The SearchRequest model constructor.
     * @property {module:model/SearchRequest}
     */
    SearchRequest: SearchRequest,
    /**
     * The SearchResponse model constructor.
     * @property {module:model/SearchResponse}
     */
    SearchResponse: SearchResponse,
    /**
     * The SearchResponseHits model constructor.
     * @property {module:model/SearchResponseHits}
     */
    SearchResponseHits: SearchResponseHits,
    /**
     * The SuccessResponse model constructor.
     * @property {module:model/SuccessResponse}
     */
    SuccessResponse: SuccessResponse,
    /**
     * The UpdateDocumentRequest model constructor.
     * @property {module:model/UpdateDocumentRequest}
     */
    UpdateDocumentRequest: UpdateDocumentRequest,
    /**
     * The UpdateResponse model constructor.
     * @property {module:model/UpdateResponse}
     */
    UpdateResponse: UpdateResponse,
    /**
     * The IndexApi service constructor.
     * @property {module:api/IndexApi}
     */
    IndexApi: IndexApi,
    /**
     * The SearchApi service constructor.
     * @property {module:api/SearchApi}
     */
    SearchApi: SearchApi,
    /**
     * The UtilsApi service constructor.
     * @property {module:api/UtilsApi}
     */
    UtilsApi: UtilsApi
  };

  return exports;
}));
