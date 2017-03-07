namespace java com.codio.prometheus.thrift.events
#@namespace scala com.codio.prometheus.thrift.events

include "./unit.thrift"

const string UnitDeletedTopic = "unit.deleted"

struct UnitRemoved {
  1: required string unitId
}
