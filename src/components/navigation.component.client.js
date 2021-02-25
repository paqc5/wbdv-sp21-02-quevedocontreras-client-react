import React from 'react';

const NavigationBar = () =>
  <div className="paqc-main-navigation-wrapper col-12" aria-label="Site Menu">
    <ul>
      <a className="" href="">
        <li>
          <i className="fas fa-home"></i>
          <p>Home</p>
        </li>
      </a>
      <a className="active" href="">
        <li>
          <i className="fas fa-book"></i>
          <p className="font-size-xs">Courses</p>
        </li>
      </a>
      <a href="">
        <li>
          <i className="fas fa-user"></i>
          <p className="font-size-xs">Profile</p>
        </li>
      </a>
    </ul>
  </div>
export default NavigationBar