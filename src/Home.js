import React, { useState } from 'react';

const Home = () => {
  const jokes = [
    "Pourquoi les canards sont-ils toujours heureux ? Parce qu'ils se marrent !",
    "Je me suis inscrit à un cours de jonglage, mais ça n'a pas marché... Je n'avais pas le niveau.",
    "Pourquoi les programmeurs préfèrent-ils l'obscurité ? Parce que la lumière les bogue !",
    "Quel est le comble pour un électricien ? Ne pas être au courant.",
    "Pourquoi les squelettes n'aiment-ils pas les soirées ? Ils n'ont personne avec qui danser !"
  ];

  const [joke, setJoke] = useState(jokes[0]);

  const generateJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Bienvenue dans l'univers de l'humour !</h1>
      <p>Une blague pour vous :</p>
      <div 
        style={{ 
          margin: '1rem auto', 
          padding: '1rem', 
          border: '1px solid #ddd', 
          borderRadius: '10px', 
          maxWidth: '400px', 
          backgroundColor: '#f9f9f9' 
        }}
      >
        <strong>{joke}</strong>
      </div>
      <button 
        onClick={generateJoke} 
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Nouvelle blague !
      </button>

      <div style={{ marginTop: '2rem' }}>
        <h2>Quelques images drôles :</h2>
        <img 
          src="https://i.imgur.com/dvHkaXf.jpeg" 
          alt="Drôle" 
          style={{ width: '200px', margin: '1rem' }}
        />
        <img 
          src="https://i.imgur.com/fQ2Od3n.jpeg" 
          alt="Marrant" 
          style={{ width: '200px', margin: '1rem' }}
        />
      </div>
    </div>
  );
};

export default Home;
