import { useRouteError, NavLink } from "react-router-dom";
import "../css/errorPage/errorPage.css";
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="errorPage">
            <h1>Are you lost?</h1>
            <p>The url you entered is: {error.statusText}!</p>
            <p>{error.error.message}</p>
            <p>If you would like to go back to the home page, click <NavLink to="/">here.</NavLink> </p>
        </div>
    )
}
export default ErrorPage;