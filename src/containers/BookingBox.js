import React, {useState, useEffect} from 'react';
import BookingList from '../components/BookingList'
import BookingForm from '../components/BookingForm'

const BookingBox = ()=>
{
    const [bookings, setBookings] = useState([]);

    useEffect(()=>
    {
        getBookings();
    },[bookings])
    
    const getBookings = ()=>
    {
        fetch('http://localhost:4000/api/bookings')
        .then(re=> re.json())
        .then(res => setBookings(res))
    }

    const postBooking = (data)=>
    {
        const newBookings = [...bookings]
        fetch('http://localhost:4000/api/bookings', 
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => {
            newBookings.push(res)
            setBookings(newBookings)
        })
    }

    


    return (
        <>
        <h1>Hi</h1>
        <BookingForm postBooking={postBooking}/>
        <BookingList bookings={bookings}/>
        
        </>
    )
}

export default BookingBox;