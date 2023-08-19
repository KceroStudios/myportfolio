
const Capacitation = ({capacitation, date, details}) => {
    return(
        <div className="capacitation">
            <div className="date">{date}</div>
            <div className="details">
                <span>{capacitation} </span>
                <span>{details}</span>
            </div>
        </div>
    )
}

export default Capacitation