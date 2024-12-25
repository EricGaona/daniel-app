function Message({ title, message, person }) {
    return (
        <div className="m-32 p-10 bg-white rounded-lg">
            <h2 className="text-black font-bold">{title} <strong className="text-red-500">{person}</strong></h2>
            <p className="text-black font-bold">{message}</p>
        </div>
    );
}

export default Message;