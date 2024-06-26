import { Outlet,Navigate } from "react-router-dom"
export default function StepOneVerification(){
    function rerouting(){
        console.log("complete step 1");
        return <div>Complete previous step</div>
    }
    return localStorage.getItem("stepOneComplete") ? (<Outlet/> ): (<>{rerouting}<Navigate to='/' /></>);
}