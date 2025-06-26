import { isRouteErrorResponse, useRouteError, Link } from 'react-router';
import { Button } from '../components/ui/button';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { pageNotFound } from '../assets';

const RootError = () => {
  const error = useRouteError();
  return (
    <div className='h-screen  flex flex-col  justify-between '>
      <Navbar />
      <div className='flex flex-col items-center justify-center md:pt-40 pt-15 pb-10 px-10'>
        <h1 className='text-2xl font-semibold text-center sm:text-4xl'>
          {isRouteErrorResponse(error)
            ? 'Page Does Not Exist'
            : 'Something went wrong'}
        </h1>
        <p className='text-gray-500 text-center text-xl mt-5 mb-5 sm:text-lg leading-8'>
          {isRouteErrorResponse(error)
            ? 'Sorry, the page you’re looking for doesn’t exist or may have been moved.Please check the URL or head back to the homepage. '
            : "We're sorry, but something went wrong. Please try again later."}
        </p>
        <div>
          <Button asChild>
            <Link to={'/'}>Home</Link>
          </Button>
        </div>
        <figure className='mt-3'>
          <img
            src={pageNotFound}
            alt='Page not found'
            className='w-[500px] h-[300px] mx-auto'
          />
        </figure>
      </div>
      <Footer />
    </div>
  );
};

export default RootError;
