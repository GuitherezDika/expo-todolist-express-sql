import { SessionProvider } from '@/context/ctx';
import { Slot } from 'expo-router';

export default function Root () {
    return (
        <SessionProvider>
            <Slot />    
        </SessionProvider>
    )
};
