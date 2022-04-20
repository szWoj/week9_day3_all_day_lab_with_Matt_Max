import React from 'react';

const BookingItem = ({booking}) => 
{
    return(
        <>
            <h2>Name: {booking.name}</h2>
            <p>Email: {booking.email}</p>
            {booking.check_in ? <p>Checked in</p> : <p>Not Checked In</p>}
        </>
    )
}

export default BookingItem