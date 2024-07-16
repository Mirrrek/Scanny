'use client'

import Fullscreen from '@/components/Fullscreen';
import Button from '@/components/Button';

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
    return <Fullscreen>
        <h1>Unexpected Error</h1>
        <p>{error.message}</p>
        <Button onClick={reset}>Retry</Button>
    </Fullscreen>
}
