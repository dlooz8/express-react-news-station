/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import app from '../utils/axiosConfig';

// eslint-disable-next-line react/prop-types
const Navbar = ({authContext}) => {
    const { isAuth, setIsAuth } = authContext;
    const [ userId, setUserId ] = useState();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    
    const checkAuth = async () => {
        await app.get('http://localhost:3033/auth/check-auth')
        .then((res) => {
            setUserId(res.data.id);
            console.log(userId);
            setIsAuth(true);
        })
        .catch(() => {
            setIsAuth(false);
            setUserId('');
        })
    };

    const handleLogOut = async (event) => {
        event.preventDefault();
        await app.get('http://localhost:3033/auth/logout')
        .then(() => {
            checkAuth();
        })
        .catch((error) => {
            checkAuth();
            console.log(error, userId);
        })
    };

    const fetchUser = async () => {
        await app.get(`http://localhost:3033/users/${userId}`)
        .then((res) => {
            setName(res.data.name);
            setAvatar(res.data.avatar_url);
            console.log(name, avatar);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
      useEffect(() => {
        checkAuth();
        fetchUser();
      }, [isAuth]);

    return (
        <div className='flex justify-between mx-32 2xl:mx-48 my-8 gap-2 items-center align-middle font-medium'>
            <Link to='/feed'>News Station!</Link>
            <div className="dropdown">
                <button className="dropbtn flex justify-between gap-2 items-center">
                    <h5>Categories</h5>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.25C5.75391 6.25 5.53516 6.16797 5.37109 6.00391L0.996094 1.62891C0.640625 1.30078 0.640625 0.726562 0.996094 0.398438C1.32422 0.0429688 1.89844 0.0429688 2.22656 0.398438L6 4.14453L9.74609 0.398437C10.0742 0.0429687 10.6484 0.0429687 10.9766 0.398437C11.332 0.726562 11.332 1.30078 10.9766 1.62891L6.60156 6.00391C6.4375 6.16797 6.21875 6.25 6 6.25Z" fill="#3E3232" fillOpacity="0.5"/>
                    </svg>
                </button>
                <div className="dropdown-categories xl:left-[-132px] 2xl:left-[-182px]">
                    <div className="car">
                        <div className="flex justify-between gap-4 p-4 align-middle items-center right-8">
                            <img className='object-cover min-w-[190px] min-h-[190px] rounded-xl' src="car.jpg" alt="car" />
                            <div className="flex flex-col gap-2 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                                    </svg>
                                    <h5>Car</h5>
                                </div>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdfdsf  sdfsdfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>News</h6></Link>
                                
                            </div>
                        </div>
                    </div>
                    <div className="tech">
                    <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img className='object-cover min-w-[190px] min-h-[190px] rounded-xl' src="tech.jpg" alt="tech" />
                            <div className="flex flex-col gap-2 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                                    </svg>
                                    <h5>Technology</h5>
                                </div>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdfdsf  sdfsdfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>News</h6></Link>
                            </div>
                        </div>
                    </div>
                    <div className="girl">
                    <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img className='object-cover min-w-[190px] min-h-[190px] rounded-xl' src="girl.jpg" alt="girl" />
                            <div className="flex flex-col gap-2 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                                    </svg>
                                    <h5>Girlish</h5>
                                </div>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdfdsf  sdfsdfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>News</h6></Link>
                            </div>
                        </div>
                    </div>
                    <div className="sport">
                    <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img className='object-cover min-w-[190px] min-h-[190px] rounded-xl' src="sport.png" alt="sport" />
                            <div className="flex flex-col gap-2 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                                    </svg>
                                    <h5>Sport</h5>
                                </div>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdfdsf  sdfsdfdsf</h6></Link>
                                <Link to='/news'><h6>Newsfdsfsdf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>News</h6></Link>
                            </div>
                        </div>
                    </div>
                    <div className="food">
                    <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img className='object-cover min-w-[190px] min-h-[190px] rounded-xl' src="food.jpg" alt="food" />
                            <div className="flex flex-col gap-2 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                                    </svg>
                                    <h5>Food</h5>
                                </div>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdfdsf  sdfsdfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>News</h6></Link>
                            </div>
                        </div>
                    </div>
                    <div className="music">
                    <div className="flex justify-between gap-4 p-4 align-middle items-center">
                            <img className='object-cover min-w-[190px] min-h-[190px] rounded-xl' src="music.jpg" alt="music" />
                            <div className="flex flex-col gap-2 max-h-[190px]">
                                <div className="flex justify-start gap-2 items-center">
                                    <svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="4" height="10" rx="2" fill="#F81539"/>
                                    </svg>
                                    <h5>Music</h5>
                                </div>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdfdsf  sdfsdfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsfsdf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>Newsfdsf</h6></Link>
                                <Link to='/news'><h6 className='red-hover'>News</h6></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="dropdown">
                <button className="dropbtn flex justify-between gap-2 items-center">
                    <h5>Pages</h5>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.25C5.75391 6.25 5.53516 6.16797 5.37109 6.00391L0.996094 1.62891C0.640625 1.30078 0.640625 0.726562 0.996094 0.398438C1.32422 0.0429688 1.89844 0.0429688 2.22656 0.398438L6 4.14453L9.74609 0.398437C10.0742 0.0429687 10.6484 0.0429687 10.9766 0.398437C11.332 0.726562 11.332 1.30078 10.9766 1.62891L6.60156 6.00391C6.4375 6.16797 6.21875 6.25 6 6.25Z" fill="#3E3232" fillOpacity="0.5"/>
                    </svg>
                </button>
                <div className="dropdown-pages p-4 gap-4">
                    <Link to='/signin'><h6 className='red-hover'>Sign In</h6></Link>
                    <Link to='/register'><h6 className='red-hover'>register In</h6></Link>
                    <Link to='/userprofile'><h6 className='red-hover'>userprofile In</h6></Link>
                    <Link to='/news'><h6 className='red-hover'>news In</h6></Link>
                </div>
            </div>


            <Link to='/constactus' className='red-hover'><h5>Contact Us</h5></Link>
            <Link to='/aboutus' className='red-hover'><h5>About Us</h5></Link>
            <div className="flex justify-between items-center text-xs gap-8 bg-gray rounded-xl px-4 py-3">
                <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13.0625C4.17188 13.0625 5.1875 14.0781 5.1875 15.25C5.1875 16.4609 4.17188 17.4375 3 17.4375C1.78906 17.4375 0.8125 16.4609 0.8125 15.25C0.8125 14.0781 1.78906 13.0625 3 13.0625ZM3 6.8125C4.17188 6.8125 5.1875 7.82812 5.1875 9C5.1875 10.2109 4.17188 11.1875 3 11.1875C1.78906 11.1875 0.8125 10.2109 0.8125 9C0.8125 7.82812 1.78906 6.8125 3 6.8125ZM3 4.9375C1.78906 4.9375 0.8125 3.96094 0.8125 2.75C0.8125 1.57812 1.78906 0.5625 3 0.5625C4.17188 0.5625 5.1875 1.57812 5.1875 2.75C5.1875 3.96094 4.17188 4.9375 3 4.9375Z" fill="#3E3232"/>
                </svg>
                <input className="bg-gray 2xl:min-w-[300px] min-h-[24px] outline-none" type="text" placeholder="Search Anything" />
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5312 18.3438C21.1172 18.9688 21.1172 19.9453 20.5312 20.5703C19.9062 21.1562 18.9297 21.1562 18.3047 20.5703L13.6562 15.8828C12.0547 16.9375 10.1016 17.4844 7.99219 17.2109C4.39844 16.7031 1.50781 13.7734 1.03906 10.2188C0.375 4.90625 4.86719 0.414062 10.1797 1.07812C13.7344 1.54688 16.6641 4.4375 17.1719 8.03125C17.4453 10.1406 16.8984 12.0938 15.8438 13.6562L20.5312 18.3438ZM4.08594 9.125C4.08594 11.8984 6.3125 14.125 9.08594 14.125C11.8203 14.125 14.0859 11.8984 14.0859 9.125C14.0859 6.39062 11.8203 4.125 9.08594 4.125C6.3125 4.125 4.08594 6.39062 4.08594 9.125Z" fill="#3E3232"/>
                </svg>
            </div>

            { isAuth ?
                <div className="dropdown">
                    <button className="dropbtn flex justify-between gap-4 items-center">
                        <img className='object-cover w-[48px] h-[48px] rounded-xl' src="avatar1.png" alt="avatar" />
                        <h5 className="text-xs">Hi, Danny!</h5>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6.25C5.75391 6.25 5.53516 6.16797 5.37109 6.00391L0.996094 1.62891C0.640625 1.30078 0.640625 0.726562 0.996094 0.398438C1.32422 0.0429688 1.89844 0.0429688 2.22656 0.398438L6 4.14453L9.74609 0.398437C10.0742 0.0429687 10.6484 0.0429687 10.9766 0.398437C11.332 0.726562 11.332 1.30078 10.9766 1.62891L6.60156 6.00391C6.4375 6.16797 6.21875 6.25 6 6.25Z" fill="#3E3232" fillOpacity="0.5"/>
                        </svg>
                    </button>
                    <div className="dropdown-pages p-4 gap-4 left-4">
                        <Link to='/userprofile'><h6 className='red-hover'>Профиль</h6></Link>
                        <Link to='/feed'><h6 className='red-hover' onClick={handleLogOut}>Выйти</h6></Link>
                    </div>
                </div>
            :
            <div className="dropdown">
                <button className="dropbtn flex justify-between gap-4 items-center">
                    <img className='object-cover w-[40px] h-[40px] m-[4px] rounded-xl opacity-40' src="avatar_guest.png" alt="avatar" />
                    <h5 className="text-xs">Hi, Guest!</h5>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6.25C5.75391 6.25 5.53516 6.16797 5.37109 6.00391L0.996094 1.62891C0.640625 1.30078 0.640625 0.726562 0.996094 0.398438C1.32422 0.0429688 1.89844 0.0429688 2.22656 0.398438L6 4.14453L9.74609 0.398437C10.0742 0.0429687 10.6484 0.0429687 10.9766 0.398437C11.332 0.726562 11.332 1.30078 10.9766 1.62891L6.60156 6.00391C6.4375 6.16797 6.21875 6.25 6 6.25Z" fill="#3E3232" fillOpacity="0.5"/>
                    </svg>
                </button>
                <div className="dropdown-pages p-4 gap-4 left-4">
                    <Link to='/signin'><h6 className='red-hover'>Войти</h6></Link>
                    <Link to='/registration'><h6 className='red-hover'>Зарегистрироваться</h6></Link>
                </div>
            </div>
            }



            <div className="red-hover bg-gray w-[48px] h-[48px] rounded-xl flex justify-center items-center">
                <svg width="16" height="21" viewBox="0 0 16 21" fill="#3E3232" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z"/>
                </svg>
            </div>

            {/* <svg className='w-[48px] h-[48px]'>
                <use href='sprites.svg#icon-home'></use>
            </svg> */}

        </div>
    );
};

export default Navbar;

