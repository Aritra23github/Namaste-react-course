import { useRouteError } from 'react-router-dom';

export default ErrorElement = () => {
    const errorMessage = useRouteError();
    
    return (
        <div>
            <h1>{errorMessage.status}: {errorMessage.statusText}</h1>
        </div>
    )
}