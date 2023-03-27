import Login from "../../Components/Login/Login";


function PageLogin() {
  return (
    <div>
      <div className='container' style={{marginTop: "40px"}}>
        <div className="row justify-content-md-center">
          <div className="col col-lg-6" style={{border: "40px"}}>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLogin;
