const Main = () => {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div>
                      
                      <img src="./src/images/home.png" alt="studyImg" className="img-fluid p-4" width={600} />
                      <p className="t text-light text-center fw-bold fs-5">EMPOWERING YOUR WEB DREAMS, ONE CLICK AT A TIME!</p>
                  </div>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              
                  <p className="text text-light text-center pe-5 fs-4">Provide guidance and support to students who are embarking on their web development journey. Xlearn
                      is here to offer a structured path for getting started and mastering the basics of web development.
                      We just suggest top tamil YouTube channels and to facilitate web page learning journey for the
                      students who don’t know where to start their journey. </p>
                  <button type="button" className="btn btn-outline-warning ps-5 pe-5 pt-2 pb-2 mt-5 fw-bold">Start Learning</button>
              </div>
          </div>
      </div>
  );
};

export default Main;
