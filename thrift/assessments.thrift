namespace java com.codio.prometheus.thrift.unit.assessments
#@namespace scala com.codio.prometheus.thrift.unit.assessments

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
  1: required bool oneTimeTest = false
}

struct Custom {
  1: required bool oneTimeTest = false
}

struct FreeText {
  1: required bool oneTimeTest = false
  2: required bool arePartialPointsAllowed = false
}

union Task {
  1: MultipleChoice multipleChoice
  2: FillInBlanks fillInBlanks
  3: ServerSideTest codeTest
  4: ServerSideTest codeOutputCompare
  5: Custom custom
  6: FreeText freeText
}
