namespace java com.codio.prometheus.thrift
#@namespace scala com.codio.prometheus.thrift

struct UnitDetails {
  1: required string name
  2: optional string description
  3: optional string imageUrl
}

struct UnitVersion {
  1: required string id
  2: required string stackVersionId
  // TODO: status: in progress, success, error+info
}

struct ModuleUnit {
  1: required string id
  2: required UnitDetails details
  3: optional list<UnitVersion> versions
}

