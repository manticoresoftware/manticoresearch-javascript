# manticoresearch

Experimental low-level client for Manticore Search.


## Installation

```shell
npm install manticoresearch 
```
## Requirements

Node v8.

Minimum Manticore Search version is 2.5.1 with HTTP protocol enabled.

## Documentation

Full documentation is available in  [docs](https://github.com/manticoresoftware/manticoresearch-python/tree/master/docs) folder.

Manticore Search server documentation: https://manual.manticoresearch.com.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Manticoresearch = require('manticoresearch');


var api = new Manticoresearch.SearchApi()
var body = {"index":"test","query":{"match":{"content":"sample"}}};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.search(body, callback);

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
 - [Manticoresearch.SearchRequest](docs/SearchRequest.md)
 - [Manticoresearch.SearchResponse](docs/SearchResponse.md)
 - [Manticoresearch.SearchResponseHits](docs/SearchResponseHits.md)
 - [Manticoresearch.SuccessResponse](docs/SuccessResponse.md)
 - [Manticoresearch.UpdateDocumentRequest](docs/UpdateDocumentRequest.md)
 - [Manticoresearch.UpdateResponse](docs/UpdateResponse.md)


## Documentation for Authorization

All endpoints do not require authorization.
