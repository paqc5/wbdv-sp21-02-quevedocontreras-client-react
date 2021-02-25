import React from 'react';
import {Route} from 'react-router-dom';
import CourseManager from './course-manager.component.client';

const MainContent = () => 
    <div className="paqc-main-content-wrapper paqc-col">
        <Route path="/courses">
            <CourseManager/>
        </Route>
    </div>
export default MainContent