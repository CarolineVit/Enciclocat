import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './Card.module.css';

const style = {
  color: 'var(--gray)',
  borderRadius: '8px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'var(--bege)',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

function Card({ breed }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <div className={styles.card} onClick={handleOpenModal}>
        <img className={styles.img} src={breed.image?.url} alt={breed.name} />
        <h3 className={styles.h3}>{breed.name}</h3>
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {breed.name}
          </Typography>
          <img src={breed.image?.url} alt={breed.name} style={{ maxWidth: '100%' }} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Temperamento:</strong> {breed.temperament}<br />
            <strong>Origem:</strong> {breed.origin}<br />
            <strong>Expectativa de vida:</strong> {breed.life_span} anos<br />
            <strong>Inteligência:</strong> {breed.intelligence} <br />
            <strong>Sociabilidade com crianças:</strong> {breed.child_friendly}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Card;
