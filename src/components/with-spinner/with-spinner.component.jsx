import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style'


// Wrapped Component is actual component
//which we will be shown when loading is false
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
}

export default WithSpinner;