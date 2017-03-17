namespace java com.codio.prometheus.thrift
#@namespace scala com.codio.prometheus.thrift

struct UnitVersionError {
  1: required string message
  2: optional map<string,string> guidesErrors
}

struct UnitVersionState {
  1: string status // INPROGRESS, SUCCESS, ARCHIVED
  2: optional string taskId
}

union UnitVersionStatus {
  1: UnitVersionState state
  2: UnitVersionError error
}

struct UnitDetails {
  1: required string name
  2: optional string description
  3: optional string imageUrl
}

struct UnitVersion {
  1: required string id
  2: required string stackVersionId
  3: required UnitVersionStatus status
}

struct ModuleUnit {
  1: required string id
  2: required UnitDetails details
  3: optional list<UnitVersion> versions
}

