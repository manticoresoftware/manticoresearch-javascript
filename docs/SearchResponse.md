# Manticoresearch.SearchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**took** | **Number** | Time taken to execute the search | [optional] 
**timedOut** | **Boolean** | Indicates whether the search operation timed out | [optional] 
**aggregations** | **Object** | Aggregated search results grouped by the specified criteria | [optional] 
**hits** | [**SearchResponseHits**](SearchResponseHits.md) |  | [optional] 
**profile** | **Object** | Profile information about the search execution, if profiling is enabled | [optional] 
**scroll** | **String** | Scroll token to be used fo pagination | [optional] 
**warning** | **Object** | Warnings encountered during the search operation | [optional] 


