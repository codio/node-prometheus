namespace java com.codio.prometheus.thrift.tasks
#@namespace scala com.codio.prometheus.thrift.tasks

include "common.thrift"

struct PublishUnitTask {
  1: required common.ReplyParameters replyParameters
  2: required string unitId
  3: required string unitVersionId
  4: required string projectId
  5: required string stackVersionId
}

struct TaskStatusCompleted {
  1: required binary result
}

struct TaskStatusError {
  1: required string errorMessage
}

union TaskStatus {
  1: TaskStatusCompleted completed
  2: TaskStatusError error
}

struct TaskResult {
  1: required TaskStatus status
  2: optional string passthrough
}
