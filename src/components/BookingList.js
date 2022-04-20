import React from 'react';
import BookingItem from './BookingItem';

const BookingList = ({bookings, deleteBooking, updateBooking})=>

{

    const bookingList = bookings.map((booking, index)=>
    {
        return(
            <BookingItem booking={booking} index={index} key={booking._id} deleteBooking={deleteBooking} updateBooking={updateBooking}/>
        )
    })

    return(
        <>
            {bookingList}
        </>
    )
}

export default BookingList;