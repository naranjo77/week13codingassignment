import React from 'react';
import profile from './componets/profile';
import './App.css';


export default class App extends React.Component {
    render() {
        console.log("App.render()");
        return(
            <section className="vh-100 profile">
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-xl-4">
                    <div className="card profile-card">
                        <div className="card-body text-center">
                          <div className="mt-3 mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                 className="rounded-circle img-fluid profile-image" />
                          </div>
                          <h4 className="mb-2">Your Name</h4>
                          <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> <a
                             href="#!">yourdomain.com</a></p>
                          <div className="mb-4 pb-2">
                            <button type="button" class="btn btn-outline-primary btn-floating">
                              <i className="bi bi-facebook"></i>
                            </button>
                            <button type="button" className="btn btn-outline-primary btn-floating">
                              <i className="bi bi-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-outline-primary btn-floating">
                              <i className="bi bi-skype"></i>
                            </button>
                          </div>
                          <button type="button" className="btn btn-primary position-relative btn-rounded btn-lg">
                            Follow Me 
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              0 <span className="visually-hidden">followers</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
           </section>
        )
    }

}

