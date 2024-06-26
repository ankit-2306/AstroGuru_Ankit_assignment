import { Outlet,Navigate } from "react-router-dom"
export default function StepOneVerification(){
    function rerouting(){
        console.log(" go and complete step 3  hooop hoop");
        return <div>Complete previous step</div>
    }
    return localStorage.getItem("stepThreeComplete") ? (<Outlet/> ): (<>{rerouting}<Navigate to='/stepthree' /></>);
}