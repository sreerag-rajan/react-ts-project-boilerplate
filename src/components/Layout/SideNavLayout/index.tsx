import { CSSProperties, PropsWithChildren } from 'react';

const style : CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '10rem auto',
  minHeight: '80vh'
}

export const SideNavLayout = ({children} : PropsWithChildren) => {
  return (
    <div style={style}>
      <nav style={{backgroundColor: '#A4d5e2'}}>

      </nav>
      <main style={{backgroundColor: '#C9fb78'}}>
        {children}
      </main>
    </div>
  );
};
