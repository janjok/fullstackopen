const Notification = ({ message, color }) => {
    if(color === 'red') {
        return <div className="redMessage">{message}</div>
    } else if(color === 'green') {
        return <div className="greenMessage">{message}</div>
    } else {
        return null
    }
}

export default Notification