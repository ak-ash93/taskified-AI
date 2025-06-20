import { socialLinks } from '../../constants';
import { Separator } from '../ui/separator';
const Footer = () => {
  return (
    <footer className='p-4 pb-0'>
      <div className='container min-h-20 bg-background border border-b-0 rounded-t-xl py-4 flex flex-col items-center lg:flex-row lg:justify-between lg:px-10 md:mx-auto '>
        <p className='text-center text-sm text-gray-800 dark:text-gray-400 py-4'>
          © {new Date().getFullYear()} Taskified AI. All rights reserved.
        </p>
        <div>
          <ul className='flex flex-wrap items-center'>
            {socialLinks.map(({ url, name, icon: Icon }, index) => (
              <li
                key={index}
                className='flex items-center h-3 '
              >
                <a
                  key={name}
                  href={url}
                  target='_blank'
                  aria-label={name}
                  className='text-gray-800 dark:text-white flex items-center gap-2 hover:text-primary dark:hover:text-orange-500 transition'
                >
                  <Icon className='w-4 h-4' />
                  <span className='text-xs tracking-widest'>{name}</span>
                </a>
                {index !== socialLinks.length - 1 && (
                  <Separator
                    orientation='vertical'
                    decorative
                    style={{ height: '1.5rem' }}
                    className='mx-4 bg-gray-400'
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
