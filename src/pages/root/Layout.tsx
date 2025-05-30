import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavigationSheet from './NavigationSheet';
import Header from './Header';
import type { RootProps } from './types';
/**
 * Root component includes all other components.
 * It shows only the component that user have navigated to.
 * All properties that affect all sites should be implemented
 * here like navigation bar, footer, background image earth etc...
 */
export default function Layout({ titles }: Readonly<RootProps>) {
  return (
    <div className="bg-background flex flex-col justify-center items-center gap-10 h-max overflow-x-hidden align-top pt-16">
      <NavigationSheet titles={titles} />
      <Header />
      <div className="flex flex-col bg-background w-screen justify-center items-center align-top overflow-x-visible max-w-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
