
import AuthComponent from "../component/auth/AuthComponent";
import AuthwithGoogle from "../component/auth/AuthwithGoogle";
import NavBar from "../component/layout/NavBar/NavBar";


const AuthPage = () =>{
    return (
        <>
            <NavBar />
            {/* <AuthComponent /> */}
            <AuthwithGoogle />
        </>
    );
};
export default AuthPage;