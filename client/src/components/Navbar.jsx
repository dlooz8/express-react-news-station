import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import app from "../utils/axiosConfig";

const Navbar = () => {
    const { isUser, setIsUser } = useOutletContext();
    const [isAuth, setIsAuth] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleLogOut = async (e) => {
        e.preventDefault();
        await app
            .get("/auth/logout")
            .then((res) => {
                localStorage.removeItem("user");
                setIsAuth(false);
                setIsUser("");
                toast.success(res.data);
                navigate("/");
            })
            .catch(() => {
                toast.error("Ошибка сервера. Попробуйте обновить страницу.");
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/searchnews/' + search);
    };

    const handleAuth = () => {
        if (isUser === "") {
            setIsAuth(false);
        } else {
            setIsAuth(true);
        }
    };

    const checkAuth = async () => {
        await app
            .get("/auth/check-auth")
            .then(() => {
                setIsUser(JSON.parse(localStorage.getItem("user")));
                setIsAuth(true);
            })
            .catch(() => {
                setIsAuth(false);
            });
    };
    
    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        
        handleScrollToTop();
        handleAuth();
    }, [isUser]);
    
    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <div className="flex justify-between 2xl:container 2xl:mx-auto xl:mx-32 my-8 items-center align-middle font-medium">
            <Link to="/">News Station!</Link>
            <div className="dropdown">
                <button className="dropbtn flex justify-between gap-2 items-center">
                    <h5>Категории</h5>
                    <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 6.25C5.75391 6.25 5.53516 6.16797 5.37109 6.00391L0.996094 1.62891C0.640625 1.30078 0.640625 0.726562 0.996094 0.398438C1.32422 0.0429688 1.89844 0.0429688 2.22656 0.398438L6 4.14453L9.74609 0.398437C10.0742 0.0429687 10.6484 0.0429687 10.9766 0.398437C11.332 0.726562 11.332 1.30078 10.9766 1.62891L6.60156 6.00391C6.4375 6.16797 6.21875 6.25 6 6.25Z"
                            fill="#3E3232"
                            fillOpacity="0.5"
                        />
                    </svg>
                </button>
                <div className="dropdown-categories xl:left-[-132px] 2xl:left-[-182px]">
                    <div className="car">
                        <div className="flex justify-between gap-4 p-4 align-middle items-center right-8">
                            <img
                                className="object-cover min-w-[190px] min-h-[190px] rounded-xl"
                                src="/car.jpg"
                                alt="car"
                            />
                            <div className="flex flex-col gap-3 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg
                                        width="4"
                                        height="11"
                                        viewBox="0 0 4 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            y="0.5"
                                            width="4"
                                            height="10"
                                            rx="2"
                                            fill="#F81539"
                                        />
                                    </svg>
                                    <h5>Автомобили</h5>
                                </div>
                                <Link to="/searchnews/Автомобили обзор">
                                    <h6 className="red-hover">Обзоры</h6>
                                </Link>
                                <Link to="/searchnews/Автомобили эксплуатация">
                                    <h6 className="red-hover">Эксплуатация</h6>
                                </Link>
                                <Link to="/searchnews/Автомобили обслуживание">
                                    <h6 className="red-hover">Обслуживание</h6>
                                </Link>
                                <Link to="/searchnews/Автомобили советы">
                                    <h6 className="red-hover">Советы</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="tech">
                        <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img
                                className="object-cover min-w-[190px] min-h-[190px] rounded-xl"
                                src="/tech.jpg"
                                alt="tech"
                            />
                            <div className="flex flex-col gap-3 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg
                                        width="4"
                                        height="11"
                                        viewBox="0 0 4 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            y="0.5"
                                            width="4"
                                            height="10"
                                            rx="2"
                                            fill="#F81539"
                                        />
                                    </svg>
                                    <h5>Технологии</h5>
                                </div>
                                <Link to="/searchnews/Технологии обзор">
                                    <h6 className="red-hover">Обзоры</h6>
                                </Link>
                                <Link to="/searchnews/Технологии новинка">
                                    <h6 className="red-hover">Новинки</h6>
                                </Link>
                                <Link to="/searchnews/Технологии сравнение">
                                    <h6 className="red-hover">Сравнения</h6>
                                </Link>
                                <Link to="/searchnews/Технологии устройства">
                                    <h6 className="red-hover">Устройства</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="girl">
                        <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img
                                className="object-cover min-w-[190px] min-h-[190px] rounded-xl"
                                src="/girl.jpg"
                                alt="girl"
                            />
                            <div className="flex flex-col gap-3 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg
                                        width="4"
                                        height="11"
                                        viewBox="0 0 4 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            y="0.5"
                                            width="4"
                                            height="10"
                                            rx="2"
                                            fill="#F81539"
                                        />
                                    </svg>
                                    <h5>Мода</h5>
                                </div>
                                <Link to="/searchnews/Женское обзор">
                                    <h6 className="red-hover">Парфюмерия</h6>
                                </Link>
                                <Link to="/searchnews/Женское макияж">
                                    <h6 className="red-hover">Макияж</h6>
                                </Link>
                                <Link to="/searchnews/Женское одежда">
                                    <h6 className="red-hover">Одежда</h6>
                                </Link>
                                <Link to="/searchnews/Женское обувь">
                                    <h6 className="red-hover">Обувь</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="sport">
                        <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img
                                className="object-cover min-w-[190px] min-h-[190px] rounded-xl"
                                src="/sport.png"
                                alt="sport"
                            />
                            <div className="flex flex-col gap-3 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg
                                        width="4"
                                        height="11"
                                        viewBox="0 0 4 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            y="0.5"
                                            width="4"
                                            height="10"
                                            rx="2"
                                            fill="#F81539"
                                        />
                                    </svg>
                                    <h5>Спорт</h5>
                                </div>
                                <Link to="/searchnews/Спорт обзор">
                                    <h6 className="red-hover">Рекомендации</h6>
                                </Link>
                                <Link to="/searchnews/Спорт новое">
                                    <h6 className="red-hover">Нововведения</h6>
                                </Link>
                                <Link to="/searchnews/Спорт достижение">
                                    <h6 className="red-hover">Достижения</h6>
                                </Link>
                                <Link to="/searchnews/Спорт советы">
                                    <h6 className="red-hover">Советы</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="food">
                        <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img
                                className="object-cover min-w-[190px] min-h-[190px] rounded-xl"
                                src="/food.jpg"
                                alt="food"
                            />
                            <div className="flex flex-col gap-3 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg
                                        width="4"
                                        height="11"
                                        viewBox="0 0 4 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            y="0.5"
                                            width="4"
                                            height="10"
                                            rx="2"
                                            fill="#F81539"
                                        />
                                    </svg>
                                    <h5>Еда</h5>
                                </div>
                                <Link to="/searchnews/Еда рецепты">
                                    <h6 className="red-hover">Рецепты</h6>
                                </Link>
                                <Link to="/searchnews/Еда кулинария">
                                    <h6 className="red-hover">Кулинария</h6>
                                </Link>
                                <Link to="/searchnews/Еда оборудование">
                                    <h6 className="red-hover">Оборудование</h6>
                                </Link>
                                <Link to="/searchnews/Еда советы">
                                    <h6 className="red-hover">Советы</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="music">
                        <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img
                                className="object-cover min-w-[190px] min-h-[190px] rounded-xl"
                                src="/music.jpg"
                                alt="music"
                            />
                            <div className="flex flex-col gap-3 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg
                                        width="4"
                                        height="11"
                                        viewBox="0 0 4 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            y="0.5"
                                            width="4"
                                            height="10"
                                            rx="2"
                                            fill="#F81539"
                                        />
                                    </svg>
                                    <h5>Музыка</h5>
                                </div>
                                <Link to="/searchnews/Музыка новинка">
                                    <h6 className="red-hover">Новинки</h6>
                                </Link>
                                <Link to="/searchnews/Музыка исполнитель">
                                    <h6 className="red-hover">Исполнители</h6>
                                </Link>
                                <Link to="/searchnews/Музыка концерт">
                                    <h6 className="red-hover">Концерты</h6>
                                </Link>
                                <Link to="/searchnews/Музыка инструмент">
                                    <h6 className="red-hover">Инструменты</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/contactus" className="red-hover">
                <h5>Контакты</h5>
            </Link>
            <Link to="/aboutus" className="red-hover">
                <h5>О нас</h5>
            </Link>
            <form onSubmit={(e) => handleSearch(e)} className="flex justify-between items-center text-xs gap-4 bg-gray rounded-xl px-4 py-1.5">
                <svg
                    width="6"
                    height="18"
                    viewBox="0 0 6 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 13.0625C4.17188 13.0625 5.1875 14.0781 5.1875 15.25C5.1875 16.4609 4.17188 17.4375 3 17.4375C1.78906 17.4375 0.8125 16.4609 0.8125 15.25C0.8125 14.0781 1.78906 13.0625 3 13.0625ZM3 6.8125C4.17188 6.8125 5.1875 7.82812 5.1875 9C5.1875 10.2109 4.17188 11.1875 3 11.1875C1.78906 11.1875 0.8125 10.2109 0.8125 9C0.8125 7.82812 1.78906 6.8125 3 6.8125ZM3 4.9375C1.78906 4.9375 0.8125 3.96094 0.8125 2.75C0.8125 1.57812 1.78906 0.5625 3 0.5625C4.17188 0.5625 5.1875 1.57812 5.1875 2.75C5.1875 3.96094 4.17188 4.9375 3 4.9375Z"
                        fill="#3E3232"
                    />
                </svg>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray w-full h-full 2xl:w-[280px] max-h-[44px] outline-none color-black"
                    type="text"
                    placeholder="Поиск"
                />
                <button type="submit">
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.5312 18.3438C21.1172 18.9688 21.1172 19.9453 20.5312 20.5703C19.9062 21.1562 18.9297 21.1562 18.3047 20.5703L13.6562 15.8828C12.0547 16.9375 10.1016 17.4844 7.99219 17.2109C4.39844 16.7031 1.50781 13.7734 1.03906 10.2188C0.375 4.90625 4.86719 0.414062 10.1797 1.07812C13.7344 1.54688 16.6641 4.4375 17.1719 8.03125C17.4453 10.1406 16.8984 12.0938 15.8438 13.6562L20.5312 18.3438ZM4.08594 9.125C4.08594 11.8984 6.3125 14.125 9.08594 14.125C11.8203 14.125 14.0859 11.8984 14.0859 9.125C14.0859 6.39062 11.8203 4.125 9.08594 4.125C6.3125 4.125 4.08594 6.39062 4.08594 9.125Z"
                            fill="#3E3232"
                        />
                    </svg>
                </button>
            </form>
            {isAuth ? (
                <div className="dropdown">
                    <button className="dropbtn flex justify-between gap-4 items-center">
                        <img
                            className="object-cover w-[48px] h-[48px] rounded-xl"
                            src={isUser.avatar_url}
                            alt="avatar"
                        />
                        <h5 className="text-xs">{isUser.name}</h5>
                        <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 6.25C5.75391 6.25 5.53516 6.16797 5.37109 6.00391L0.996094 1.62891C0.640625 1.30078 0.640625 0.726562 0.996094 0.398438C1.32422 0.0429688 1.89844 0.0429688 2.22656 0.398438L6 4.14453L9.74609 0.398437C10.0742 0.0429687 10.6484 0.0429687 10.9766 0.398437C11.332 0.726562 11.332 1.30078 10.9766 1.62891L6.60156 6.00391C6.4375 6.16797 6.21875 6.25 6 6.25Z"
                                fill="#3E3232"
                                fillOpacity="0.5"
                            />
                        </svg>
                    </button>
                    <div className="dropdown-pages p-4 gap-4 left-4">
                        <Link
                            to="/usernews"
                            className="flex red-hover items-center gap-3"
                        >
                            <svg
                                width="15"
                                height="18"
                                viewBox="2 0 16 16"
                                fill="#3E3232"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.3125 9.0625C11.9648 9.0625 14.125 11.2227 14.125 13.875C14.125 14.3672 13.7148 14.75 13.25 14.75H2.75C2.25781 14.75 1.875 14.3672 1.875 13.875C1.875 11.2227 4.00781 9.0625 6.6875 9.0625H9.3125ZM3.1875 13.4375H12.7852C12.5664 11.7148 11.0898 10.375 9.3125 10.375H6.6875C4.88281 10.375 3.40625 11.7148 3.1875 13.4375ZM8 7.75C6.05859 7.75 4.5 6.19141 4.5 4.25C4.5 2.33594 6.05859 0.75 8 0.75C9.91406 0.75 11.5 2.33594 11.5 4.25C11.5 6.19141 9.91406 7.75 8 7.75ZM8 2.0625C6.76953 2.0625 5.8125 3.04688 5.8125 4.25C5.8125 5.48047 6.76953 6.4375 8 6.4375C9.20312 6.4375 10.1875 5.48047 10.1875 4.25C10.1875 3.04688 9.20312 2.0625 8 2.0625Z"
                                    fillOpacity="0.75"
                                />
                            </svg>
                            { isUser.id == import.meta.env.VITE_ADMIN_ID ? (
                                <h6 className="red-hover text-nowrap">Управление новостями</h6>
                            ) : (
                                <h6 className="red-hover">Мои новости</h6>
                            )}
                        </Link>
                        <Link
                            to="/createnews"
                            className="flex red-hover items-center gap-3"
                        >
                            <svg
                                width="15"
                                height="18"
                                viewBox="2 0 34 34"
                                fill="#3E3232"
                            >
                                <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"
                                fillOpacity="0.75"
                            />
                            </svg>
                            <h6 className="red-hover">Создать новость</h6>
                        </Link>
                        <Link
                            to="/userbookmarks"
                            className="flex red-hover items-center gap-3"
                        >
                            <svg
                                width="15"
                                height="18"
                                viewBox="0 0 13 15"
                                fill="#3E3232"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.9375 0.75C10.6484 0.75 11.25 1.35156 11.25 2.0625V13.875C11.25 14.5586 10.5117 14.9688 9.91016 14.6406L6 12.3438L2.0625 14.6406C1.46094 14.9688 0.75 14.5586 0.75 13.875V2.0625C0.75 1.35156 1.32422 0.75 2.0625 0.75H9.9375ZM9.9375 13.1094V2.22656C9.9375 2.14453 9.85547 2.0625 9.74609 2.0625H2.19922C2.11719 2.0625 2.0625 2.14453 2.0625 2.22656V13.1094L6 10.8125L9.9375 13.1094Z"
                                    fillOpacity="0.75"
                                />
                            </svg>
                            <h6 className="red-hover">Мои закладки</h6>
                        </Link>
                        <Link
                            to="/"
                            onClick={handleLogOut}
                            className="flex red-hover items-center gap-3"
                        >
                            <svg
                                width="15"
                                height="13"
                                viewBox="0 0 13 15"
                                fill="#3E3232"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.375 11.125C4.83984 11.125 5.25 11.5352 5.25 12C5.25 12.4922 4.83984 12.875 4.375 12.875H2.625C1.14844 12.875 0 11.7266 0 10.25V3.25C0 1.80078 1.14844 0.625 2.625 0.625H4.375C4.83984 0.625 5.25 1.03516 5.25 1.5C5.25 1.99219 4.83984 2.375 4.375 2.375H2.625C2.13281 2.375 1.75 2.78516 1.75 3.25V10.25C1.75 10.7422 2.13281 11.125 2.625 11.125H4.375ZM13.7266 6.14844C14.082 6.47656 14.082 7.05078 13.7266 7.37891L10.2266 10.8789C9.89844 11.2344 9.32422 11.2344 8.99609 10.8789C8.64062 10.5508 8.64062 9.97656 8.99609 9.64844L10.9922 7.625H5.25C4.75781 7.625 4.375 7.24219 4.375 6.75C4.375 6.28516 4.75781 5.875 5.25 5.875H10.9922L8.99609 3.87891C8.64062 3.55078 8.64062 2.97656 8.99609 2.64844C9.32422 2.29297 9.89844 2.29297 10.2266 2.64844L13.7266 6.14844Z"
                                    fillOpacity="0.75"
                                />
                            </svg>
                            <h6 className="red-hover">Выйти</h6>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="dropdown">
                    <button className="dropbtn flex justify-between gap-4 items-center">
                        <img
                            className="object-cover w-[40px] h-[40px] m-[4px] rounded-xl opacity-40"
                            src="avatar_guest.png"
                            alt="avatar"
                        />
                        <h5 className="text-xs">Привет Гость!</h5>
                        <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 6.25C5.75391 6.25 5.53516 6.16797 5.37109 6.00391L0.996094 1.62891C0.640625 1.30078 0.640625 0.726562 0.996094 0.398438C1.32422 0.0429688 1.89844 0.0429688 2.22656 0.398438L6 4.14453L9.74609 0.398437C10.0742 0.0429687 10.6484 0.0429687 10.9766 0.398437C11.332 0.726562 11.332 1.30078 10.9766 1.62891L6.60156 6.00391C6.4375 6.16797 6.21875 6.25 6 6.25Z"
                                fill="#3E3232"
                                fillOpacity="0.5"
                            />
                        </svg>
                    </button>
                    <div className="dropdown-pages p-4 gap-4 left-4">
                        <Link
                            to="/signin"
                            className="flex red-hover items-center gap-2"
                        >
                            <svg
                                width="15"
                                height="13"
                                viewBox="0 0 15 13"
                                fill="#3E3232"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.375 11.125C4.83984 11.125 5.25 11.5352 5.25 12C5.25 12.4922 4.83984 12.875 4.375 12.875H2.625C1.14844 12.875 0 11.7266 0 10.25V3.25C0 1.80078 1.14844 0.625 2.625 0.625H4.375C4.83984 0.625 5.25 1.03516 5.25 1.5C5.25 1.99219 4.83984 2.375 4.375 2.375H2.625C2.13281 2.375 1.75 2.78516 1.75 3.25V10.25C1.75 10.7422 2.13281 11.125 2.625 11.125H4.375ZM13.7266 6.14844C14.082 6.47656 14.082 7.05078 13.7266 7.37891L10.2266 10.8789C9.89844 11.2344 9.32422 11.2344 8.99609 10.8789C8.64062 10.5508 8.64062 9.97656 8.99609 9.64844L10.9922 7.625H5.25C4.75781 7.625 4.375 7.24219 4.375 6.75C4.375 6.28516 4.75781 5.875 5.25 5.875H10.9922L8.99609 3.87891C8.64062 3.55078 8.64062 2.97656 8.99609 2.64844C9.32422 2.29297 9.89844 2.29297 10.2266 2.64844L13.7266 6.14844Z"
                                    fillOpacity="0.75"
                                />
                            </svg>
                            <h6 className="red-hover">Войти</h6>
                        </Link>
                        <Link to="/registration">
                            <h6 className="red-hover">Зарегистрироваться</h6>
                        </Link>
                    </div>
                </div>
            )}
            <div onClick={() => toast(<h5 className="text-center">Нажмите Ctrl+D для добавления сайта в закладки.</h5>)} className="red-hover bg-gray w-[48px] h-[48px] rounded-xl flex cursor-pointer justify-center items-center">
                <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="#3E3232"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" />
                </svg>
            </div>
            <Toaster />
        </div>
    );
};

export default Navbar;
