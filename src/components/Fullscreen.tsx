import style from '@/styles/Fullscreen.module.css';

export type FullscreenProps = {
    children: React.ReactNode;
}

export default function Fullscreen({ children }: FullscreenProps) {
    return <div className={style.fullscreen}>{children}</div>
}
