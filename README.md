# Manticore Javascript client

Сlient for Manticore Search.

❗ WARNING: this is a development version of the client. The latest release's readme is https://github.com/manticoresoftware/manticoresearch-javascript/tree/4.0.0

## Requirements

Minimum Manticore Search version is 2.5.1 with HTTP protocol enabled.

| Manticore Search  | manticoresearch-javascript   |     Node      |
| ----------------- | ---------------------------- | ------------- |
| dev               | manticoresearch-dev          | >= 10.0       |
| >= 6.2.0          | >= 3.3.1                     | >= 10.0       |
| >= 4.2.1          | >= 3.0.x                     | >= 10.0       |
| >= 4.0.2          | >= 2.0.3                     | >= 10.0       |
| >= 2.5.1          | >= 2.0.2                     | >= 8.0        |


## Installation

```shell
npm install manticoresearch-dev 
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Javascript code:


```javascript
var Manticoresearch = require('manticoresearch');
var client = new Manticoresearch.ApiClient();
client.basePath="http://localhost:9308";
/*
If a custom http agent is needed, e.g., to enable keep-alive connections, the 'requestAgent' option can be set to override 'superagent' agent instance used by default:
client.requestAgent = new http.Agent({
  keepAlive: true,
  maxSockets: 1,
  keepAliveMsecs: 1000
});
*/

var api = new Manticoresearch.IndexApi(client)
var body = ["'{\"insert\": {\"index\": \"test\", \"id\": 1, \"doc\": {\"title\": \"Title 1\"}}},\\n{\"insert\": {\"index\": \"test\", \"id\": 2, \"doc\": {\"title\": \"Title 2\"}}}'"]; // {String} 
api.bulk(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

var searchApi = new Manticoresearch.SearchApi(client);

// Create SearchRequest
var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.index = "test";
searchRequest.fulltext_filter = new Manticoresearch.QueryFilter('Star Trek 2');

// Perform a search
async function(){
    var res = await searchApi.search(searchRequest);
    console.log(JSON.stringify(res, null, 4));
}


```

## Documentation

Full documentation on the API Endpoints and Models used is available in  [docs](https://github.com/manticoresoftware/manticoresearch-javascript/tree/4.0.0/docs) folder as listed below.

Manticore Search server documentation: https://manual.manticoresearch.com.

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:9308*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Manticoresearch.IndexApi* | [**bulk**](docs/IndexApi.md#bulk) | **POST** /bulk | Bulk index operations
*Manticoresearch.IndexApi* | [**callDelete**](docs/IndexApi.md#callDelete) | **POST** /delete | Delete a document in an index
*Manticoresearch.IndexApi* | [**insert**](docs/IndexApi.md#insert) | **POST** /insert | Create a new document in an index
*Manticoresearch.IndexApi* | [**replace**](docs/IndexApi.md#replace) | **POST** /replace | Replace new document in an index
*Manticoresearch.IndexApi* | [**update**](docs/IndexApi.md#update) | **POST** /update | Update a document in an index
*Manticoresearch.IndexApi* | [**update_0**](docs/IndexApi.md#update_0) | **POST** /{index}/_update/{id} | Partially replaces a document in an index
*Manticoresearch.SearchApi* | [**percolate**](docs/SearchApi.md#percolate) | **POST** /pq/{index}/search | Perform reverse search on a percolate index
*Manticoresearch.SearchApi* | [**search**](docs/SearchApi.md#search) | **POST** /search | Performs a search on an index
*Manticoresearch.UtilsApi* | [**sql**](docs/UtilsApi.md#sql) | **POST** /sql | Perform SQL requests


## Documentation for Models

 - [Manticoresearch.Aggregation](docs/Aggregation.md)
 - [Manticoresearch.AggregationSortInnerValue](docs/AggregationSortInnerValue.md)
 - [Manticoresearch.AggregationTerms](docs/AggregationTerms.md)
 - [Manticoresearch.BoolFilter](docs/BoolFilter.md)
 - [Manticoresearch.BulkResponse](docs/BulkResponse.md)
 - [Manticoresearch.DeleteDocumentRequest](docs/DeleteDocumentRequest.md)
 - [Manticoresearch.DeleteResponse](docs/DeleteResponse.md)
 - [Manticoresearch.EqualsFilter](docs/EqualsFilter.md)
 - [Manticoresearch.ErrorResponse](docs/ErrorResponse.md)
 - [Manticoresearch.Facet](docs/Facet.md)
 - [Manticoresearch.FilterBoolean](docs/FilterBoolean.md)
 - [Manticoresearch.FilterNumber](docs/FilterNumber.md)
 - [Manticoresearch.FilterString](docs/FilterString.md)
 - [Manticoresearch.GeoDistanceFilter](docs/GeoDistanceFilter.md)
 - [Manticoresearch.GeoDistanceFilterLocationAnchor](docs/GeoDistanceFilterLocationAnchor.md)
 - [Manticoresearch.Highlight](docs/Highlight.md)
 - [Manticoresearch.HighlightField](docs/HighlightField.md)
 - [Manticoresearch.InFilter](docs/InFilter.md)
 - [Manticoresearch.InsertDocumentRequest](docs/InsertDocumentRequest.md)
 - [Manticoresearch.KnnQueryByDocId](docs/KnnQueryByDocId.md)
 - [Manticoresearch.KnnQueryByVector](docs/KnnQueryByVector.md)
 - [Manticoresearch.MatchFilter](docs/MatchFilter.md)
 - [Manticoresearch.MatchOp](docs/MatchOp.md)
 - [Manticoresearch.MatchOpFilter](docs/MatchOpFilter.md)
 - [Manticoresearch.MatchPhraseFilter](docs/MatchPhraseFilter.md)
 - [Manticoresearch.NotFilterBoolean](docs/NotFilterBoolean.md)
 - [Manticoresearch.NotFilterNumber](docs/NotFilterNumber.md)
 - [Manticoresearch.NotFilterString](docs/NotFilterString.md)
 - [Manticoresearch.PercolateRequest](docs/PercolateRequest.md)
 - [Manticoresearch.PercolateRequestQuery](docs/PercolateRequestQuery.md)
 - [Manticoresearch.QueryFilter](docs/QueryFilter.md)
 - [Manticoresearch.RangeFilter](docs/RangeFilter.md)
 - [Manticoresearch.RangeFilterLte](docs/RangeFilterLte.md)
 - [Manticoresearch.ReplaceDocumentRequest](docs/ReplaceDocumentRequest.md)
 - [Manticoresearch.SearchRequest](docs/SearchRequest.md)
 - [Manticoresearch.SearchRequestKnn](docs/SearchRequestKnn.md)
 - [Manticoresearch.SearchResponse](docs/SearchResponse.md)
 - [Manticoresearch.SearchResponseHits](docs/SearchResponseHits.md)
 - [Manticoresearch.SortMVA](docs/SortMVA.md)
 - [Manticoresearch.SortMultiple](docs/SortMultiple.md)
 - [Manticoresearch.SortOrder](docs/SortOrder.md)
 - [Manticoresearch.SourceByRules](docs/SourceByRules.md)
 - [Manticoresearch.SuccessResponse](docs/SuccessResponse.md)
 - [Manticoresearch.UpdateDocumentRequest](docs/UpdateDocumentRequest.md)
 - [Manticoresearch.UpdateResponse](docs/UpdateResponse.md)


## Documentation for Authorization

All endpoints do not require authorization.
