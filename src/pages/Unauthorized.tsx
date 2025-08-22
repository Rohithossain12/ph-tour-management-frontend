import { Link } from "react-router";

export default function Unauthorized() {
    return (
        <div>
            <h1>Unauthorized</h1>
            <p>You do not have permission to view this page.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
};
