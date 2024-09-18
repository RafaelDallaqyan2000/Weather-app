import { Route } from "react-router-dom";
import { Home } from "../pages";
import Redirect from "./Redirect";

function Routes() {



    return (
        <>
            <Route
                path="home"
                element={<Home />}
            />
            <Route
                path="*"
                element={<Redirect to={<Home />} />}
            />
        </>
    );
}

export default Routes;