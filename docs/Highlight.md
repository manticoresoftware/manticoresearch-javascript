# Manticoresearch.Highlight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldnames** | **[String]** |  | [optional] 
**fields** | [**[HighlightField]**](HighlightField.md) |  | [optional] 
**encoder** | **String** |  | [optional] 
**highlightQuery** | **{String: Object}** |  | [optional] 
**preTags** | **String** |  | [optional] [default to &#39;&lt;strong&gt;&#39;]
**postTags** | **String** |  | [optional] [default to &#39;&lt;/strong&gt;&#39;]
**noMatchSize** | **Number** |  | [optional] 
**fragmentSize** | **Number** |  | [optional] [default to 256]
**numberOfFragments** | **Number** |  | [optional] [default to 0]
**limit** | **Number** |  | [optional] [default to 256]
**limitWords** | **Number** |  | [optional] [default to 0]
**limitSnippets** | **Number** |  | [optional] [default to 0]
**limitsPerField** | **Boolean** |  | [optional] [default to false]
**useBoundaries** | **Boolean** |  | [optional] [default to false]
**forceAllWords** | **Boolean** |  | [optional] [default to false]
**allowEmpty** | **Boolean** |  | [optional] [default to false]
**emitZones** | **Boolean** |  | [optional] [default to false]
**forceSnippets** | **Boolean** |  | [optional] [default to false]
**around** | **Number** |  | [optional] [default to 5]
**startSnippetId** | **Number** |  | [optional] [default to 1]
**htmlStripMode** | **String** |  | [optional] 
**snippetBoundary** | **String** |  | [optional] 

[[Using in search requests]](SearchApi.md#Highlight)




## Enum: EncoderEnum


* `default` (value: `"default"`)

* `html` (value: `"html"`)





## Enum: NoMatchSizeEnum


* `0` (value: `0`)

* `1` (value: `1`)





## Enum: HtmlStripModeEnum


* `none` (value: `"none"`)

* `strip` (value: `"strip"`)

* `index` (value: `"index"`)

* `retain` (value: `"retain"`)





## Enum: SnippetBoundaryEnum


* `sentence` (value: `"sentence"`)

* `paragraph` (value: `"paragraph"`)

* `zone` (value: `"zone"`)




