namespace java com.codio.prometheus.thrift.tasks
#@namespace scala com.codio.prometheus.thrift.tasks

include "./unit.thrift"
include "./unitfork.thrift"

struct TaskError {
  1: required string message
}

struct PublishUnitTask {
  1: required string taskId
  2: required string unitId
  3: required string unitVersionId
  4: required string projectId
  5: required string stackVersionId
}


const string PublishUnitResultTopic = "tasks.publishUnitResult"

union PublishUnitStatus {
  1: unit.Version complete
  2: TaskError error
}

struct PublishUnitResult {
  1: required string taskId
  2: required PublishUnitStatus status
}

union CreateUnitForkStatus {
  1: unitfork.UnitFork complete
  2: TaskError error
}

struct CreateUnitForkResult {
  1: required string taskId
  2: required CreateUnitForkStatus status
}

struct UnitForkRemoved {
  1: required string projectId
}
