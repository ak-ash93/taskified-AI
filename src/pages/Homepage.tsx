import { Link } from 'react-router';
import Header from '../components/common/Header';
import { Button } from '../components/ui/button';
import { heroBannerLg, heroBannerSm } from '../assets/index';

const Homepage = () => {
  return (
    <>
      <Header title='AI Task Manager & To-Do App | Taskified AI' />
      <section>
        <div className='grid frid-cols-1 gap-8 items-center xl:grid-cols-[1fr_1.5fr] '>
          <div className='flex flex-col items-center text-center space-y-5 lg:space-y-7 pb-8 md:pt-10 '>
            <h1 className='text-5xl font-semibold tracking-wider max-w-[22ch] md:text-5xl lg:text-6xl leading-15 md:leading-20'>
              <span className='bg-gradient-to-t from-primary/50 to-primary/80 inline-flex rounded-lg px-2  overflow-hidden  tracking-wider text-primary-foreground mr-2.5  '>
                Taskified AI
              </span>
              <br />
              Your AI Powered Productivity Gamechanger
            </h1>
            <p className=' leading-10 max-w-[50ch] text-foreground/60'>
              Smarter tasks, faster wins. Simplify your life and your team’s
              with the ultimate AI-powered to-do app!
            </p>
            <Button
              variant='default'
              asChild
              size='lg'
              className='bg-primary text-primary-foreground tracking-wide p-2 text-[12px]'
            >
              <Link to='/signup'>
                <span>Get Started for Free</span>
              </Link>
            </Button>
          </div>
          <figure className='relative  rounded-2xl overflow-hidden max-md:max-w-[680px] max-md:mx-auto max-md:aspect-square md:h-[500px] md:flex md:items-center md:justify-center '>
            {/* Mobile: show only this image */}
            <div className=' lg:hidden w-full h-full p-2 '>
              <img
                src={heroBannerSm}
                width={480}
                height={480}
                alt='Taskified AI'
                className='lg:hidden block w-full h-auto object-contain'
              />
            </div>

            {/* Desktop: two angled overlapping images */}
            <div className='hidden lg:block relative w-full h-full'>
              <img
                src={heroBannerSm}
                alt='Taskified AI Left'
                className='absolute left-[54%] top-[52%] w-[50%] -translate-x-full -translate-y-1/2 rotate-[12deg] rounded-xl shadow-xl'
              />
              <img
                src={heroBannerLg}
                alt='Taskified AI Right'
                className='absolute left-[45%] top-[52%] w-[50%] -translate-x-0 -translate-y-1/2 rotate-[12deg] rounded-xl shadow-xl'
              />
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Homepage;
