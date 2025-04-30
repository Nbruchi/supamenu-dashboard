import Header from "../components/shared/Header.tsx";
import CustomButton from "@/components/shared/CustomButton.tsx";
import {registrationSteps} from "@/constants";

const Home = () => {
    return (
        <>
            <Header/>
            <div className="bg-black flex-vertical p-16 scroll-pt-20 justify-center items-center w-2/5">
                <h2 className="text-6xl text-white block">
                    Register your restaurant on SupaMenu
                </h2>
                <p className="text-gray-300 text-4xl flex items-start">
                    for free and get revenue!
                </p>

                <div className="flex items-center gap-6 mb-20">
                    <CustomButton
                        className="bg-orange-400 hover:bg-orange-500" title="Register your restaurant" link="/auth/register"
                    />
                    <CustomButton
                        className="bg-black border border-white hover:bg-gray-950"
                        title="Restaurant already registered? Signin"
                        link="/auth/login"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-300 w-full">
                <h3 className="text-4xl font-bold mb-6">How it works</h3>
                <ul className="flex flex-wrap justify-around items-center mt-8 w-full">
                    {registrationSteps.map(({icon: Icon, id, title}) => {
                        return (
                            <li key={id} className="flex-center flex-col rounded-lg bg-white p-6">
                                <Icon color="orange" size={40}/>
                                <p className="font-bold my-4 text-2xl">Step {id}</p>
                                <p className="font-light text-xl">{title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Home
