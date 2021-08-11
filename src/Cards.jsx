

function Cards(props){
    return(
        <div className="cards">
          <div className="card">
             <div className="image">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="avater"/>
              </div>
              <div className="title">
                  <h3> {props.title} </h3>
              </div>
              <div className="des">
                  <p> {props.des}</p>
              </div>
          </div>
    </div>
    );
}
export default Cards;