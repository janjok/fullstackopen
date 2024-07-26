import "./Notification.css"

const Notification = ({ message }) => {
    if(message === null){
        return null
    }



    return (
        <div className={message[0] === "D" ? "errorRed" : "error"}>
            {message}
        </div>
    )
}

export default Notification