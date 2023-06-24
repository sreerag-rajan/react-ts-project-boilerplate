import { RouterProvider } from 'react-router-dom';
import { router } from '../../../routes';

// interface DefaultLayoutProps {
//   children: ReactNode;
// }

export const DefaultLayout = () => {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
};


