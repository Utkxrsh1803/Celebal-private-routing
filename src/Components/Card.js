import './Card.css'
const Card = (props) => {
    return (
        <div className="carddiv">
            {props.children}
        </div>
    )
}

export default Card;