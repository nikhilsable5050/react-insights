import profileImg from "./assets/profilepic.png"

function Card(){
    return(
        <div className="card">
            <img src={profileImg} alt="profile pic"></img>
            <h2>NIKHIL SABLE</h2>
            <p>Currently learning React</p>

        </div>
    );
}
export default Card