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
}

struct FillInBlanks {
  1: required list<string> texts
  2: optional list<string> selectableAnswers
}

struct ExternalTest {
  1: optional bool oneTimeTest = false
}

union Task {
  1: MultipleChoice multipleChoice
  2: FillInBlanks fillInBlanks
  3: ExternalTest codeTest
  4: ExternalTest codeOutputCompare
  5: ExternalTest custom
}

