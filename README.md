# Manticore Javascript client

Сlient for Manticore Search.


❗ WARNING: this is a development version of the client. The latest release's readme is https://github.com/manticoresoftware/manticoresearch-javascript/tree/5.0.0

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

### For [Node.js](https://nodejs.org/)

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your manticoresearch from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
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
*Manticoresearch.IndexApi* | [**bulk**](docs/IndexApi.md#bulk) | **POST** /bulk | Bulk index operations
*Manticoresearch.IndexApi* | [**callDelete**](docs/IndexApi.md#callDelete) | **POST** /delete | Delete a document in an index
*Manticoresearch.IndexApi* | [**insert**](docs/IndexApi.md#insert) | **POST** /insert | Create a new document in an index
*Manticoresearch.IndexApi* | [**partialReplace**](docs/IndexApi.md#partialReplace) | **POST** /{index}/_update/{id} | Partially replaces a document in an index
*Manticoresearch.IndexApi* | [**replace**](docs/IndexApi.md#replace) | **POST** /replace | Replace new document in an index
*Manticoresearch.IndexApi* | [**update**](docs/IndexApi.md#update) | **POST** /update | Update a document in an index
*Manticoresearch.SearchApi* | [**percolate**](docs/SearchApi.md#percolate) | **POST** /pq/{index}/search | Perform reverse search on a percolate index
*Manticoresearch.SearchApi* | [**search**](docs/SearchApi.md#search) | **POST** /search | Performs a search on an index
*Manticoresearch.UtilsApi* | [**sql**](docs/UtilsApi.md#sql) | **POST** /sql | Perform SQL requests


## Documentation for Models

 - [Manticoresearch.AggComposite](docs/AggComposite.md)
 - [Manticoresearch.AggCompositeSource](docs/AggCompositeSource.md)
 - [Manticoresearch.AggCompositeTerm](docs/AggCompositeTerm.md)
 - [Manticoresearch.AggTerms](docs/AggTerms.md)
 - [Manticoresearch.Aggregation](docs/Aggregation.md)
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
 - [Manticoresearch.SuccessResponse](docs/SuccessResponse.md)
 - [Manticoresearch.UpdateDocumentRequest](docs/UpdateDocumentRequest.md)
 - [Manticoresearch.UpdateResponse](docs/UpdateResponse.md)


## Documentation for Authorization

Endpoints do not require authorization.

