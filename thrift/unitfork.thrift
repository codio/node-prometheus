namespace java com.codio.prometheus.thrift.unitfork
#@namespace scala com.codio.prometheus.thrift.unitfork

include 'common.thrift'

struct UnitFork {
  1: required string unitVersionId
  2: required string accountId
  3: required string projectId
  4: required i32 secondsSpentIn
}

struct AutogradeScriptStatusComplete {
  1: required i32 returnCode
  2: required string stdout
  3: required string stderr
}

union AutogradeScriptStatus {
  1: AutogradeScriptStatusComplete complete
  2: common.Empty error
}

struct AutogradeScriptResult {
  1: required AutogradeScriptStatus status
  2: optional i32 points
}
