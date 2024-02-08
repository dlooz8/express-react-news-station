
function Footer() {
  return (
    <footer className="flex flex-col">
        <div className="flex justify-between gap-4 my-12 py-12">
            <div className="flex gap-12 pr-10 bg-gray rounded-r-[50px] pl-48 py-12">
                <div className="flex flex-col justify-between gap-4">
                    <div>
                        <div className="flex gap-2 items-center">
                            <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                            </svg>
                            <h4>Mega News</h4>
                        </div>
                        <p className="w-[450px] p-3 mr-10 text-justify leading-7">Lorem ipsum dolor, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                            </svg>
                            <h4>Newsletter</h4>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-white rounded-xl">
                            <input type="text" placeholder="Write Your Email .." />
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.125 0.5C19.1406 0.5 20 1.35938 20 2.375C20 3 19.6875 3.54688 19.2188 3.89844L10.7422 10.2656C10.2734 10.6172 9.6875 10.6172 9.21875 10.2656L0.742188 3.89844C0.273438 3.54688 0 3 0 2.375C0 1.35938 0.820312 0.5 1.875 0.5H18.125ZM8.47656 11.2812C9.375 11.9453 10.5859 11.9453 11.4844 11.2812L20 4.875V13C20 14.4062 18.8672 15.5 17.5 15.5H2.5C1.09375 15.5 0 14.4062 0 13V4.875L8.47656 11.2812Z" fill="#3E3232" fill-opacity="0.75"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-3">
                    <div>
                        <div className="flex gap-2 items-center p-2 pb-0">
                            <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                            </svg>
                            <h4>Categories</h4>
                        </div>
                        <div className="flex flex-col gap-2 pl-6 py-4">
                            <p>Culture</p>
                            <p>Technology</p>
                            <p>Sport</p>
                            <p>Entertainment</p>
                            <p>Health</p>
                            <p>Food</p>
                        </div>
                    </div>
                    <div className="flex flex-col py-1 gap-5">
                        <div className="flex gap-2 items-center pt-2">
                            <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                            </svg>
                            <h4>Social Network</h4>
                        </div>
                        <div className="flex justify-between gap-2">
                            <img src="instagram.png" alt="instagram" />
                            <img src="twitter.png" alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-12 pr-48 py-12">

                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-2 justify-between">
                        <div className="flex gap-2 items-center">
                            <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                            </svg>
                            <h4>New Comments</h4>
                        </div>
                        <div className="flex flex-col gap-2 justify-between">
                            <div className="flex flex-col gap-2 justify-between rounded-xl bg-gray p-4">
                                <h5>Anastasia</h5>
                                <p>how nice does this look 😍 I feel it should be delicious, thank you</p>
                            </div>                            
                            <div className="flex flex-col gap-2 justify-between rounded-xl bg-gray p-4">
                                <h5>Anastasia</h5>
                                <p>how nice does this look 😍 I feel it should be delicious, thank you</p>
                            </div>                            
                            <div className="flex flex-col gap-2 justify-between rounded-xl bg-gray p-4">
                                <h5>Anastasia</h5>
                                <p>how nice does this look 😍 I feel it should be delicious, thank you</p>
                            </div>                            
                            <div className="flex flex-col gap-2 justify-between rounded-xl bg-gray p-4">
                                <h5>Anastasia</h5>
                                <p>how nice does this look 😍 I feel it should be delicious, thank you</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 justify-between">
                        <div className="flex gap-2 items-center">
                            <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                            </svg>
                            <h4>Follow On Instagram</h4>
                        </div>
                        <div className="grid grid-cols-3 grid-rows-3 ">
                            <img className="insta-img" src="dance.png" alt="img" />
                            <img className="insta-img" src="avatar2.png" alt="img" />
                            <img className="insta-img" src="new-animal.png" alt="img" />
                            <img className="insta-img" src="new-car.png" alt="img" />
                            <img className="insta-img" src="new-girl.png" alt="img" />
                            <img className="insta-img" src="new-music.png" alt="img" />
                            <img className="insta-img" src="new-sport.png" alt="img" />
                            <img className="insta-img" src="new-tech.png" alt="img" />
                            <img className="insta-img" src="sport.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>







        </div>
        <div className="bg-[#e2e2e2] flex justify-between">
            <p>Privacy Policy | Terms & Conditions</p>
            <p>All opyright (C) 2022 Reserved</p>
        </div>
    </footer>
  )
}

export default Footer