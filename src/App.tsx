import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home, SignUp, Login, Dashboard, Clients } from "@/pages";
import AuthLayout from "@/components/shared/AuthLayout"
import DashboardLayout from "@/components/shared/DashboardLayout.tsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="register" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="/dashboard" element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="clients" element={<Clients/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
export default App
