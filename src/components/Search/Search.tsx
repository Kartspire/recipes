import { ChangeEventHandler } from 'react';
import { useAppSelector } from '../../app/hooks';
import styles from './Search.module.css';

interface ISearch {
  placeholder: string;
  onChange: ChangeEventHandler;
}

export function Search({ placeholder, onChange }: ISearch) {
  const searchQuery = useAppSelector((state) => state.search.searchQuery);

  return (
    <input
      className={styles.search}
      type="text"
      value={searchQuery}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
