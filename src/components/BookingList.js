import React from 'react';
import BookingItem from './BookingItem';

const BookingList = ({bookings})=>

{

    const bookingList = bookings.map((booking)=>
    {
        return(
            <BookingItem booking={booking} key={booking._id}/>
        )
    })

    return(
        <>
            {bookingList}
        </>
    )
}

export default BookingList;