import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/menu',
  component: MenuPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([indexRoute, menuRoute, aboutRoute, contactRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
