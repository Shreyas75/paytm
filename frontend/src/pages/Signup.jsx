import { useState } from "react"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import axios from "axios";



export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();




    return (
        <div className="bg-gray-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"}/>
                    <SubHeading label={"Enter your details to create an account"} />
                    <InputBox onChange={(e) => {
                        setFirstName(e.target.value)
                    }} placeholder="John" label={"First Name"}/>
                    <InputBox onChange={(e) => {
                        setLastName(e.target.value)
                    }} placeholder="Doe" label={"Last Name"}/>
                    <InputBox onChange={(e) => {
                        setUsername(e.target.value)
                    }} placeholder="Shreyas@gmail.com" label={"Email"}/>
                    <InputBox onChange={(e) => {
                        setPassword(e.target.value)
                    }} placeholder="123456" label={"Password"} />
                    <div className="pt-4">
                        <Button onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                firstName,
                                lastName,
                                password
                            })
                            localStorage.setItem("token", response.data.token);
                            navigate("/dashboard")
                        }} label={"Sign Up"}/>
                    </div>
                    <BottomWarning label={"Already have an account?"} linkText={"Sign In"} to={"/signin"}/>
                </div>
            </div>
        </div>
    )
}