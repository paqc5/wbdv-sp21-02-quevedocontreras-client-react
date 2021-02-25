import React from 'react';
import CourseCard from './course-card.component.client';
import CourseAdditionTab from './course-addition.component.client';

export default class CourseGrid extends React.Component {
  
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="paqc-course-grid">
        <CourseAdditionTab addCourse={this.props.addCourse} />
        <div className="row">
        {
          this.props.courses.map((course, ndx) =>
            <CourseCard 
              key={course._id}
              id={course._id}
              course={course}
              courseHeader={course.courseHeader}
              courseName={course.courseName}
              courseSemester={course.courseSemester}
              courseSection={course.courseSection}
              courseDay={course.courseDay}
              courseTime={course.courseTime}
              courseOwner={course.courseTime}
              courseLastModified={course.courseLastModified}
              deleteCourse={this.props.deleteCourse}
              updateCourse={this.props.updateCourse}
            />
          )
        }
        </div>
      </div>
    )
  }
}