import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import styles from './Racas.module.css'; 

function Ajuda() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const breedsPerPage = 28;

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds?page=${currentPage - 1}&limit=${breedsPerPage}`,
        { headers: { 'x-api-key': 'live_BtgeySl2X1RjPca3UEaSWgk5SOLlFN0MQzpVFdm7GejfuyX1N3W1vXJYH7S6y9D9' } } 
      );
      const data = await response.json();
      setBreeds(data);
    };

    fetchBreeds();
  }, [currentPage]);

  const handleCardClick = (breed) => {
    setSelectedBreed(breed);
  };

  const handleCloseModal = () => {
    setSelectedBreed(null);
  };

  const totalPages = Math.ceil(200 / breedsPerPage); 
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className={styles.ajuda}>
      <h1>Raças de Gatos</h1>

      <div className={styles.cardGrid}>
        {breeds.map((breed) => (
          <Card
            key={breed.id}
            breed={breed}
            onClick={() => handleCardClick(breed)}
          />
        ))}
      </div>

     
      <div className={styles.pagination}>
      </div>

      {selectedBreed && (
        <Modal breed={selectedBreed} onClose={handleCloseModal} />
      )}
    </section>
  );
}

export default Ajuda;
