import { useNavigate, useOutletContext, Link } from "react-router-dom";
import app from "../utils/axiosConfig";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar_url, setAvatarUrl] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { setIsUser } = useOutletContext();
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();

        const errors = {};
        if (!name) {
            errors.name = "Пожалуйста, введите имя";
        }
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
        if (!avatar_url) {
            errors.avatar_url = "Пожалуйста, введите URL аватара";
        }
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        await app
            .post("/auth/register", {
                name: name,
                email: email,
                password: password,
                avatar_url: avatar_url,
            })
            .then((res) => {
                setIsUser(res.data);
                localStorage.setItem("user", JSON.stringify(res.data));
                toast.success("Вы успешно зарегистрировались!");
                setTimeout(() => navigate("/feed"), 1000);
            })
            .catch((error) => {
                if(error.response.data.meta.target[0] === "email") {
                    toast.error("Этот email уже используется!");
                } else {
                    toast.error("Произошла ошибка при регистрации");
                }
                setEmail("");
                setPassword("");
            });
    };

    useEffect(() => {}, [name, email, password, avatar_url]);

    return (
        <div className="mx-[33%] xl:my-24 pt-10 px-10 shadow rounded-xl">
            <div className="flex flex-col items-center px-4 pt-4 bg-gray rounded-xl">
                <img
                    className="min-h-[100px] h-full object-cover rounded-xl"
                    src="header_user.jpg"
                    alt="img"
                />
                <div className="py-6">
                    <h4>Введите данные для регистрации</h4>
                </div>
            </div>
            <div className="flex flex-col my-8">
                <form onSubmit={handleRegistration}>
                <div className="flex flex-col gap-8 items-center">
                    <div className="max-w-[400px] w-full flex flex-col gap-2">
                            <h5>Ваше имя</h5>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <h4>{errors.name}</h4>}
                        </div>
                        <div className="max-w-[400px] w-full flex flex-col gap-2">
                            <h5>Ваш email</h5>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <h4>{errors.email}</h4>}
                        </div>
                        <div className="max-w-[400px] w-full flex flex-col gap-2">
                            <h5>Ваш пароль</h5>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <h4>{errors.password}</h4>}
                        </div>
                        <div className="max-w-[400px] w-full flex flex-col gap-2">
                            <h5>Ссылка на вашу аватарку</h5>
                            <input
                                type="text"
                                value={avatar_url}
                                onChange={(e) => setAvatarUrl(e.target.value)}
                            />
                            {errors.avatar_url && <h4>{errors.avatar_url}</h4>}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center my-10">
                        <button
                            type="submit"
                            className="bg-primary75 opacity-75 hover:opacity-100 text-white py-2.5 px-4 rounded-xl"
                        >
                            Зарегистрироваться
                        </button>
                        <Link
                            className="flex items-center px-4"
                            to="/signin">
                            <h5 className="hover:text-primary75">Авторизоваться</h5>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
