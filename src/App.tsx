import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.tsx";
import AuthLayout from "@/components/shared/AuthLayout.tsx";
import SignUp from "@/pages/SignUp.tsx";
import Login from "@/pages/Login.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="register" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    )
}
export default App
