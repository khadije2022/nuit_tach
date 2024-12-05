import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenue au Musée Virtuel de l'Humour !</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
        Il était une fois, dans un monde où tout était beaucoup trop sérieux, une bande d'ordinateurs
        décida qu'il était temps d'inventer quelque chose pour faire sourire tout le monde : <strong>notre site !</strong>  
      </p>

      <div 
        style={{ 
          margin: '2rem auto', 
          padding: '1rem', 
          border: '2px dashed #ccc', 
          borderRadius: '10px', 
          maxWidth: '600px', 
          backgroundColor: '#fafafa' 
        }}
      >
        <h2>Les règles du musée :</h2>
        <ul style={{ textAlign: 'left', margin: '1rem 2rem' }}>
          <li>1. Rire au moins une fois toutes les 5 minutes.</li>
          <li>2. Ne pas prendre les blagues trop au sérieux.</li>
          <li>3. Si une blague vous fait rire très fort, partagez-la (et merci pour la pub !).</li>
          <li>4. Les plaintes sont interdites... sauf si elles sont drôles.</li>
        </ul>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <h2>Galerie des ancêtres de l'humour :</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <div>
            <img 
              src="https://i.imgur.com/Chg3Sxg.png" 
              alt="Ancêtre drôle" 
              style={{ width: '150px', borderRadius: '10px' }}
            />
            <p>Le premier à rire de ses propres blagues.</p>
          </div>
          <div>
            <img 
              src="https://i.imgur.com/O3S60Ut.png" 
              alt="Philosophe humoriste" 
              style={{ width: '150px', borderRadius: '10px' }}
            />
            <p>L'inventeur de la blague absurde.</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', fontSize: '1rem', color: '#555' }}>
        <h2>Comment l'humour sauve le monde :</h2>
        <p>
          Saviez-vous que <strong>92%</strong> des problèmes peuvent être résolus avec un bon fou rire ?
          Et que <strong>100%</strong> des gens lisant cette page se sentent un peu mieux maintenant ? 😉
        </p>
      </div>
    </div>
  );
};

export default About;
