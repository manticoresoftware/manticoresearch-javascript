# manticoresearch

Low-level client for Manticore Search.


## Requirements

Node v8.

Minimum Manticore Search version is 2.5.1 with HTTP protocol enabled.

| Manticore Search  | manticoresearch-javascript   |     Node      |
| ----------------- | ---------------------------- | ------------- |
| >= 4.2.1          | 3.0.x                        | >= 10.0       |
| >= 4.0.2          | 2.0.3                        | >= 10.0       |
| >= 2.5.1          | 2.0.2                        | >= 8.0        |


## Installation

```shell
npm install manticoresearch 
```

## Documentation

Full documentation is available in  [docs](https://github.com/manticoresoftware/manticoresearch-javascript/tree/master/docs) folder.

Manticore Search server documentation: https://manual.manticoresearch.com.

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


```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:9308*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Manticoresearch.IndexApi* | [**bulk**](docs/IndexApi.md#bulk) | **POST** /json/bulk | Bulk index operations
*Manticoresearch.IndexApi* | [**callDelete**](docs/IndexApi.md#callDelete) | **POST** /json/delete | Delete a document in an index
*Manticoresearch.IndexApi* | [**insert**](docs/IndexApi.md#insert) | **POST** /json/insert | Create a new document in an index
*Manticoresearch.IndexApi* | [**replace**](docs/IndexApi.md#replace) | **POST** /json/replace | Replace new document in an index
*Manticoresearch.IndexApi* | [**update**](docs/IndexApi.md#update) | **POST** /json/update | Update a document in an index
*Manticoresearch.SearchApi* | [**percolate**](docs/SearchApi.md#percolate) | **POST** /json/pq/{index}/search | Perform reverse search on a percolate index
*Manticoresearch.SearchApi* | [**search**](docs/SearchApi.md#search) | **POST** /json/search | Performs a search
*Manticoresearch.UtilsApi* | [**sql**](docs/UtilsApi.md#sql) | **POST** /sql | Perform SQL requests


## Documentation for Models

 - [Manticoresearch.BulkResponse](docs/BulkResponse.md)
 - [Manticoresearch.DeleteDocumentRequest](docs/DeleteDocumentRequest.md)
 - [Manticoresearch.DeleteResponse](docs/DeleteResponse.md)
 - [Manticoresearch.ErrorResponse](docs/ErrorResponse.md)
 - [Manticoresearch.InsertDocumentRequest](docs/InsertDocumentRequest.md)
 - [Manticoresearch.PercolateRequest](docs/PercolateRequest.md)
 - [Manticoresearch.PercolateRequestQuery](docs/PercolateRequestQuery.md)
 - [Manticoresearch.SearchRequest](docs/SearchRequest.md)
 - [Manticoresearch.SearchResponse](docs/SearchResponse.md)
 - [Manticoresearch.SearchResponseHits](docs/SearchResponseHits.md)
 - [Manticoresearch.SuccessResponse](docs/SuccessResponse.md)
 - [Manticoresearch.UpdateDocumentRequest](docs/UpdateDocumentRequest.md)
 - [Manticoresearch.UpdateResponse](docs/UpdateResponse.md)


## Documentation for Authorization

All endpoints do not require authorization.
