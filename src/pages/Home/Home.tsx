import React from 'react';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>Добро пожаловать</h1>
      <p className={styles.subtitle}>
        ПМ это место, где вы можете легко сравнить все "за" и "против" чтобы
        принять верное решение! Мы предоставляем удобный инструмент для анализа
        всех аспектов, которые могут влиять на ваш выбор.
      </p>
    </div>
  );
};
