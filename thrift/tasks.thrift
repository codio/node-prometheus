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
