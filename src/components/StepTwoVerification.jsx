import { Outlet,Navigate } from "react-router-dom"
export default function StepOneVerification(){
    function rerouting(){
        console.log(" go and complete step 2");
        return <div>Complete previous step</div>
    }
    return localStorage.getItem("stepTwoComplete") ? (<Outlet/> ): (<>{rerouting}<Navigate to='/steptwo' /></>);
}