namespace java com.codio.prometheus.thrift
#@namespace scala com.codio.prometheus.thrift

include "unit.thrift"
include "module.thrift"
include "course.thrift"

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
  1: optional unit.UnitVersion unitVersion
}

exception NotFoundException {}

exception ReorderConflictException {
  1: required module.Module currentModule
}

service PrometheusService {
  GetCourseResult getCourses(1: required list<string> ids, 2: bool withModules = false)

  course.Course createCourse(1: required course.CourseDetails details)

  course.Course updateCourse(1: required string id, 2: required UpdateCourseDetails details)
      throws (1: NotFoundException nfe)

  void setCourseModules(1: required string id, 2: required list<string> moduleIds)
      throws (1: NotFoundException nfe)

  void deleteCourse(1: required string id) throws (1: NotFoundException nfe)


  list<module.Module> getModules(1: required list<string> ids, 2: bool withUnits = false)

  module.Module getModuleByUnitId(1: required string unitId)
  module.Module createModule(1: required module.ModuleDetails details)
  module.Module updateModule(1: required string id, 2: required UpdateModuleDetails details)
      throws (1: NotFoundException nfe)
  void deleteModule(1: required string id) throws (1: NotFoundException nfe)

  unit.ModuleUnit addUnitToModule(
    1: required string moduleId,
    2: required unit.UnitDetails unitDetails
  ) throws (1: NotFoundException nfe)

  void updateUnit(1: required string id, 2: required UpdateUnitDetails details)
      throws (1: NotFoundException nfe)

  void publishUnit(
    1: required string taskId,
    2: required string unitId,
    3: required string projectId,
    4: required string stackVersionId
  ) throws (1: NotFoundException nfe)

  ChangeStackVersionInUnitResult changeStackVersionInUnit(
    1: required string unitId,
    2: required string stackVersionId
  ) throws (1: NotFoundException nfe)

  void removeUnit(1: required string id) throws (1: NotFoundException nfe)
  unit.ModuleUnit getUnit(1: required string id) throws (1: NotFoundException nfe)

  void reorderUnits(1: required string moduleId, 2:  required list<string> unitIds)
      throws (1: NotFoundException nfe, 2: ReorderConflictException rce)
}
