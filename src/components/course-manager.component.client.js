import React from 'react';
import { Route } from 'react-router-dom';
import CourseGrid from './course-grid.component.client';
import CourseTable from './course-table.component.client';
import CourseEditor from './course-editor.component.client';
import './course-manager.style.client.css';
import courseService from '../services/course.service.client';

export default class CourseManager extends React.Component {

  state = {
    courses:[]
  }

  componentDidMount = () =>
    courseService.findAllCourses().then(courses => this.setState({courses}))

  addCourse = (newCourseName) => {
    const newCourse = {
      courseHeader: "green-light",
      courseName: newCourseName,
      courseSemester: "TBD",
      courseSection: "TBD",
      courseDay: "TBD",
      courseTime: "TBD",
      courseOwner: "me",
      courseLastModified: "TBD"
    }

    courseService.createCourse(newCourse)
      .then(course => this.setState(prevState => ({
        courses: [course, ...prevState.courses]
      })))
  }

  deleteCourse = (courseIdToDelete) =>
    courseService.deleteCourse(courseIdToDelete)
      .then(response => {
        this.setState(prevState => {
          let nextState = {...prevState}
          nextState.courses = prevState.courses
            .filter(course => course._id !== courseIdToDelete)
          return nextState
        })
      })
  

  updateCourse = (updatedCourse) => {
    courseService.updateCourse(updatedCourse._id, updatedCourse)
      .then(status => this.setState((prevState) => ({
        ...prevState,
        courses: prevState.courses.map(
          (course) => course._id === updatedCourse._id ? updatedCourse : course)
      })))
  }

  render() {
    return(
      <div className="paqc-course-manager-wrapper">
        <Route path="/courses/table">
          <CourseTable 
            courses={this.state.courses} 
            deleteCourse={this.deleteCourse}
            updateCourse={this.updateCourse}
            addCourse={this.addCourse}
          />
        </Route>
        <Route path="/courses/grid">
          <CourseGrid 
            courses={this.state.courses} 
            deleteCourse={this.deleteCourse}
            updateCourse={this.updateCourse}
            addCourse={this.addCourse}
          />
        </Route>
        <Route path="/courses/editor" render={(props) => 
          <CourseEditor {...props}/>}>
        </Route>
      </div>
    )
  }
}