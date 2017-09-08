namespace java com.codio.prometheus.thrift
#@namespace scala com.codio.prometheus.thrift

include 'unit.thrift'

struct ModuleDetails {
  1: required string name
  2: optional string description
  3: optional string longDescription
  4: optional string imageUrl
  5: optional set<string> tags = []
}

struct Module {
  1: required string id
  2: required ModuleDetails details
  3: optional list<unit.UnitType> units
  4: required list<string> unitIds = []
  5: required bool isRemoved
}
