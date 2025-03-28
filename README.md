# Manticore Javascript client

Сlient for Manticore Search.


❗ WARNING: this is a development version of the client. The latest release's readme is https://github.com/manticoresoftware/manticoresearch-javascript/tree/7.0.0

## Compatibility Table

Minimum Manticore Search version is 2.5.1 with HTTP protocol enabled.

| **manticoresearch-javascript*  | **Manticore Search**                | **Node**            | **Compatibility**       |
| ------------------------------ | ----------------------------------- | ------------------- | ------------------------|
| `manticoresearch-dev`          | `dev` (latest development version)  | Node 18 or newer    | ✅ Fully Compatible     |
| 8.0.0 or newer                 | 9.2.14 or newer                     | Node 18 or newer    | ✅ Fully Compatible     |
| 6.0.0 to 8.0.0                 | 9.2.14 or newer                     | Node 18 or newer    | ⚠️ Partially Compatible |
| 6.0.0 to 8.0.0                 | 7.0.0 to 9.2.14                     | Node 18 or newer    | ✅ Fully Compatible     |
| 6.0.0 to 8.0.0                 | 6.2.1 to 7.0.0                      | Node 18 or newer    | ⚠️ Partially Compatible |
| 3.3.1 to 6.0.0                 | 7.0.0 or newer                      | Node 10 or newer    | ⚠️ Partially Compatible |
| 3.3.1 to 6.0.0                 | 6.2.1 to 7.0.0                      | Node 10 or newer    | ✅ Fully Compatible     |
| 3.0.0 to 3.3.1                 | 6.2.0 or newer                      | Node 10 or newer    | ⚠️ Partially Compatible |
| 3.0.0 to 3.3.1                 | 4.2.1 to 6.2.0                      | Node 10 or newer    | ✅ Fully Compatible     |
| 2.0.3 to 3.0.0                 | 4.0.2 to 4.2.1                      | Node 10 or newer    | ✅ Fully Compatible     |
| 2.0.2 to 2.0.3                 | 4.0.2 to 4.2.1                      | Node  8 or newer    | ⚠️ Partially Compatible |
| 2.0.2 to 2.0.3                 | 2.5.1 to 4.0.2                      | Node  8 or newer    | ✅ Fully Compatible     |

## Installation

```shell
npm install manticoresearch
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Manticoresearch = require('manticoresearch');


# Create instances of API classes
var client= new Manticoresearch.ApiClient();
client.basePath="http://127.0.0.1:9308";
indexApi = new Manticoresearch.IndexApi(client);
searchApi = new Manticoresearch.SearchApi(client);

# Perform insert and search operations
await indexApi.insert({"index": "products", "doc" : {"title" : "Crossbody Bag with Tassel", "price" : 19.85}});
await indexApi.insert({"index": "products", "doc" : {"title" : "microfiber sheet set", "price" : 19.99}});

var search_query = new Manticoresearch.SearchQuery()
search_query.query_string = "@title bag"
      
var search_request = new Manticoresearch.SearchRequest()
search_request.index = "products"
search_request.query = search_query
var query_highlight = new Manticoresearch.Highlight()
query_highlight.fields = {"title":{}}
search_request.highlight = query_highlight
  
var search_response = await searchApi.search(search_request)
console.log("The response of SearchApi->search:\n")    
console.log(search_response)

# Alternatively, you can pass all request arguments as JSON strings
search_response = await searchApi.search({"index": "products", "query": {"query_string": "@title bag"}, "highlight": {"fields": ["title"]}});
console.log("The response of SearchApi->search:\n")    
console.log(search_response)


```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:9308*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Manticoresearch.IndexApi* | [**bulk**](docs/IndexApi.md#bulk) | **POST** /bulk | Bulk table operations
*Manticoresearch.IndexApi* | [**callDelete**](docs/IndexApi.md#callDelete) | **POST** /delete | Delete a document in a table
*Manticoresearch.IndexApi* | [**insert**](docs/IndexApi.md#insert) | **POST** /insert | Create a new document in a table
*Manticoresearch.IndexApi* | [**partialReplace**](docs/IndexApi.md#partialReplace) | **POST** /{table}/_update/{id} | Partially replaces a document in a table
*Manticoresearch.IndexApi* | [**replace**](docs/IndexApi.md#replace) | **POST** /replace | Replace new document in a table
*Manticoresearch.IndexApi* | [**update**](docs/IndexApi.md#update) | **POST** /update | Update a document in a table
*Manticoresearch.SearchApi* | [**autocomplete**](docs/SearchApi.md#autocomplete) | **POST** /autocomplete | Performs an autocomplete search on a table
*Manticoresearch.SearchApi* | [**percolate**](docs/SearchApi.md#percolate) | **POST** /pq/{table}/search | Perform reverse search on a percolate table
*Manticoresearch.SearchApi* | [**search**](docs/SearchApi.md#search) | **POST** /search | Performs a search on a table
*Manticoresearch.UtilsApi* | [**sql**](docs/UtilsApi.md#sql) | **POST** /sql | Perform SQL requests


## Documentation for Models

 - [Manticoresearch.AggComposite](docs/AggComposite.md)
 - [Manticoresearch.AggCompositeSource](docs/AggCompositeSource.md)
 - [Manticoresearch.AggCompositeTerm](docs/AggCompositeTerm.md)
 - [Manticoresearch.AggTerms](docs/AggTerms.md)
 - [Manticoresearch.Aggregation](docs/Aggregation.md)
 - [Manticoresearch.AutocompleteRequest](docs/AutocompleteRequest.md)
 - [Manticoresearch.BoolFilter](docs/BoolFilter.md)
 - [Manticoresearch.BulkResponse](docs/BulkResponse.md)
 - [Manticoresearch.DeleteDocumentRequest](docs/DeleteDocumentRequest.md)
 - [Manticoresearch.DeleteResponse](docs/DeleteResponse.md)
 - [Manticoresearch.ErrorResponse](docs/ErrorResponse.md)
 - [Manticoresearch.FulltextFilter](docs/FulltextFilter.md)
 - [Manticoresearch.GeoDistance](docs/GeoDistance.md)
 - [Manticoresearch.GeoDistanceLocationAnchor](docs/GeoDistanceLocationAnchor.md)
 - [Manticoresearch.Highlight](docs/Highlight.md)
 - [Manticoresearch.HighlightFieldOption](docs/HighlightFieldOption.md)
 - [Manticoresearch.HitsHits](docs/HitsHits.md)
 - [Manticoresearch.InsertDocumentRequest](docs/InsertDocumentRequest.md)
 - [Manticoresearch.Join](docs/Join.md)
 - [Manticoresearch.JoinCond](docs/JoinCond.md)
 - [Manticoresearch.JoinOn](docs/JoinOn.md)
 - [Manticoresearch.KnnQuery](docs/KnnQuery.md)
 - [Manticoresearch.Match](docs/Match.md)
 - [Manticoresearch.MatchAll](docs/MatchAll.md)
 - [Manticoresearch.PercolateRequest](docs/PercolateRequest.md)
 - [Manticoresearch.PercolateRequestQuery](docs/PercolateRequestQuery.md)
 - [Manticoresearch.QueryFilter](docs/QueryFilter.md)
 - [Manticoresearch.Range](docs/Range.md)
 - [Manticoresearch.ReplaceDocumentRequest](docs/ReplaceDocumentRequest.md)
 - [Manticoresearch.ResponseError](docs/ResponseError.md)
 - [Manticoresearch.ResponseErrorDetails](docs/ResponseErrorDetails.md)
 - [Manticoresearch.SearchQuery](docs/SearchQuery.md)
 - [Manticoresearch.SearchRequest](docs/SearchRequest.md)
 - [Manticoresearch.SearchResponse](docs/SearchResponse.md)
 - [Manticoresearch.SearchResponseHits](docs/SearchResponseHits.md)
 - [Manticoresearch.SourceRules](docs/SourceRules.md)
 - [Manticoresearch.SqlObjResponse](docs/SqlObjResponse.md)
 - [Manticoresearch.SqlResponse](docs/SqlResponse.md)
 - [Manticoresearch.SuccessResponse](docs/SuccessResponse.md)
 - [Manticoresearch.UpdateDocumentRequest](docs/UpdateDocumentRequest.md)
 - [Manticoresearch.UpdateResponse](docs/UpdateResponse.md)


## Documentation for Authorization

Endpoints do not require authorization.

