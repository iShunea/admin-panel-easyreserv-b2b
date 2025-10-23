import { createBrowserRouter } from 'react-router-dom';

// project-imports
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import ComponentsRoutes from './ComponentsRoutes';

// ==============================|| ROUTES RENDER ||============================== //

const router = createBrowserRouter([LoginRoutes, ComponentsRoutes, MainRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;
