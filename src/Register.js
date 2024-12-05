import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [humorType, setHumorType] = useState('Humour absurde');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Générer un titre humoristique
    const titles = [
      "Maître des Blagues Absurdes",
      "Souverain des Jeux de Mots",
      "Chevalier du Rire Éclatant",
      "Seigneur des Fou Rires",
      "Expert en Blagues de Papa"
    ];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    setTitle(randomTitle);
    alert(`Félicitations, ${name}! Vous êtes maintenant un ${randomTitle}.`);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Inscription : Devenez Citoyen de l'Humour</h1>
      <p>Remplissez ce formulaire pour entrer dans le royaume du rire.</p>

      <form onSubmit={handleSubmit} style={{ margin: '2rem auto', maxWidth: '400px', textAlign: 'left' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Nom complet :</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Votre nom (drôle ou sérieux)" 
            style={{ width: '100%', padding: '0.5rem' }}
            required 
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Email :</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="exemple@rire.com" 
            style={{ width: '100%', padding: '0.5rem' }}
            required 
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Mot de passe :</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="********" 
            style={{ width: '100%', padding: '0.5rem' }}
            required 
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Type d'humour préféré :</label>
          <select 
            value={humorType} 
            onChange={(e) => setHumorType(e.target.value)} 
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option>Humour absurde</option>
            <option>Blagues de papa</option>
            <option>Mèmes Internet</option>
            <option>Tout ce qui fait rire, je prends !</option>
          </select>
        </div>

        <button 
          type="submit" 
          style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Rejoindre le Royaume de l'Humour
        </button>
      </form>

      {title && (
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h2>Bienvenue, {name} !</h2>
          <p>Votre titre humoristique : <strong>{title}</strong></p>
        </div>
      )}
    </div>
  );
};

export default Register;
