import "./component.css"
const CardDashboard = ({desc , icon , data}) => {

    return (
        <div className="card-dashboard">
            <section>{icon}</section>
            <h2>{data}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default CardDashboard