namespace java com.codio.prometheus.thrift.unit.assessments
#@namespace scala com.codio.prometheus.thrift.unit.assessments

include "common.thrift"


struct Details {
  1: required string name
  2: required i32 points
  3: optional bool showName = false
  4: optional string instructions = ""
}

struct ChoiceOption {
  1: required string id
  2: required string answer
}

struct MultipleChoice {
  1: required list<ChoiceOption> options
  2: required bool isMultipleResponse
}

struct FillInBlanks {
  1: required list<string> texts
  2: optional list<string> selectableAnswers
}

struct ServerSideTest {
  1: optional bool oneTimeTest = false
}

struct Custom {
  1: optional bool oneTimeTest = false
}

struct FreeText {
  1: optional bool oneTimeTest = false
}

union Task {
  1: MultipleChoice multipleChoice
  2: FillInBlanks fillInBlanks
  3: ServerSideTest codeTest
  4: ServerSideTest codeOutputCompare
  5: Custom custom
  6: FreeText freeText
}



struct MultipleChoiceResult {
  1: required i32 points
  2: required set<string> expectedAnswerIds
  3: required set<string> answerIds
}

struct FillInBlanksResult {
  1: required i32 points
  2: required list<string> expectedAnswers
  3: required list<string> answers
}

struct ServerSideTestResult {
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

struct FreeTextAnswer {
  1: required string id
  2: required string answer
  3: required FreeTextStatus status
}

struct CustomResult {
  1: required i32 points
}

union CheckResult {
  1: MultipleChoiceResult multipleChoice
  2: FillInBlanksResult fillInBlanks
  3: ServerSideTestResult codeTest
  4: ServerSideTestResult codeOutputCompare
  5: CustomResult custom
  6: FreeTextAnswer freeText
}
