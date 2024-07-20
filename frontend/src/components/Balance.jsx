export const Balance = ({ value }) => {

    // axios.get("http://localhost:3000/api/v1/account/balance", )
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}