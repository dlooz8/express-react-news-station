import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import app from "../utils/axiosConfig";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { setIsUser } = useOutletContext();

    const handleAuthorization = async (e) => {
        e.preventDefault();

        const errors = {};
        if (!email) {
            errors.email = "Пожалуйста, введите email";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Неправильный формат email";
        }
        if (!password) {
            errors.password = "Пожалуйста, введите пароль";
        } else if (password.length < 8) {
            errors.password = "Пароль должен содержать не менее 8 символов";
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        await app
            .post("/auth/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                setIsUser(res.data);
                localStorage.setItem("user", JSON.stringify(res.data));
                toast.success("Вы вошли в аккаунт");
                navigate("/feed");
            })
            .catch(function (error) {
                toast.error(error.response.data);
            });
    };

    useEffect(() => {}, [email, password]);

    return (
        <div className="mx-[33%] xl:my-24 pt-10 px-10 shadow rounded-xl">
            <div className="flex flex-col items-center px-4 pt-4 bg-gray rounded-xl">
                <img
                    className="min-h-[100px] h-full object-cover rounded-xl"
                    src="header_user.jpg"
                    alt="img"
                />
                <div className="py-6">
                    <h4>Добро пожаловать!</h4>
                </div>
            </div>
            <div className="flex flex-col my-8">
                <form onSubmit={handleAuthorization}>
                    <div className="flex flex-col gap-8 items-center">
                        <div className="max-w-[400px] w-full flex flex-col gap-2">
                            <h5>Ваш email</h5>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <p className="text-red-500">{errors.email}</p>
                            )}
                        </div>
                        <div className="max-w-[400px] w-full flex flex-col gap-2">
                            <h5>Ваш пароль</h5>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && (
                                <p className="text-red-500">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center my-10">
                        <button
                            type="submit"
                            className="bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 rounded-xl"
                        >
                            Авторизоваться
                        </button>
                        <Link
                            to="/registration"
                            className="flex items-center px-4"
                        >
                            <h5 className="hover:text-primary75">
                                Зарегистрироваться
                            </h5>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
