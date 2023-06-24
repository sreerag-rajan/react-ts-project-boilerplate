import { CSSProperties } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@routes/index';

const style : CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '10rem auto',
  minHeight: '80vh'
}

export const SideNavLayout = () => {
  return (
    <div style={style}>
      <nav style={{backgroundColor: '#A4d5e2'}}>

      </nav>
      <main style={{backgroundColor: '#C9fb78'}}>
        <RouterProvider router={router}/>
      </main>
    </div>
  );
};
