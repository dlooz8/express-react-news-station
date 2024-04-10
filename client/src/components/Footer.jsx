function Footer() {
    return (
        <div className="flex justify-between gap-4 mt-12">
            <div className="flex basis-1/2 gap-12 pr-20 bg-gray rounded-r-[50px] xl:pl-32 2xl:pl-48 py-12">
                <div className="flex flex-col justify-between gap-3">
                    <div>
                        <div className="flex gap-2 items-center">
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
                            <h4>Новостная Станция</h4>
                        </div>
                        <p className="p-3 text-justify 2xl:leading-6 tracking-tighter">
                            Давно выяснено, что при оценке дизайна и композиции
                            читаемый текст мешает сосредоточиться. Lorem Ipsum
                            используют потому, что тот обеспечивает более или
                            менее стандартное заполнение шаблона.
                            Многие программы электронной вёрстки и редакторы
                            HTML используют Lorem Ipsum в качестве текста по
                            умолчанию, так что поиск по ключевым словам lorem
                            ipsum сразу показывает, как много веб-страниц всё
                            ещё дожидаются своего настоящего рождения. За
                            прошедшие годы текст Lorem Ipsum получил много
                            версий.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
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
                            <h4>Подпишитесь на рассылку</h4>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                            <input
                                type="text"
                                placeholder="Введите e-mail"
                            />
                            <svg
                                width="20"
                                height="16"
                                viewBox="0 0 20 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.125 0.5C19.1406 0.5 20 1.35938 20 2.375C20 3 19.6875 3.54688 19.2188 3.89844L10.7422 10.2656C10.2734 10.6172 9.6875 10.6172 9.21875 10.2656L0.742188 3.89844C0.273438 3.54688 0 3 0 2.375C0 1.35938 0.820312 0.5 1.875 0.5H18.125ZM8.47656 11.2812C9.375 11.9453 10.5859 11.9453 11.4844 11.2812L20 4.875V13C20 14.4062 18.8672 15.5 17.5 15.5H2.5C1.09375 15.5 0 14.4062 0 13V4.875L8.47656 11.2812Z"
                                    fill="#3E3232"
                                    fillOpacity="0.75"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-3">
                    <div>
                        <div className="flex gap-2 items-center p-2 pb-0">
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
                            <h4>Категории</h4>
                        </div>
                        <div className="flex flex-col gap-2 pl-6 py-4">
                            <p>Политика</p>
                            <p>Технологии</p>
                            <p>Спорт</p>
                            <p>Экономика</p>
                            <p>Здоровье</p>
                            <p>Еда</p>                            
                        </div>
                    </div>
                    <div className="flex flex-col py-1 gap-5">
                        <div className="flex gap-2 items-center pt-2">
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
                                    height="11"
                                    rx="2"
                                    fill="#F81539"
                                />
                            </svg>
                            <h4>Соцсети</h4>
                        </div>
                        <div className="flex justify-between gap-2">
                            <img src="instagram.png" alt="instagram" />
                            <img src="twitter.png" alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex basis-1/2 gap-12 xl:pr-32 2xl:pr-48 py-12">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex flex-col gap-4 justify-between basis-1/2">
                        <div className="flex gap-2 items-center">
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
                            <h4>Новые комментарии</h4>
                        </div>
                        <div className="flex flex-col gap-3 justify-between">
                            <div className="flex flex-col gap-2 justify-between rounded-xl shadow p-4">
                                <h5>Anastasia</h5>
                                <p className="line-clamp-1">
                                    how nice does this look 😍 I feel it should
                                    be delicious, thank you
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 justify-between rounded-xl shadow p-4">
                                <h5>Anastasia</h5>
                                <p className="line-clamp-1">
                                    how nice does this look 😍 I feel it should
                                    be delicious, thank you
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 justify-between rounded-xl shadow p-4">
                                <h5>Anastasia</h5>
                                <p className="line-clamp-1">
                                    how nice does this look 😍 I feel it should
                                    be delicious, thank you
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 justify-between rounded-xl shadow p-4">
                                <h5>Anastasia</h5>
                                <p className="line-clamp-1">
                                    how nice does this look 😍 I feel it should
                                    be delicious, thank you
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 justify-start">
                        <div className="flex gap-2 items-center">
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
                            <h4>Подпишись на Instagram</h4>
                        </div>
                        <div className="grid grid-cols-3 grid-rows-3 gap-3">
                            <img
                                className="insta-img"
                                src="inst-1.png"
                                alt="img"
                            />
                            <img
                                className="insta-img"
                                src="inst-2.png"
                                alt="img"
                            />
                            <img
                                className="insta-img"
                                src="inst-3.png"
                                alt="img"
                            />
                            <img
                                className="insta-img"
                                src="inst-4.png"
                                alt="img"
                            />
                            <img
                                className="insta-img"
                                src="inst-5.png"
                                alt="img"
                            />
                            <img
                                className="insta-img"
                                src="inst-6.png"
                                alt="img"
                            />
                            <img
                                className="insta-img"
                                src="inst-7.png"
                                alt="img"
                            />
                            <img
                                className="insta-img"
                                src="inst-8.png"
                                alt="img"
                            />
                            <img
                                className="insta-img"
                                src="inst-9.png"
                                alt="img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
