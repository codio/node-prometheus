namespace java com.codio.prometheus.thrift.unit.assessments
#@namespace scala com.codio.prometheus.thrift.unit.assessments

struct MathRequest {
  1: required bool readOnly
  2: required bool feedback
  3: required bool score
  5: required string question
  6: required i32 seed
  7: optional map<string, string> answer
}

struct MathQuestionCompiled {
  1: required string questionText
  2: required string generalFeedback
  3: required string answerNotes
  4: required string summariseResponse
  5: required double score
}

struct Details {
  1: required string name
  2: required i32 points
  3: optional bool showName = false
  4: optional string instructions = ""
  5: optional string learningObjectives = ""
  6: optional string bloomsObjectiveLevel = ""
  7: optional string guidance
  8: optional bool showExpectedAnswer = false
}

struct ChoiceOption {
  1: required string id
  2: required string answer
}

struct MultipleChoice {
  1: required list<ChoiceOption> options
  2: required bool isMultipleResponse
  3: optional set<string> expectedAnswerIds
}

struct FillInBlanks {
  1: required list<string> texts
  2: optional list<string> selectableAnswers
  3: optional list<string> expectedAnswers
}

struct CodeTest {
  1: required bool oneTimeTest = false
}

struct ExpectedCodeOutputCompareResult {
  1: required string output
  2: optional i32 returnCode
}

struct CodeOutputCompare {
  1: required bool oneTimeTest = false
  2: optional list<ExpectedCodeOutputCompareResult> expectedOutputs
}

struct Custom {
  1: required bool oneTimeTest = false
}

struct FreeText {
  1: required bool oneTimeTest = false
  2: required bool arePartialPointsAllowed = false
}

struct MathStack {
  1: required string question
  2: optional bool oneTimeTest = false
}

union Task {
  1: MultipleChoice multipleChoice
  2: FillInBlanks fillInBlanks
  3: CodeTest codeTest
  4: CodeOutputCompare codeOutputCompare
  5: Custom custom
  6: FreeText freeText
  7: MathStack mathStack
}
