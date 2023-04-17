import {Link} from "react-router-dom";

const UserCards = ({usersData}) => {
    return(
        usersData && usersData.map((user) => {
                  return(
                      <div className="col-5 col-lg-4 col-xl-3 mt-2 p-1" key={user._id}>
                          <Link to={`/meal/users/profile/${user._id}`} className="text-decoration-none">
                              <div className="card">
                                  <div className="card-body ">
                                      <h4 className="card-title">{user.name}
                                          {(user.role === "admin")?<label className="bg-secondary text-white rounded-pill fw-lighter ps-2 pe-2 wd-font-12 align-top">admin</label>: ""}
                                          {(user.role === "chef")?<label className="bg-secondary text-white rounded-pill fw-lighter ps-2 pe-2 wd-font-12 align-top">chef</label>: ""}
                                      </h4>
                                      <h6 className="card-subtitle mb-2 text-muted">{user.userName}</h6>
                                      <div className="text-black">
                                          <i className="fa-solid fa-heart text-danger"></i> {user.category}</div>
                                  </div>
                              </div>
                          </Link>
                      </div>
                  )
              }
        )
    )
}

export default UserCards;