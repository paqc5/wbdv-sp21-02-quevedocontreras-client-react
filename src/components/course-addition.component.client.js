import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class CourseAdditionTab extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    courseName: ''
  }

  setCourseName = (input) => this.setState({ courseName: input })

  addCourse = (newCourse) => {
    if (newCourse === '') {
      newCourse = 'New Course Title'
    }
    this.props.addCourse(newCourse)
    this.setCourseName('')
  }

  // Add Course Tab
  render() {
    return (
    <div className="paqc-add-course-tab paqc-content-wrapper row">
      <div className="paqc-add-course-title col-lg-2">
        Course Manager
      </div>
      <div className="paqc-add-course-input paqc-col">
        <div className="from-group row">
          <div className="col-10">
            <input className="paqc-course-field form-control"
              type="text"
              name=""
              id=""
              placeholder="New Course Title"
              value={this.state.courseName}
              onChange={(event) => this.setCourseName(event.target.value)}
            />
          </div>
          <div className="paqc-icon col-2">
            <a onClick={() => this.addCourse(this.state.courseName)}>
              <i className="fas fa-plus-circle fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="paqc-icon">
        <Link>
          <button>
            <i className="fas fa-folder fa-lg"></i>
          </button>
        </Link>
        <Route path="/courses/table">
          <Link to="/courses/grid">
            <button>
              <i className="fas fa-th fa-lg"></i>
            </button>
          </Link>
        </Route>
        <Route path="/courses/grid">
          <Link to="/courses/table">
            <button>
              <i className="fas fa-th-list fa-lg"></i>
            </button>
          </Link>
        </Route>
        <Link>
          <button>
            <i className="fas fa-sort fa-2x"></i>
          </button>
        </Link>
      </div>
    </div>)
  }
}