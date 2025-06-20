import { Link } from 'react-router';
import { logo } from '../../assets';
import { Button } from '../ui/button';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <>
      <nav className='w-full h-20 md:w-[750px] md:mx-auto z-50 md:fixed md:left-0 md:right-0 md:top-0   backdrop-blur-md md:mt-2  '>
        <div className='container h-30 md:h-20 flex items-center justify-between p-3 rounded-b-md bg-white dark:bg-[#2C2C2C] dark:opacity-85 shadow-lg md:rounded-3xl'>
          <div>
            <Link to='/'>
              <div className='flex items-center gap-1  text-sm font-light '>
                <img
                  src={logo}
                  alt='Taskified AI'
                  className='h-8 w-8 rounded-full object-contain shadow-md'
                />
                <h3 className='tracking-widest'>Taskified</h3>
              </div>
            </Link>
          </div>
          <div className=' flex flex-col gap-3  items-center md:flex md:flex-row md:items-center md:justify-between  '>
            <div className='flex flex-col gap-2 md:flex-row md:gap-3'>
              <Button
                asChild
                variant='default'
                size='sm'
                className=' bg-primary text-primary-foreground  text-[12px] p-2 tracking-wide'
              >
                <Link to={'/signin'}>Sign In</Link>
              </Button>
              <Button
                asChild
                variant='default'
                size='sm'
                className='bg-primary text-primary-foreground  text-[12px] p-2 tracking-wide '
              >
                <Link to={'/signup'}>Register</Link>
              </Button>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
{
  /* <>
    <nav className='md:fixed md:mx-auto md:top-0 md:left-0 md:right-0 md:z-50 w-full md:w-1/2 bg-opacity-70 mt-2 backdrop-blur-md'>
        <div className=' container h-16 flex items-center justify-between backdrop-blur-3xl rounded-2xl px-4 py-2 bg-white dark:bg-[#1B1212] dark:opacity-85 shadow-md'>
          <div>
            <Link to='/'>
              <div className='flex items-center gap-3  text-sm font-extralight '>
                <img
                  src={logo}
                  alt='Taskified AI'
                  className='h-8 w-8 rounded-full object-contain shadow-md'
                />
                <h3 className='tracking-widest'>Taskified</h3>
              </div>
            </Link>
          </div>
          <div className='flex items-center gap-3'>
            <Button
              asChild
              variant='outline'
              size='sm'
              className=' bg-primary text-white dark:bg-orange-500 dark:text-white text-[10px]'
            >
              <Link to={'/signin'}>Sign In</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='sm'
              className='bg-primary text-white dark:bg-orange-500 text-[10px] '
            >
              <Link to={'/signup'}>Register</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    
    </> */
}
