import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <div>Not Found</div>,
    },
]);

export default router;
