
function NewPosts() {
    return (
        <section className="mx-48 my-12">
            <div className="flex justify-between py-8">
                <div className="flex gap-2 justify-between items-center">
                    <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                    </svg>
                    <h4>New Posts</h4>
                </div>
                <div className="flex justify-between items-center px-5 w-[9vh] h-[3vh] bg-gray rounded-xl red-hover">
                    <p className="font-medium">Show All</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18C9.71875 18 9.46875 17.9062 9.28125 17.7188C8.875 17.3438 8.875 16.6875 9.28125 16.3125L13.5625 12L9.28125 7.71875C8.875 7.34375 8.875 6.6875 9.28125 6.3125C9.65625 5.90625 10.3125 5.90625 10.6875 6.3125L15.6875 11.3125C16.0938 11.6875 16.0938 12.3438 15.6875 12.7188L10.6875 17.7188C10.5 17.9062 10.25 18 10 18Z" fillOpacity={0.75}/>
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[3vh] grid-rows-3">
                <div className="flex gap-[.7vh] shadow rounded-xl w-[52.8vh] h-[14.5vh]">
                    <img className="min-w-[25vh] max-h-[14.5vh] p-2 object-cover rounded-[20px]" src="new-tech.png" alt="new-post-img" />
                    <div className="flex flex-col justify-between py-2 max-w-[26vh]">
                        <h5 className="line-clamp-1 pt-3">12 Mobile UX Design Trends For 2018</h5>
                        <p className="line-clamp-2">Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner</p>
                        <div className="flex items-center gap-4 bg-gray rounded-xl w-[26.5vh] h-[5vh] ">
                            <img src="sport.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl ml-[1vh]" />
                            <div className="flex flex-col gap-1 min-w-[17vh]">
                                <h6>James</h6>
                                <p>August 18, 2022</p>
                            </div>
                            <div className="red-hover">
                                <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[.7vh] shadow rounded-xl w-[52.8vh] h-[14.5vh]">
                    <img className="min-w-[25vh] max-h-[14.5vh] p-2 object-cover rounded-[20px]" src="new-sport.png" alt="new-post-img" />
                    <div className="flex flex-col justify-between py-2 max-w-[26vh]">
                        <h5 className="line-clamp-1 pt-3">12 Mobile UX Design Trends For 2018</h5>
                        <p className="line-clamp-2">Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner</p>
                        <div className="flex items-center gap-4 bg-gray rounded-xl w-[26.5vh] h-[5vh] ">
                            <img src="sport.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl ml-[1vh]" />
                            <div className="flex flex-col gap-1 min-w-[17vh]">
                                <h6>James</h6>
                                <p>August 18, 2022</p>
                            </div>
                            <div className="red-hover">
                                <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[.7vh] shadow rounded-xl w-[52.8vh] h-[14.5vh]">
                    <img className="min-w-[25vh] max-h-[14.5vh] p-2 object-cover rounded-[20px]" src="new-animal.png" alt="new-post-img" />
                    <div className="flex flex-col justify-between py-2 max-w-[26vh]">
                        <h5 className="line-clamp-1 pt-3">12 Mobile UX Design Trends For 2018</h5>
                        <p className="line-clamp-2">Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner</p>
                        <div className="flex items-center gap-4 bg-gray rounded-xl w-[26.5vh] h-[5vh] ">
                            <img src="sport.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl ml-[1vh]" />
                            <div className="flex flex-col gap-1 min-w-[17vh]">
                                <h6>James</h6>
                                <p>August 18, 2022</p>
                            </div>
                            <div className="red-hover">
                                <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[.7vh] shadow rounded-xl w-[52.8vh] h-[14.5vh]">
                    <img className="min-w-[25vh] max-h-[14.5vh] p-2 object-cover rounded-[20px]" src="new-car.png" alt="new-post-img" />
                    <div className="flex flex-col justify-between py-2 max-w-[26vh]">
                        <h5 className="line-clamp-1 pt-3">12 Mobile UX Design Trends For 2018</h5>
                        <p className="line-clamp-2">Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner</p>
                        <div className="flex items-center gap-4 bg-gray rounded-xl w-[26.5vh] h-[5vh] ">
                            <img src="sport.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl ml-[1vh]" />
                            <div className="flex flex-col gap-1 min-w-[17vh]">
                                <h6>James</h6>
                                <p>August 18, 2022</p>
                            </div>
                            <div className="red-hover">
                                <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="flex gap-[.7vh] shadow rounded-xl w-[52.8vh] h-[14.5vh]">
                    <img className="min-w-[25vh] max-h-[14.5vh] p-2 object-cover rounded-[20px]" src="new-music.png" alt="new-post-img" />
                    <div className="flex flex-col justify-between py-2 max-w-[26vh]">
                        <h5 className="line-clamp-1 pt-3">12 Mobile UX Design Trends For 2018</h5>
                        <p className="line-clamp-2">Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner</p>
                        <div className="flex items-center gap-4 bg-gray rounded-xl w-[26.5vh] h-[5vh] ">
                            <img src="sport.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl ml-[1vh]" />
                            <div className="flex flex-col gap-1 min-w-[17vh]">
                                <h6>James</h6>
                                <p>August 18, 2022</p>
                            </div>
                            <div className="red-hover">
                                <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[.7vh] shadow rounded-xl w-[52.8vh] h-[14.5vh]">
                    <img className="min-w-[25vh] max-h-[14.5vh] p-2 object-cover rounded-[20px]" src="new-girl.png" alt="new-post-img" />
                    <div className="flex flex-col justify-between py-2 max-w-[26vh]">
                        <h5 className="line-clamp-1 pt-3">12 Mobile UX Design Trends For 2018</h5>
                        <p className="line-clamp-2">Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner</p>
                        <div className="flex items-center gap-4 bg-gray rounded-xl w-[26.5vh] h-[5vh] ">
                            <img src="sport.png" alt="avatar" className="max-w-[44px] max-h-[44px] object-cover rounded-xl ml-[1vh]" />
                            <div className="flex flex-col gap-1 min-w-[17vh]">
                                <h6>James</h6>
                                <p>August 18, 2022</p>
                            </div>
                            <div className="red-hover">
                                <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fillOpacity={0.75}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewPosts;