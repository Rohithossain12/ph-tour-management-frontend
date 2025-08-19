import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router"

export default function Verify() {

    const location = useLocation()
    console.log(location.state);

    const navigate = useNavigate()

    const [email] = useState(location.state)


    useEffect(() => {
        if (!email) {
            navigate("/")
        }
    }, [email])


    return (
        <div>
            <h1>This is the verification page</h1>
        </div>
    )
}