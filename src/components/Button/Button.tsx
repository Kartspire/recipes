import styles from "./Button.module.css";

type ButtonProps = React.PropsWithChildren<{
  classes: string[];
  onClick: React.MouseEventHandler;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const allClasses = props.classes.map((el) => styles[el]).join(" ");

  return (
    <button
      onClick={props.onClick}
      className={` ${allClasses} ${props.disabled && styles.disabled}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
