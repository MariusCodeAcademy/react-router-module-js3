import cl from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={cl.main}>{props.children}</main>
    </>
  );
};

export default Layout;
