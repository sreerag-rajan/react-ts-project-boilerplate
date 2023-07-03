import { CSSProperties, PropsWithChildren } from 'react';

const style : CSSProperties = {
  margin: '0',
  display: 'grid',
  gridTemplateRows: '5rem auto',
  minHeight: '50rem',
}

export const TopNavLayout = ({children} : PropsWithChildren) => {
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
