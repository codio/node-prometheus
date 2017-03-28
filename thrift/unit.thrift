namespace java com.codio.prometheus.thrift.unit
#@namespace scala com.codio.prometheus.thrift.unit

include "./assessments.thrift"
include "./guides.thrift"

struct PublishStatusInProgress {
  1: required string taskId
}

struct PublishStatusComplete {}

struct PublishStatusError {
  1: optional map<string,string> guidesErrors
}

union PublishStatus {
  1: PublishStatusInProgress inProgress
  2: PublishStatusComplete complete
  3: PublishStatusError error
}

struct Details {
  1: required string name
  2: optional string description
  3: optional string imageUrl
}

struct Version {
  1: required string id
  2: required string stackVersionId
  3: optional PublishStatus status
}

struct Assessment {
  1: required string id
  2: required assessments.Details details
  3: required assessments.Task task
}

struct Guides {
  1: required string playbackMetadataJson
  2: required list<guides.Section> sections
  3: required list<Assessment> assessments
}

struct ModuleUnit {
  1: required string id
  2: required Details details
  3: optional list<Version> versions
}
