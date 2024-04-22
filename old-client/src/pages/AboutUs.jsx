function AboutUs() {
    return (
        <div className="2xl:container 2xl:mx-auto xl:mx-32 my-12">
            <div className="flex flex-col bg-gray p-8 rounded-xl gap-4">
                <h2 className="2xl:text-3xl xl:text-2xl pb-6">
                    Мы работаем для того, чтобы вы первыми узнавали все самые
                    свежие новости.
                </h2>
                <div className="">
                    <img
                        className="float-right xl:w-[50%] 2xl:w-[40%] xl:ml-6 2xl:ml-8 object-cover aspect-video rounded-xl"
                        src="https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="img"
                    />
                    <p className="text-justify 2xl:tracking-wide text-xl 2xl:leading-9">
                        Многие думают, что Lorem Ipsum - взятый с потолка
                        псевдо-латинский набор слов, но это не совсем так. Его
                        корни уходят в один фрагмент классической латыни 45 года
                        н.э., то есть более двух тысячелетий назад. Ричард
                        МакКлинток, профессор латыни из колледжа Hampden-Sydney,
                        штат Вирджиния, взял одно из самых странных слов в Lorem
                        Ipsum, consectetur, и занялся его поисками в
                        классической латинской литературе. Есть много вариантов Lorem Ipsum, но
                        большинство из них имеет не всегда приемлемые
                        модификации, например, юмористические вставки или слова,
                        которые даже отдалённо не напоминают латынь. Если вам
                        нужен Lorem Ipsum для серьёзного проекта, вы наверняка
                        не хотите какой-нибудь шутки, скрытой в середине абзаца.
                        Также все другие известные генераторы Lorem Ipsum
                        используют один и тот же текст, который они просто
                        повторяют, пока не достигнут нужный объём. Это делает
                        предлагаемый здесь генератор единственным настоящим
                        Lorem Ipsum генератором. Он использует словарь из более
                        чем 200 латинских слов, а также набор моделей
                        предложений. В результате сгенерированный Lorem Ipsum
                        выглядит правдоподобно, не имеет повторяющихся абзацей
                        или невозможных слов.
                    </p>
                </div>
            </div>
            <div className="flex gap-2 items-center py-16">
                <svg
                    width="4"
                    height="11"
                    viewBox="0 0 4 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect y="0.5" width="4" height="10" rx="2" fill="#F81539" />
                </svg>
                <h4>Наша команда</h4>
            </div>
            <div className="flex justify-between gap-4">
                <div className="flex flex-col gap-8 justify-between p-4 shadow rounded-xl items-center w-64">
                    <img
                        className="w-[124px] h-[124px] object-cover rounded-xl"
                        src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=ais"
                        alt="popular"
                    />
                    <h5>Генеральный редактор</h5>
                    <div className="flex justify-between items-center gap-4 bg-gray rounded-xl p-3 h-20 w-full">
                        <h4 className="flex-1 text-center">Даниил Мазур</h4>
                    </div>
                </div>

                <div className="flex flex-col gap-8 justify-between p-4 shadow rounded-xl items-center w-64">
                    <img
                        className="w-[124px] h-[124px] object-cover rounded-xl"
                        src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-white-t-shirt-isolated-white_186202-8965.jpg"
                        alt="popular"
                    />
                    <h5>Журналист</h5>
                    <div className="flex justify-between items-center gap-4 bg-gray rounded-xl p-3 h-20 w-full">
                        <h4 className="flex-1 text-center">Геннадий Петров</h4>
                    </div>
                </div>

                <div className="flex flex-col gap-8 justify-between p-4 shadow rounded-xl items-center w-64">
                    <img
                        className="w-[124px] h-[124px] object-cover rounded-xl"
                        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg"
                        alt="popular"
                    />
                    <h5>Журналист</h5>
                    <div className="flex justify-between items-center gap-4 bg-gray rounded-xl p-3 h-20 w-full">
                        <h4 className="flex-1 text-center">Сергей Васильев</h4>
                    </div>
                </div>

                <div className="flex flex-col gap-8 justify-between p-4 shadow rounded-xl items-center w-64">
                    <img
                        className="w-[124px] h-[124px] object-cover rounded-xl"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVdK33FE7DEugIjCG-r2sl1KgawbEYGpJoQ&usqp=CAU"
                        alt="popular"
                    />
                    <h5>Журналист</h5>
                    <div className="flex justify-between items-center gap-4 bg-gray rounded-xl p-3 h-20 w-full">
                        <h4 className="flex-1 text-center leading-7">
                            Анастасия Григорьева
                        </h4>
                    </div>
                </div>

                <div className="flex flex-col gap-8 justify-between p-4 shadow rounded-xl items-center w-64">
                    <img
                        className="w-[124px] h-[124px] object-cover rounded-xl"
                        src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                        alt="popular"
                    />
                    <h5>Журналист</h5>
                    <div className="flex justify-between items-center gap-4 bg-gray rounded-xl p-3 h-20 w-full">
                        <h4 className="flex-1 text-center">Петр Ефимов</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
