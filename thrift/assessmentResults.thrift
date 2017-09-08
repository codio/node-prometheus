namespace java com.codio.prometheus.thrift.unit.assessments
#@namespace scala com.codio.prometheus.thrift.unit.assessments

include "common.thrift"
include "assessments.thrift"

struct MathAttempt {
  1: required i32 points
  2: required map<string, string> answers
  3: optional string questionText
  4: optional string answerNotes
}

struct MultipleChoiceAttempt {
  1: required i32 points
  2: optional set<string> expectedAnswerIds
  3: required set<string> answerIds
}

struct FillInBlanksAttempt {
  1: required i32 points
  2: optional list<string> expectedAnswers
  3: required list<string> answers
}

struct CodeTestAttempt {
  1: required i32 points
  2: required i32 returnCode
  3: required string stdout
  4: required string stderr
}

struct CodeOutputCompareAttempt {
  1: required i32 points
  2: required i32 returnCode
  3: required string stdout
  4: required string stderr
  5: optional list<assessments.ExpectedCodeOutputCompareResult> expectedOutputs
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

// newest to oldest
union TaskAttemptHistory {
  1: list<MultipleChoiceAttempt> multipleChoice
  2: list<FillInBlanksAttempt> fillInBlanks
  3: list<CodeTestAttempt> codeTest
  4: list<CodeOutputCompareAttempt> codeOutputCompare
  5: list<CustomTaskAttempt> custom
  6: list<FreeTextAttempt> freeText
  7: list<MathAttempt> math
}

union TaskAttempt {
  1: MultipleChoiceAttempt multipleChoice
  2: FillInBlanksAttempt fillInBlanks
  3: CodeTestAttempt codeTest
  4: CodeOutputCompareAttempt codeOutputCompare
  5: CustomTaskAttempt custom
  6: FreeTextAttempt freeText
  7: MathAttempt math
}

struct CheckResult {
  1: required TaskAttempt attempt
  2: optional string guidance
}

struct AssessmentResult {
  1: required TaskAttemptHistory attempts
  2: optional string guidance
}
