# Manticoresearch.Knn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** | Field to perform the k-nearest neighbor search on | 
**k** | **Number** | The number of nearest neighbors to return | 
**query** | [**KnnQuery**](KnnQuery.md) |  | [optional] 
**queryVector** | **[Number]** | The vector used as input for the KNN search | [optional] 
**docId** | **Number** | The docuemnt ID used as input for the KNN search | [optional] 
**ef** | **Number** | Optional parameter controlling the accuracy of the search | [optional] 
**rescore** | **Boolean** | Optional parameter enabling KNN rescoring (disabled by default) | [optional] 
**oversampling** | **Number** | Optional parameter setting a factor by which k is multiplied when executing the KNN search | [optional] 
**filter** | [**QueryFilter**](QueryFilter.md) |  | [optional] 


