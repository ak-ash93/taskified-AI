import { Helmet } from 'react-helmet';

type HeaderProps = {
  title: string;
};
const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  );
};

export default Header;
