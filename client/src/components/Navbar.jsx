import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between m-4'>
        <Link to='/'>News Station!</Link>
        <Link to='/categories'>Categoies</Link>
        <Link to='/pages'>Pages</Link>
        <Link to='/constactus'>Contact Us</Link>
        <Link to='/aboutus'>About Us</Link>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        {/* sign in or user profile */}

        <div className="">
            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.625 0C14.6406 0 15.5 0.859375 15.5 1.875V18.75C15.5 19.7266 14.4453 20.3125 13.5859 19.8438L8 16.5625L2.375 19.8438C1.51562 20.3125 0.5 19.7266 0.5 18.75V1.875C0.5 0.859375 1.32031 0 2.375 0H13.625ZM13.625 17.6562V2.10938C13.625 1.99219 13.5078 1.875 13.3516 1.875H2.57031C2.45312 1.875 2.375 1.99219 2.375 2.10938V17.6562L8 14.375L13.625 17.6562Z" fill="#3E3232"/>
            </svg>
        </div>

    </div>
  );
};

export default Navbar;

