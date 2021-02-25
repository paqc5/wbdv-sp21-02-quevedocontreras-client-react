import React, { useState } from 'react';
import { Link } from "react-router-dom";

const CourseRow = (
  {
    course,
    deleteCourse,
    updateCourse

  }) => {
  const [editing, setEditing] = useState(false)
  const [newName, setNewName] = useState(course.courseName)
  const [newSection, setNewSection] = useState(course.courseSection)
  const [newSemester, setNewSemester] = useState(course.courseSemester)
  const [newDay, setNewDay] = useState(course.courseDay)
  const [newTime, setNewTime] = useState(course.courseTime)

  const saveNewInfo = () => {
    setEditing(false)
    const updatedCourse = {
      ...course,
      courseName: newName,
      courseSection: newSection,
      courseSemester: newSemester,
      courseDay: newDay,
      courseTime: newTime
    }
    updateCourse(updatedCourse)
  }

  return (
    <div className="paqc-course-row" id={`${course._id}`}>
      <div className={`paqc-course-top-color paqc-${course.courseHeader}-bg`}></div>
      <div className="row">
        <div className="paqc-course-info paqc-col">
          <div className="row">
            <div className="paqc-icon">
              <i className="fas fa-file fa-lg"></i>
            </div>
            <div className="col col-md-7 col-xl-4">
              {!editing &&
                <Link to="/courses/editor"><h3>{course.courseName}</h3></Link>}
              {editing &&
                <div>
                  <h3 className="">Class Title</h3>
                  <input
                    onChange={(event) => setNewName(event.target.value)}
                    className="paqc-course-name-fld form-control form-control-sm" value={newName} />
                </div>
              }
              <div className="paqc-course-info-primary row">
                {!editing &&
                  <h4 className="pl-0 border-left-0"> {course.courseSemester}</h4>}
                {editing &&
                  <div>
                    <h3 className="">Semester</h3>
                    <input
                      onChange={(event) => setNewSemester(event.target.value)}
                      className="paqc-course-semester-fld form-control form-control-sm"
                      value={newSemester}
                    />
                  </div>
                }
                {!editing &&
                  <h4>Section {course.courseSection}</h4>}
                {editing &&
                  <div>
                    <h3 className="">Section</h3>
                    <input
                      onChange={(event) => setNewSection(event.target.value)}
                      className="form-control form-control-sm"
                      value={newSection}
                    /></div>
                }
                {!editing &&
                  <h4 className="pr-0">{course.courseDay} at {course.courseTime}</h4>}
                {editing &&
                  <div>
                    <h3 className="">Semester</h3>
                    <input
                      onChange={(event) => setNewDay(event.target.value)}
                      className="form-control form-control-sm"
                      value={newDay} />
                  </div>
                }
                {editing &&
                  <div>
                    <h3 className="">Semester</h3>
                    <input
                      onChange={(event) => setNewTime(event.target.value)}
                      className="form-control form-control-sm"
                      value={newTime}
                    />
                  </div>
                }
              </div>
            </div>
            <div className="paqc-course-info-secondary paqc-col">
              <div className="row">
                <div className="col-12 col-xl-6">
                  <h4 className="paqc-course-info-owner">Owned by:</h4>
                  <h4 className="paqc-course-info-owner">{course.courseOwner}</h4>
                </div>
                <div className="col-6">
                  <h4 className="paqc-course-info-last-modified">Last Modified:</h4>
                  <h4 className="paqc-course-info-last-modified">{course.courseLastModified}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paqc-course-edit-buttons paqc-icon-button">
          {!editing &&
            <button
              className="paqc-course-edit-button"
              onClick={() => setEditing(true)}>
              <i className="fas fa-edit"></i>
            </button>}
          {editing && <div className="paqc-course-edit-icons">
            <button onClick={() => saveNewInfo()}>
              <i className="fas fa-check"></i>
            </button>
            <button
              onClick={() => deleteCourse(course._id)} data-toggle="modal" data-target="#exampleModal">
              <i className="fas fa-trash"></i>
            </button>
          </div>}
        </div>
      </div>
    </div>)
}
export default CourseRow