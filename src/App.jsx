import Nav from "./components/nav";
import './App.css'

const App = () => {
  return (
    <>
      <div>
        <Nav />

        <div className="container-fluid">


          <div className="row">
            <div className="col-md-6">
              <img src="./src/images/home.png" alt="studyImg" className="img-fluid w-500"/>
            </div>
            <div className="col-md-6">
              <p className="text text-light text-center mt-5 pt-5 fs-5">Provide guidance and support to students who are embarking on their web development journey. Xlearn
                is here to offer a structured path for getting started and mastering the basics of web development.
                We just suggest top tamil YouTube channels and to facilitate web page learning journey for the
                students who don’t know where to start their journey. </p>
                <button type="button" class="btn btn-outline-warning fw-bold">Start Learning</button>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default App;

