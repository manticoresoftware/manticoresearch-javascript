# Manticoresearch.AggPercentiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** | Numeric field to calculate percentiles for | 
**values** | **[Number]** | Percentile points to compute (0-100). Defaults to 1, 5, 25, 50, 75, 95, and 99 when omitted.  | [optional] 
**keyed** | **Boolean** | Return an object keyed by percentile when true, or an array when false. Default is false.  | [optional] 
**tdigest** | [**AggTDigest**](AggTDigest.md) |  | [optional] 


