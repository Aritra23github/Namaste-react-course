import { useState, useEffect } from 'react';

export default useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });

        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })
    }, [onlineStatus]);

    return onlineStatus;
}