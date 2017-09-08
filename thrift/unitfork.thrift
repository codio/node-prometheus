namespace java com.codio.prometheus.thrift.unitfork
#@namespace scala com.codio.prometheus.thrift.unitfork

struct UnitFork {
  1: required string unitVersionId
  2: required string accountId
  3: required string projectId
  4: required i32 secondsSpentIn
  5: required string id
  6: required map<string, i32> secondsSpentInUnits = {}
}
