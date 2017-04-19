namespace java com.codio.prometheus.thrift.unit.assessments
#@namespace scala com.codio.prometheus.thrift.unit.assessments

include "common.thrift"


struct MultipleChoiceAttempt {
  1: required i32 points
  2: required set<string> expectedAnswerIds
  3: required set<string> answerIds
}

struct FillInBlanksAttempt {
  1: required i32 points
  2: required list<string> expectedAnswers
  3: required list<string> answers
}

struct ServerSideTestAttempt {
  1: required i32 points
  2: required i32 returnCode
  3: required string stdout
  4: required string stderr
}


struct FreeTextDone {
  1: required i32 points
}

union FreeTextStatus {
  1: common.Empty pending
  2: FreeTextDone done
}

struct FreeTextAttempt {
  1: required string id
  2: required string answer
  3: required FreeTextStatus status
}

struct CustomTaskAttempt {
  1: required i32 points
}


union CheckResult {
  1: list<MultipleChoiceAttempt> multipleChoice
  2: list<FillInBlanksAttempt> fillInBlanks
  3: list<ServerSideTestAttempt> codeTest
  4: list<ServerSideTestAttempt> codeOutputCompare
  5: list<CustomTaskAttempt> custom
  6: list<FreeTextAttempt> freeText
}
