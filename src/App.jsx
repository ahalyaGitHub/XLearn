import Nav from "./components/nav";
import './App.css'

const App = () => {
  return (
    <>
      <div>
        <Nav />
        
        <div className="container-fluid bg-dark">
          
            <div className="container">
              <div className="row">
                <div className="col-6 pt-5">
                  <img src="./src/images/home.png" alt="" width={500} height={500} />
                </div>
                <div className="col-6">
                  <p className="text text-light text-center mt-5  fs-5">Provide guidance and support to students who are embarking on their web development journey. Xlearn
                    is here to offer a structured path for getting started and mastering the basics of web development.
                    We just suggest top tamil YouTube channels and to facilitate web page learning journey for the
                    students who don’t know where to start their journey. </p>
                </div>
              </div>
            </div>
       
        </div>
      </div>
    </>
  );
};

export default App;

