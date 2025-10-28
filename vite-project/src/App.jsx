import React from 'react';
import CardNav from './CardNav';
import Intro from './Intro';
import logoImage from './assets/logo.svg';

function App() {
  return (
    <>
      <CardNav
        logo={logoImage}
        items={[
          { label: 'Hjem', href: '#intro' },
          { label: 'Ferdigheter', href: '#skills' },
          { label: 'Erfaring', href: '#experience' },
        ]}
      />
      <Intro />
    </>
  );
}

export default App;