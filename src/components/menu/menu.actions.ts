export const handleClick = (event: any) => ({
    type: 'HANDLE_CLICK',
    payload: {
        event: event
    }
});

export const handleClose = (event: any) => ({
    type: 'HANDLE_CLOSE',
    payload: {
        event: event
    }
});