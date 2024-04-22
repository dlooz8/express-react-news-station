import { useOutletContext, Link, useLocation } from 'react-router-dom';

function ProfileBar() {

  const { isUser } = useOutletContext();
  const location = useLocation();

  return (
    <div className="2xl:container 2xl:mx-auto xl:mx-32">
      <div className='flex flex-col px-4 pt-4 bg-gray rounded-xl'>
          <img className="w-full h-full object-cover rounded-xl" src="header_user.jpg" alt="img" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 py-4">
              <img src={ isUser.avatar_url } alt="avatar" className="w-16 h-16 object-cover rounded-xl"/>
              <h4>{isUser.name}</h4>
            </div>

            <div className="flex justify-between gap-10">
              <div className="flex flex-col items-start">
                <Link to="/userbookmarks">Мои закладки</Link>
                { location.pathname === '/userbookmarks' && 
                  <svg width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="10" height="4" rx="2" fill="#F81539"/>
                  </svg>
                }
              </div>

              <div className="flex flex-col items-start">
                <Link to="/createnews">Создать новость</Link>
                { location.pathname === '/createnews' &&
                  <svg width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="10" height="4" rx="2" fill="#F81539"/>
                  </svg>
                }
              </div>

              <div className="flex flex-col items-start">
                <Link to="/usernews">Мои новости</Link>
                { location.pathname === '/usernews' &&
                  <svg width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="10" height="4" rx="2" fill="#F81539"/>
                  </svg>
                }
              </div>
            </div>

            <div className="flex items-center gap-2 py-3 px-4 border-slate-300 border-2 rounded-xl">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.34766 7.75C4.43359 7.75 2.875 6.19141 2.875 4.25C2.875 2.33594 4.43359 0.75 6.34766 0.75C8.26172 0.75 9.84766 2.33594 9.84766 4.25C9.84766 6.19141 8.26172 7.75 6.34766 7.75ZM7.74219 9.0625C9.02734 9.0625 10.1758 9.58203 11.0234 10.4023L9.76562 11.6328C9.57422 11.8242 9.46484 12.0703 9.41016 12.3438L9 14.2852C8.97266 14.4492 8.97266 14.6133 9.02734 14.75H1.17969C0.660156 14.75 0.25 14.3398 0.25 13.8203C0.25 11.1953 2.35547 9.0625 4.98047 9.0625H7.74219ZM10.3945 12.2617L13.8125 8.84375L15.7812 10.8125L12.3633 14.2305C12.2812 14.3125 12.1992 14.3398 12.1172 14.3672L10.1484 14.75C9.98438 14.8047 9.82031 14.6406 9.875 14.4766L10.2578 12.5078C10.2852 12.4258 10.3125 12.3438 10.3945 12.2617ZM17.4492 7.75C17.832 8.13281 17.832 8.76172 17.4492 9.14453L16.4102 10.1836L14.4414 8.21484L15.4805 7.17578C15.8633 6.79297 16.4922 6.79297 16.875 7.17578L17.4492 7.75Z" fill="#F81539" fillOpacity="0.75"/>
              </svg>
              <h5 className='text-primary75'>Редактировать профиль</h5>
            </div>

          </div>
      </div>      
    </div>
  )
}

export default ProfileBar