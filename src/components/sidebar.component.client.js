import React from 'react';
import { Route, Link } from 'react-router-dom';

const SideBar = () =>
  // Main Sidebar
  <div className="paqc-main-sidebar-wrapper">
    <Route path="/courses/editor">
      <div className="paqc-modules-navbar-wrapper">
        <div className="navbar navbar-expand-md navbar-dark">
          <div className="paqc-modules-toggler-wrapper">
            <button className="navbar-brand" href="#">Modules</button>
            <button className="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#paqc-module-navbar"
              aria-controls="paqc-module-navbar"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="paqc-module-navbar">
            <div className="paqc-modules-navbar">
              <button className="paqc-module-btn" id="paqc-module-1">
                Module 1 - jQuery
                    <div className="paqc-icon paqc-trash-icon">
                  <button data-bs-toggle="modal" data-bs-target="#deleteModule">
                    <i className="fas fa-trash"></i></button>
                </div>
              </button>
              <button className="paqc-module-btn" id="paqc-module-2">
                Module 2 - React
                    <div className="paqc-icon paqc-trash-icon">
                  <button data-bs-toggle="modal" data-bs-target="#deleteModule">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </button>
              <button className="paqc-module-btn" id="paqc-module-3">
                Module 3 - Redux
                    <div className="paqc-icon paqc-trash-icon">
                  <div className="">
                  <button data-bs-toggle="modal" data-bs-target="#deleteModule">
                    <i className="fas fa-trash"></i>
                  </button>
                  </div>
                </div>
              </button>
              <button className="paqc-module-btn" id="paqc-add-module-btn">
                <i className="fas fa-plus-circle fa-lg"></i>
                    Add Module
                  </button>
            </div>
          </div>
        </div>
      </div>
    </Route>
    <Route path="/courses/table">
      <div className="paqc-sidebar-features">
        <div className="paqc-calendar-wrapper">
          <p>Calendar</p><p>Here</p>
        </div>
      </div>
    </Route>
    <Route path="/courses/grid">
      <div className="paqc-sidebar-features">
        <div className="paqc-calendar-wrapper">
          <p>Calendar</p><p>Here</p>
        </div>
      </div>
    </Route>
  </div>
export default SideBar