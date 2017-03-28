namespace java com.codio.prometheus.thrift.unitfork
#@namespace scala com.codio.prometheus.thrift.unitfork

struct UnitFork {
  1: required string unitVersionId
  2: required string accountId
  3: required string courseId
  4: required string projectId
  5: required i64 secondsSpentIn
}

