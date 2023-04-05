import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { isOpen } from '../../app/reducers/controlsSlice';
import { Button } from '../Button';
import styles from './Dropdown.module.css';

type DropdownProps = React.PropsWithChildren<{
  menu: string[];
  defaultValue: string;
  onClick(prop: string): void;
}>;

export const Dropdown = ({ menu, onClick }: DropdownProps) => {
  const dispatch = useAppDispatch();
  const opened = useAppSelector((state) => state.controls.opened);

  const searchRecipes = menu.map((el, index) => (
    <Button
      key={index}
      classes={['standardBtn', 'secondary', 'mbs']}
      onClick={() => {
        onClick(el);
        dispatch(isOpen());
      }}
    >
      {el}
    </Button>
  ));
  return (
    <div className={styles.dropdownContainer}>
      <Button
        onClick={() => dispatch(isOpen())}
        classes={['standardBtn', 'secondary', 'mbm']}
      >
        Выбрать рецепт
      </Button>
      {opened && <div className={styles.optionsContainer}>{searchRecipes}</div>}
    </div>
  );
};
