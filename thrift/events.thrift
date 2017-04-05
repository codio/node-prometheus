namespace java com.codio.prometheus.thrift.events
#@namespace scala com.codio.prometheus.thrift.events

include "./unit.thrift"

const string UnitForkRemovedTopic = "forks.unitForkRemoved"

struct UnitForkRemoved {
  1: required string projectId
}
