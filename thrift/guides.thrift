namespace java com.codio.prometheus.thrift.unit.guides
#@namespace scala com.codio.prometheus.thrift.unit.guides

union SectionContent {
  1: string markdown
  2: string htmlRelativePath
}

struct Media {
  1: required string url
  2: required string playbackMetadataJson
}

struct Section {
  1: required string id
  2: required string playbackMetadataJson
  3: required SectionContent content
  4: optional Media media
  5: required set<string> assessmentIds
}
