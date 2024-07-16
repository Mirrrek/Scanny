import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import '@/styles/global.css';

const font = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Scanny',
    description: 'Extract and correct scanned pictures.'
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <html lang='en'>
        <body className={font.className}>{children}</body>
    </html>
}
