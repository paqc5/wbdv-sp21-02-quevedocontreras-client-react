import React from 'react';

const CourseEditor = ({history}) =>
    <div>
        <div className="paqc-lessons-navbar-wrapper paqc-module-content-wrapper">
            <div className="navbar navbar-expand-md navbar-light">
                <div className="paqc-lessons-toggler-wrapper">
                    <div className="navbar-brand" href="#">Lessons</div>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#paqc-lesson-navbar"
                        aria-controls="paqc-lesson-navbar"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="paqc-lesson-navbar">
                    <div className="paqc-lessons-navbar">
                        {/* <!-- Lesson 1 --> */}
                  <div
                            className="paqc-lesson-navbar-expand navbar navbar-expand-md">
                            <button className="paqc-lesson-btn"
                                data-bs-toggle="collapse"
                                data-bs-target="#paqc-lesson-1"
                                aria-controls="paqc-lesson-1"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                Lesson 1
                      <div className="paqc-icon paqc-trash-icon">
                                    <button data-bs-toggle="modal"
                                        data-bs-target="#deleteLesson">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </button>
                            <div className="paqc-lesson-content-wrapper paqc-content-wrapper collapse navbar-collapse"
                                id="paqc-lesson-1">
                                <div className="paqc-topics-navbar-wrapper">
                                    <button className="paqc-topic-btn">Topic 1</button>
                                    <button className="paqc-topic-btn">Topic 2</button>
                                    <button className="paqc-topic-btn">Topic 3</button>
                                </div>
                                <div className="paqc-topics-content-wrapper">
                                    <div className="paqc-topic-content">
                                        <h2>Topic Header</h2>
                                        <p>It is a long established fact that a reader will be
                                        distracted by the readable
                                        content of a page when looking at its layout. The
                                        point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of
                            letters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Lesson 2 --> */}
                  <div
                            className="paqc-lesson-navbar-expand navbar navbar-expand-md">
                            <button className="paqc-lesson-btn"
                                data-bs-toggle="collapse"
                                data-bs-target="#paqc-lesson-2"
                                aria-controls="paqc-lesson-2"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                Lesson 2
                      <div className="paqc-icon paqc-trash-icon">
                                    <button data-bs-toggle="modal"
                                        data-bs-target="#deleteLesson">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </button>
                            <div className="paqc-lesson-content-wrapper paqc-content-wrapper collapse navbar-collapse"
                                id="paqc-lesson-2">
                                <div className="paqc-topics-navbar-wrapper">
                                    <button className="paqc-topic-btn">Topic 1</button>
                                    <button className="paqc-topic-btn">Topic 2</button>
                                    <button className="paqc-topic-btn">Topic 3</button>
                                </div>
                                <div className="paqc-topics-content-wrapper">
                                    <div className="paqc-topic-content">
                                        <h2>Topic Header</h2>
                                        <p>It is a long established fact that a reader will be
                                        distracted by the
                                        readable
                                        content of a page when looking at its layout. The
                                        point of using Lorem
                                        Ipsum is
                                        that it has a more-or-less normal distribution of
                            letters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Lesson 2 --> */}
                  <div
                            className="paqc-lesson-navbar-expand navbar navbar-expand-md">
                            <button className="paqc-lesson-btn"
                                data-bs-toggle="collapse"
                                data-bs-target="#paqc-lesson-3"
                                aria-controls="paqc-lesson-3"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                Lesson 3
                      <div className="paqc-icon paqc-trash-icon">
                                    <button data-bs-toggle="modal"
                                        data-bs-target="#deleteLesson">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </button>
                            <div className="paqc-lesson-content-wrapper paqc-content-wrapper collapse navbar-collapse"
                                id="paqc-lesson-3">
                                <div className="paqc-topics-navbar-wrapper">
                                    <button className="paqc-topic-btn">Topic 1</button>
                                    <button className="paqc-topic-btn">Topic 2</button>
                                    <button className="paqc-topic-btn">Topic 3</button>
                                </div>
                                <div className="paqc-topics-content-wrapper">
                                    <div className="paqc-topic-content">
                                        <h2>Topic Header</h2>
                                        <p>It is a long established fact that a reader will be
                                        distracted by the
                                        readable
                                        content of a page when looking at its layout. The
                                        point of using Lorem
                                        Ipsum is
                                        that it has a more-or-less normal distribution of
                            letters.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="paqc-lesson-btn" id="paqc-add-lesson-btn">
                            <i className="fas fa-plus-circle fa-lg"></i>
                    Add Lesson
                  </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
export default CourseEditor