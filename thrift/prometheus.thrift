namespace java com.codio.prometheus.thrift
#@namespace scala com.codio.prometheus.thrift

include "common.thrift"
include "guides.thrift"
include "unit.thrift"
include "module.thrift"
include "course.thrift"
include "unitfork.thrift"
include "assessments.thrift"
include "assessmentResults.thrift"

struct GetCourseResult {
  1: required list<course.Course> courses
  2: optional map<string, module.Module> modules
}

struct UpdateCourseDetails {
  1: optional string name
  2: optional string description
  3: optional string longDescription
  4: optional string imageUrl
  5: optional set<string> tags
}

struct UpdateModuleDetails {
  1: optional string name
  2: optional string description
  3: optional string longDescription
  4: optional string imageUrl
  5: optional set<string> tags
}

struct UpdateUnitDetails {
  1: optional string name
  2: optional string description
  3: optional string imageUrl
}

struct ChangeStackVersionInUnitResult {
  1: optional unit.Version unitVersion
}

typedef map<string, string> UnitToLatestStartableVersion
typedef map<string, assessmentResults.AssessmentResult> UnitForkAssessmentResult

exception NotFoundException {}

exception StackException {}

exception ReorderConflictException {
  1: required module.Module currentModule
}

exception NoGuidesInUnitException {}

exception ArgumentException {}

exception AssessmentAlreadyAnsweredException {}

exception MathException {
  1: required string message
}

service PrometheusService {
  list<course.Course> getCoursesByModuleIds(1: required list<string> ids)
  GetCourseResult getCourses(1: required list<string> ids, 2: bool withModules = false,
      3: bool withRemoved = false)

  course.Course createCourse(1: required course.CourseDetails details)

  course.Course updateCourse(1: required string id, 2: required UpdateCourseDetails details)
      throws (1: NotFoundException nfe)

  void setCourseModules(1: required string id, 2: required list<string> moduleIds)
      throws (1: NotFoundException nfe)

  void deleteCourse(1: required string id) throws (1: NotFoundException nfe)


  list<module.Module> getModules(1: required list<string> ids, 2: bool withUnits = false,
      3: bool withRemoved = false)

  module.Module getModuleByUnitId(1: required string unitId)
  module.Module createModule(1: required module.ModuleDetails details)
  module.Module updateModule(1: required string id, 2: required UpdateModuleDetails details)
      throws (1: NotFoundException nfe)
  void deleteModule(1: required string id) throws (1: NotFoundException nfe)

  unit.ModuleUnit addUnitToModule(
    1: required string moduleId,
    2: required unit.Details unitDetails,
    4: optional string createdById
  ) throws (1: NotFoundException nfe)

  unit.BookBasedUnit addBookBasedUnitToModule(
    1: required string moduleId,
    2: required unit.Details unitDetails,
    3: optional string createdById,
    4: required string bookUnitVersionId,
    5: required list<string> pages
  ) throws (1: NotFoundException nfe)

  void updateBookBasedUnit(
    1: required string id,
    2: required UpdateUnitDetails details,
    3: optional string bookUnitVersionId,
    4: optional list<string> pages
  )

  void updateBookUnitVersion(
    1: list<string> bookBasedUnitIds,
    2: string bookUnitVersionId
  )

  unit.ModuleUnit createUnit(
    1: required unit.Details unitDetails,
    2: optional string createdById
  ) throws (1: NotFoundException nfe)

  void updateUnit(1: required string id, 2: required UpdateUnitDetails details)
      throws (1: NotFoundException nfe)

  void publishUnit(
    1: required common.ReplyParameters replyParameters,
    2: required string unitId,
    3: required string projectId,
    4: required string stackVersionId,
    5: optional string initiatedById,
    6: optional string changelog
  ) throws (1: NotFoundException nfe)

  void migrateFromS3Archive(
    1: required string unitId,
    2: required string archiveS3Key,
    3: required string stackVersionId,
    4: optional string assessmentsJson
  ) throws (1: NotFoundException nfe)

  ChangeStackVersionInUnitResult changeStackVersionInUnit(
    1: required string unitId,
    2: required string stackVersionId
  ) throws (1: NotFoundException nfe)

  void removeUnit(1: required string id) throws (1: NotFoundException nfe)
  unit.ModuleUnit getUnit(1: required string id) throws (1: NotFoundException nfe)
  unit.ModuleUnit getUnitByVersionId(1: required string id) throws (1: NotFoundException nfe)
  list<unit.ModuleUnit> getUnits(
    1: required list<string> ids,
    2: bool withRemoved = false,
    3: bool withVersions = true
  )

  void reorderUnits(1: required string moduleId, 2:  required list<string> unitIds)
      throws (1: NotFoundException nfe, 2: ReorderConflictException rce)

  map<string, UnitToLatestStartableVersion> getLatestUnitVersions(1: required list<string> moduleIds)

  map<string, unit.StartableVersion> getUnitVersionsAsStartable(
    1: required list<string> unitVersionIds,
    2: optional bool isTeacher = false
  )

  unit.StartableVersion getUnitVersionAsStartable(
    1: required string unitVersionId,
    2: optional bool isTeacher = false
  ) throws (1: NotFoundException nfe)

  unit.StartableVersion getLatestStartableUnitVersion(
    1: required string unitId,
    2: optional bool isTeacher = false
  ) throws (1: NotFoundException nfe)

  // deprecated
  unit.S3Address getUnitUserArchiveTemplate(
    1: required string unitVersionId
  ) throws (1: NotFoundException nfe)

  // deprecated
  unit.Guides getUnitGuides(
    1: required string unitVersionId,
    2: optional bool isTeacher = false
  ) throws (1: NotFoundException nfe, 2: NoGuidesInUnitException nge)

  // replies to the queue with `server.CreateProjectInfo`
  void createProjectForAuthor(
    1: required common.ReplyParameters replyParameters,
    2: required string unitId,
    3: required string userId,
    4: required string defaultStackVersionId
  ) throws (1: NotFoundException nfe, 2: StackException se)

  // replies to the queue with `unitfork.UnitFork`
  void createUnitFork(
    1: required common.ReplyParameters replyParameters,
    2: required string id,
    3: required string unitVersionId,
    4: required string userId,
    5: optional string gigaBoxSlot
  ) throws (1: NotFoundException nfe, 2: StackException se)

  unitfork.UnitFork getUnitFork(1: required string id) throws (1: NotFoundException nfe)
  list<unitfork.UnitFork> getUnitForks(1: required list<string> ids)

  // replies to the queue with `string="done"`
  void restoreUnitForkContent(
    1: required common.ReplyParameters replyParameters,
    3: required string unitForkId,
    4: required list<string> folders
  ) throws (1: NotFoundException nfe, 2: StackException se)

  void removeUnitFork(1: required string id) throws (1: NotFoundException nfe)
  void removeUnitForks(1: required list<string> ids) throws (1: NotFoundException nfe)

  void incrementTimeSpentInUnitFork(
    1: required string unitForkId,
    2: required i32 seconds,
    3: optional string unitId
  ) throws (1: NotFoundException nfe)

  // replies to the queue with `unit.AutogradeScriptResult`
  void runAutogradeScript(
    1: required common.ReplyParameters replyParameters,
    2: required string unitForkId,
    3: required string autogradeScriptPath,
    4: required string envVarJson
  ) throws (1: NotFoundException nfe)

  // replies to the queue with `unit.AutogradeScriptResult`
  void runAutogradeScriptForAuthor(
    1: required common.ReplyParameters replyParameters,
    2: required string projectId,
    3: required string autogradeScriptPath,
    4: required string envVarJson
  ) throws (1: NotFoundException nfe)

  void storeAutogradePoints(1: required string autogradeToken, 2: required i32 points) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae
  )

  // replies to the queue with `common.Empty`
  void updateUnitVersionInUnitForks(
    1: required common.ReplyParameters replyParameters,
    2: required list<string> unitForkIds,
    3: required string unitVersionId
  ) throws (1: NotFoundException nfe)

  /// Assessments

  assessmentResults.CheckResult checkMultipleChoiceAssessment(
    1: required string unitForkId,
    2: required string assessmentId,
    3: required set<string> answerIds
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae,
    3: AssessmentAlreadyAnsweredException aaae
  )

  assessmentResults.MultipleChoiceAttempt checkMultipleChoiceAssessmentForAuthor(
    1: required string assessmentJson,
    2: required set<string> answerIds
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae
  )

  assessmentResults.CheckResult checkFillInBlanksAssessment(
    1: required string unitForkId,
    2: required string assessmentId,
    3: required list<string> answers
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae,
    3: AssessmentAlreadyAnsweredException aaae
  )

  assessmentResults.FillInBlanksAttempt checkFillInBlanksAssessmentForAuthor(
    1: required string assessmentJson,
    2: required list<string> answers
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae
  )

  assessmentResults.MathAttempt checkMathAssessmentForAuthor(
    1: required string assessmentJson,
    2: required map<string, string> answers,
    3: required i32 seed
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae
  )

  assessmentResults.CheckResult submitMathAssessmentAnswer(
    1: required string unitForkId,
    2: required string assessmentId,
    3: required map<string, string> answers,
    4: required i32 seed
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae,
    3: AssessmentAlreadyAnsweredException aaae
  )

  void storeCodeTestPartialPoints(1: required string partialPointsKey, 2: required i32 points) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae
  )

  // replies to the queue with `assessmentResults.CheckResult`
  void checkCodeTestAssessment(
    1: required string unitForkId,
    2: required string assessmentId,
    3: required common.ReplyParameters replyParameters
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae,
    3: AssessmentAlreadyAnsweredException aaae
  )

  // replies to the queue with `assessmentResults.CodeTestAttempt`
  void checkCodeTestAssessmentForAuthor(
    1: required string projectId,
    2: required string assessmentJson,
    3: required common.ReplyParameters replyParameters
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae
  )

  // replies to the queue with `assessmentResults.CheckResult`
  void checkCodeOutputCompareAssessment(
    1: required string unitForkId,
    2: required string assessmentId,
    3: required common.ReplyParameters replyParameters
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae,
    3: AssessmentAlreadyAnsweredException aaae
  )

  // replies to the queue with `assessmentResults.CodeOutputCompareAttempt`
  void checkCodeOutputCompareAssessmentForAuthor(
    1: required string projectId,
    2: required string assessmentJson,
    3: required common.ReplyParameters replyParameters
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae
  )

  assessmentResults.CheckResult submitCustomAssessmentResult(
    1: required string unitForkId,
    2: required string assessmentId,
    3: required i32 points
    // TODO: answer ?
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae,
    3: AssessmentAlreadyAnsweredException aaae
  )

  void submitFreeTextAssessmentAnswer(
    1: required string unitForkId,
    2: required string assessmentId,
    3: required string answer
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae,
    3: AssessmentAlreadyAnsweredException aaae
  )

  void markFreeTextAssessment(
    1: required string unitForkId,
    2: required string assessmentId,
    3: required string attemptId,
    4: required i32 points
  ) throws (
    1: NotFoundException nfe,
    2: ArgumentException ae
  )

  map<string, map<string, i32>> getAssessmentScoresByAssessment(1: required list<string> unitForkIds)
  map<string, i32> getAssessmentScores(1: required list<string> unitForkIds)
  UnitForkAssessmentResult getAssessmentAnswers(1: required string unitForkId) throws (1: NotFoundException nfe)

  map<string, string> getAssessmentState(1: required string unitForkId) throws (1: NotFoundException nfe)

  void storeAssessmentState(
    1: required string unitForkId,
    2: required string assessmentId,
    3: required string state
  ) throws(1: NotFoundException nfe)

  assessments.MathQuestionCompiled compileMath(1: required assessments.MathRequest req) throws(1: MathException me)
}
