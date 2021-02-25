import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({
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
    <div className="paqc-course-card card col-12 col-md-6 col-lg-4 col-xl-3" id={`${course._id}`}>
      <div className="paqc-card-body card-body">
        <Link to="/courses/editor">
          <div className="paqc-course-info">
            {!editing && <h3 className="">{course.courseName}</h3>}
            {editing &&
              <div>
                <h3 className="">Class Title</h3>
                <input
                  onChange={(event) => setNewName(event.target.value)}
                  className="paqc-course-name-fld form-control form-control-sm" value={newName} />
              </div>
            }
            <div className="paqc-course-info-primary">
              <div className="row">
                {!editing &&
                  <h4 className="border-left-0 pl-0">{course.courseSemester}</h4>
                }
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
                  <h4 className="">{course.courseSection}</h4>
                }
                {editing &&
                  <div>
                    <h3 className="">Section</h3>
                    <input
                      onChange={(event) => setNewSection(event.target.value)}
                      className="form-control form-control-sm"
                      value={newSection}
                    />
                  </div>
                }
                {!editing &&
                  <h4 className="pr-0">{course.courseDay} at {course.courseTime}</h4>
                }
                {editing &&
                  <div>
                    <h3 className="">Day</h3>
                    <input
                      onChange={(event) => setNewDay(event.target.value)}
                      className="form-control form-control-sm"
                      value={newDay} />
                    <h3 className="">Time</h3>
                      <input
                        onChange={(event) => setNewTime(event.target.value)}
                        className="form-control form-control-sm"
                        value={newTime}
                      />
                  </div>
                  }
              </div>
            </div>
          </div>
          <div className="paqc-course-info-card row">
            <h4 className="col-12">
              Owned by: {course.courseOwner}
            </h4>
            <h4 className="col-12">
              Last Modified: {course.courseLastModified}
            </h4>
          </div>
        </Link>
        <div className="paqc-course-edit-buttons paqc-icon-button mt-1">
          {!editing &&
            <button
              className="paqc-course-edit-button pl-0"
              onClick={() => setEditing(true)}>
              <i className="fas fa-edit"></i>
            </button>}
          {editing &&
            <div className="paqc-course-edit-icons">
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
export default CourseCard