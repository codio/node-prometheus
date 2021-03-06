namespace java com.codio.prometheus.thrift
#@namespace scala com.codio.prometheus.thrift

struct ReplyToExchange {
  1: required string exchange
  2: required string routingKey
}

union ReplyDestination {
  1: ReplyToExchange exchange
}

struct ReplyParameters {
  1: required string taskId,
  2: required ReplyDestination replyTo
  3: optional string passThrough
}

struct Empty {}
