import style from '@/styles/Button.module.css';

export type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
    return <button className={style.button} onClick={onClick}>{children}</button>
}
