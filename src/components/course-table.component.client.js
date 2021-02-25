import React from 'react';
import CourseRow from './course-row.component.client';
import CourseAdditionTab from './course-addition.component.client';

export default class CourseTable extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      // Course Example
      <div className="paqc-course-table">
        <CourseAdditionTab addCourse={this.props.addCourse} />
        {
          this.props.courses.map((course) => 
          <CourseRow 
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
          />)
        }
      </div>
    )
  }
}