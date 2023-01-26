function Service(props) {
    return (
        <a href="#">
            <div className="card">
                <img src={props.img} alt="" className="card-img" />
                <p className="card-title">{props.title}</p>
                <p className="card-text">{props.description}</p>
            </div>
        </a>
    );
}

export default Service;