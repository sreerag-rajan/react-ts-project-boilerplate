import { CSSProperties } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../../routes/index';

const style : CSSProperties = {
  margin: '0',
  display: 'grid',
  gridTemplateRows: '5rem auto',
  minHeight: '50rem',
}

export const TopNavLayout = () => {
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
