import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod";
import {Form} from "@/components/ui/form.tsx";
import CustomInput from "@/components/shared/CustomInput.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate} from "react-router-dom";

interface AuthFormProps {
    type: "register" | "login"
}

const AuthForm = ({type}: AuthFormProps) => {
    const navigate = useNavigate();

    const authFormSchema = (type:FormType) =>{
        return z.object({
            firstName: type == "register" ? z.string().min(2).max(50) : z.string().optional(),
            lastName: type == "register" ? z.string().min(2).max(50) : z.string().optional(),
            phone: type == "register" ? z.string().regex(/^(?:\+250|0)7[238]\d{7}$/) : z.string().optional(),
            email: z.string().email(),
            password: z.string().min(8).max(20),
        })
    }

    const formSchema = authFormSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email:"",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        navigate("/dashboard")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-xl p-8 w-1/3">
                {type === "login" && <p className="text-center text-2xl text-gray-500 font-bold">Welcome</p>}
                <h3 className="text-center text-4xl text-gray-900 font-bold my-6">
                    {type === "register" ? "Signup" : "Login to SupaMenu"}
                </h3>
                {type === "login" && <p className="text-center text-2xl text-gray-500 font-bold">
                    Enter your email and password below
                </p>}
                <div className="flex flex-col items-start gap-y-4 w-full  my-8">
                    {type === "register" && (
                        <>
                            <CustomInput title="First name" name="firstName" type="text" capitalize/>
                            <CustomInput title="Last name" name="lastName" type="text" capitalize/>
                            <CustomInput title="Phone number" name="phone" type="tel" capitalize/>
                        </>
                    )}
                    <CustomInput title="Email" name="email" type="email" capitalize/>
                    <CustomInput title="Password" name="password" className="bg-gray-100" type="password" capitalize/>
                </div>
                <Button type="submit" className="text-white bg-orange-400 hover:bg-orange-500 w-full py-8 text-xl cursor-pointer">
                    {type === "register" ? "Signup" : "Login"}
                </Button>
                <Link to={type === "login" ? "/auth/register": "/auth/login"} className="justify-center text-xl leading-6 text-gray-500 mt-4 hover:text-[1.3rem] cursor-pointer transition-all duration-300 flex items-center gap-2">
                    {type === "register" ? "Already have an account?" : "Don't have an account?"}
                    <p className="text-blue-500">
                        {type === "register" ? "Login" : "Signup"}
                    </p>
                </Link>
                {type === "login" &&  <Link to="/auth/reset" className="justify-center text-xl leading-6 text-gray-500 mt-4 hover:text-[1.3rem] cursor-pointer transition-all duration-300 flex items-center gap-2">
                    Forgot your password? <p className="text-blue-500">Reset</p>
                </Link>}
            </form>
        </Form>
    )
}

export default AuthForm
