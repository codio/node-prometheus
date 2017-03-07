namespace java com.codio.prometheus.thrift
#@namespace scala com.codio.prometheus.thrift

struct CourseDetails {
  1: required string name
  2: optional string description
  3: optional string longDescription
  4: optional string imageUrl
  5: optional set<string> tags = []
}

struct Course {
  1: required string id
  2: required CourseDetails details
  3: required i64 createdAt
  4: required list<string> moduleIds
}
