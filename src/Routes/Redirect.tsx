import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


//will be change type any
export default function Redirect({ to }: { to: any }) {
    let navigate = useNavigate();

    useEffect(() => {
        navigate(to);
    });

    return null;
}