/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Aggregation', 'model/AggregationComposite', 'model/AggregationCompositeSourcesInnerValue', 'model/AggregationCompositeSourcesInnerValueTerms', 'model/AggregationSortInnerValue', 'model/AggregationTerms', 'model/BoolFilter', 'model/BulkResponse', 'model/DeleteDocumentRequest', 'model/DeleteResponse', 'model/EqualsFilter', 'model/ErrorResponse', 'model/Facet', 'model/FilterBoolean', 'model/FilterNumber', 'model/FilterString', 'model/GeoDistanceFilter', 'model/GeoDistanceFilterLocationAnchor', 'model/Highlight', 'model/HighlightField', 'model/InFilter', 'model/InsertDocumentRequest', 'model/MatchFilter', 'model/MatchOp', 'model/MatchOpFilter', 'model/MatchPhraseFilter', 'model/NotFilterBoolean', 'model/NotFilterNumber', 'model/NotFilterString', 'model/PercolateRequest', 'model/PercolateRequestQuery', 'model/QueryFilter', 'model/RangeFilter', 'model/ReplaceDocumentRequest', 'model/SearchRequest', 'model/SearchResponse', 'model/SearchResponseHits', 'model/SortMVA', 'model/SortMultiple', 'model/SortOrder', 'model/SourceByRules', 'model/SuccessResponse', 'model/UpdateDocumentRequest', 'model/UpdateResponse', 'api/IndexApi', 'api/SearchApi', 'api/UtilsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Aggregation'), require('./model/AggregationComposite'), require('./model/AggregationCompositeSourcesInnerValue'), require('./model/AggregationCompositeSourcesInnerValueTerms'), require('./model/AggregationSortInnerValue'), require('./model/AggregationTerms'), require('./model/BoolFilter'), require('./model/BulkResponse'), require('./model/DeleteDocumentRequest'), require('./model/DeleteResponse'), require('./model/EqualsFilter'), require('./model/ErrorResponse'), require('./model/Facet'), require('./model/FilterBoolean'), require('./model/FilterNumber'), require('./model/FilterString'), require('./model/GeoDistanceFilter'), require('./model/GeoDistanceFilterLocationAnchor'), require('./model/Highlight'), require('./model/HighlightField'), require('./model/InFilter'), require('./model/InsertDocumentRequest'), require('./model/MatchFilter'), require('./model/MatchOp'), require('./model/MatchOpFilter'), require('./model/MatchPhraseFilter'), require('./model/NotFilterBoolean'), require('./model/NotFilterNumber'), require('./model/NotFilterString'), require('./model/PercolateRequest'), require('./model/PercolateRequestQuery'), require('./model/QueryFilter'), require('./model/RangeFilter'), require('./model/ReplaceDocumentRequest'), require('./model/SearchRequest'), require('./model/SearchResponse'), require('./model/SearchResponseHits'), require('./model/SortMVA'), require('./model/SortMultiple'), require('./model/SortOrder'), require('./model/SourceByRules'), require('./model/SuccessResponse'), require('./model/UpdateDocumentRequest'), require('./model/UpdateResponse'), require('./api/IndexApi'), require('./api/SearchApi'), require('./api/UtilsApi'));
  }
}(function(ApiClient, Aggregation, AggregationComposite, AggregationCompositeSourcesInnerValue, AggregationCompositeSourcesInnerValueTerms, AggregationSortInnerValue, AggregationTerms, BoolFilter, BulkResponse, DeleteDocumentRequest, DeleteResponse, EqualsFilter, ErrorResponse, Facet, FilterBoolean, FilterNumber, FilterString, GeoDistanceFilter, GeoDistanceFilterLocationAnchor, Highlight, HighlightField, InFilter, InsertDocumentRequest, MatchFilter, MatchOp, MatchOpFilter, MatchPhraseFilter, NotFilterBoolean, NotFilterNumber, NotFilterString, PercolateRequest, PercolateRequestQuery, QueryFilter, RangeFilter, ReplaceDocumentRequest, SearchRequest, SearchResponse, SearchResponseHits, SortMVA, SortMultiple, SortOrder, SourceByRules, SuccessResponse, UpdateDocumentRequest, UpdateResponse, IndexApi, SearchApi, UtilsApi) {
  'use strict';

  /**
   * Сlient for Manticore Search. .<br>
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
   * @version 4.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Aggregation model constructor.
     * @property {module:model/Aggregation}
     */
    Aggregation: Aggregation,
    /**
     * The AggregationComposite model constructor.
     * @property {module:model/AggregationComposite}
     */
    AggregationComposite: AggregationComposite,
    /**
     * The AggregationCompositeSourcesInnerValue model constructor.
     * @property {module:model/AggregationCompositeSourcesInnerValue}
     */
    AggregationCompositeSourcesInnerValue: AggregationCompositeSourcesInnerValue,
    /**
     * The AggregationCompositeSourcesInnerValueTerms model constructor.
     * @property {module:model/AggregationCompositeSourcesInnerValueTerms}
     */
    AggregationCompositeSourcesInnerValueTerms: AggregationCompositeSourcesInnerValueTerms,
    /**
     * The AggregationSortInnerValue model constructor.
     * @property {module:model/AggregationSortInnerValue}
     */
    AggregationSortInnerValue: AggregationSortInnerValue,
    /**
     * The AggregationTerms model constructor.
     * @property {module:model/AggregationTerms}
     */
    AggregationTerms: AggregationTerms,
    /**
     * The BoolFilter model constructor.
     * @property {module:model/BoolFilter}
     */
    BoolFilter: BoolFilter,
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
     * The EqualsFilter model constructor.
     * @property {module:model/EqualsFilter}
     */
    EqualsFilter: EqualsFilter,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The Facet model constructor.
     * @property {module:model/Facet}
     */
    Facet: Facet,
    /**
     * The FilterBoolean model constructor.
     * @property {module:model/FilterBoolean}
     */
    FilterBoolean: FilterBoolean,
    /**
     * The FilterNumber model constructor.
     * @property {module:model/FilterNumber}
     */
    FilterNumber: FilterNumber,
    /**
     * The FilterString model constructor.
     * @property {module:model/FilterString}
     */
    FilterString: FilterString,
    /**
     * The GeoDistanceFilter model constructor.
     * @property {module:model/GeoDistanceFilter}
     */
    GeoDistanceFilter: GeoDistanceFilter,
    /**
     * The GeoDistanceFilterLocationAnchor model constructor.
     * @property {module:model/GeoDistanceFilterLocationAnchor}
     */
    GeoDistanceFilterLocationAnchor: GeoDistanceFilterLocationAnchor,
    /**
     * The Highlight model constructor.
     * @property {module:model/Highlight}
     */
    Highlight: Highlight,
    /**
     * The HighlightField model constructor.
     * @property {module:model/HighlightField}
     */
    HighlightField: HighlightField,
    /**
     * The InFilter model constructor.
     * @property {module:model/InFilter}
     */
    InFilter: InFilter,
    /**
     * The InsertDocumentRequest model constructor.
     * @property {module:model/InsertDocumentRequest}
     */
    InsertDocumentRequest: InsertDocumentRequest,
    /**
     * The KnnQueryByDocId model constructor.
     * @property {module:model/KnnQueryByDocId}
     */
    KnnQueryByDocId: KnnQueryByDocId,
    /**
     * The KnnQueryByVector model constructor.
     * @property {module:model/KnnQueryByVector}
     */
    KnnQueryByVector: KnnQueryByVector,
    /**
     * The MatchFilter model constructor.
     * @property {module:model/MatchFilter}
     */
    MatchFilter: MatchFilter,
    /**
     * The MatchOp model constructor.
     * @property {module:model/MatchOp}
     */
    MatchOp: MatchOp,
    /**
     * The MatchOpFilter model constructor.
     * @property {module:model/MatchOpFilter}
     */
    MatchOpFilter: MatchOpFilter,
    /**
     * The MatchPhraseFilter model constructor.
     * @property {module:model/MatchPhraseFilter}
     */
    MatchPhraseFilter: MatchPhraseFilter,
    /**
     * The NotFilterBoolean model constructor.
     * @property {module:model/NotFilterBoolean}
     */
    NotFilterBoolean: NotFilterBoolean,
    /**
     * The NotFilterNumber model constructor.
     * @property {module:model/NotFilterNumber}
     */
    NotFilterNumber: NotFilterNumber,
    /**
     * The NotFilterString model constructor.
     * @property {module:model/NotFilterString}
     */
    NotFilterString: NotFilterString,
    /**
     * The PercolateRequest model constructor.
     * @property {module:model/PercolateRequest}
     */
    PercolateRequest: PercolateRequest,
    /**
     * The PercolateRequestQuery model constructor.
     * @property {module:model/PercolateRequestQuery}
     */
    PercolateRequestQuery: PercolateRequestQuery,
    /**
     * The QueryFilter model constructor.
     * @property {module:model/QueryFilter}
     */
    QueryFilter: QueryFilter,
    /**
     * The RangeFilter model constructor.
     * @property {module:model/RangeFilter}
     */
    RangeFilter: RangeFilter,
    /**
     * The ReplaceDocumentRequest model constructor.
     * @property {module:model/ReplaceDocumentRequest}
     */
    ReplaceDocumentRequest: ReplaceDocumentRequest,
    /**
     * The SearchRequest model constructor.
     * @property {module:model/SearchRequest}
     */
    SearchRequest: SearchRequest,
    /**
     * The SearchRequestKnn model constructor.
     * @property {module:model/SearchRequestKnn}
     */
    SearchRequestKnn: SearchRequestKnn,
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
     * The SortMVA model constructor.
     * @property {module:model/SortMVA}
     */
    SortMVA: SortMVA,
    /**
     * The SortMultiple model constructor.
     * @property {module:model/SortMultiple}
     */
    SortMultiple: SortMultiple,
    /**
     * The SortOrder model constructor.
     * @property {module:model/SortOrder}
     */
    SortOrder: SortOrder,
    /**
     * The SourceByRules model constructor.
     * @property {module:model/SourceByRules}
     */
    SourceByRules: SourceByRules,
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
