import React from 'react';
import TextType from './TextType';
import LetterGlitch from './LetterGlitch';
import FallingText from './FallingText';
import TextPressure from './TextPressure';

const Intro = () => {
  const egenskaper = [
    "Løsningsorientert", "Positiv", "Fleksibel", "Nøyaktig", "Interessert", "Omgjengelig", "Engasjert", "Selvstendig", "Ansvarsbevisst", "Initiativrik", "Strukturert",
    "Pålitelig", "Effektiv", "Tålmodig", "Kreativ", "Motivasjonssterk", "Nysgjerrig", "Lærevillig"
  ];

const highlightMap = {
    Løsningsorientert: 'cyan',
    Positiv: 'yellow',
    Fleksibel: 'magenta',
    Nøyaktig: 'orange',
    Interessert: 'lime',
    Omgjengelig: 'pink',
    Engasjert: 'lightblue',
    Selvstendig: 'lightgreen',
    Ansvarsbevisst: 'gold',
    Initiativrik: 'salmon',
    Strukturert: 'turquoise',
    Pålitelig: 'violet',
    Effektiv: 'coral',
    Tålmodig: 'plum',
    Kreativ: 'deepskyblue',
    Motivasjonssterk: 'chartreuse',
    Nysgjerrig: 'tomato',
    Lærevillig: 'aquamarine'
  };

  return (
    <section
      id="intro"
      style={{
        position: 'fixed',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '2rem',
        textAlign: 'center',
        marginTop: '-250px'
      }}
    >
      {/* Bakgrunn */}
      <LetterGlitch
        glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
        glitchSpeed={50}
        smooth={true}
        outerVignette={true}
        centerVignette={false}
      />

      {/* Wrapper med blurry boks */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(0, 0, 0, 0.34)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(4.6px)',
          WebkitBackdropFilter: 'blur(20.6px)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          maxWidth: '1000px',
          margin: '0 auto',
          flexShrink: 0,
        }}
      >
        <TextType
          text="Velkommen til min portefølje :)"
          speed={100}
          cursor={true}
          loop={false}
        />
        <TextType
          text="Jeg heter..."
          speed={100}
          cursor={true}
          loop={false}
        />

        {/* Ny TextPressure-komponent */}
        <div style={{ position: 'relative', height: '100px' }}>
          <TextPressure
            text="Leander_Bråten"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={130}
          />
        </div>

        <h2 style={{ margin: '2rem 0 1rem', fontSize: '1.8rem', color: '#61dca3' }}>
          Mine ferdigheter:
        </h2>

        <div
          style={{
            width: '100%',
            height: '300px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 1,
          }}
        >
          <FallingText
            text={egenskaper.join(' ')}
            highlightWords={egenskaper}
            highlightMap="highlightMap"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.3}
            fontSize="1.5rem"
            mouseConstraintStiffness={0.9}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;