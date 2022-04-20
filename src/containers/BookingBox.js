import React, {useState, useEffect} from 'react';
import BookingList from '../components/BookingList'
import BookingForm from '../components/BookingForm'

const BookingBox = ()=>
{
    const [bookings, setBookings] = useState([]);

    useEffect(()=>
    {
        getBookings();
    },[])
    
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

    const deleteBooking = (id)=>
    {
        const newBookings = [...bookings]
        fetch(`http://localhost:4000/api/bookings/${id}`,
        {
            method: 'DELETE'
        })
        newBookings.splice(newBookings.indexOf(id), 1)
        setBookings(newBookings)
        
    }

    const updateBooking = (data, id, index) =>
    {
        const newBookings = [...bookings]
        fetch(`http://localhost:4000/api/bookings/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        newBookings[index].check_in = data.check_in
        setBookings(newBookings)
    }




    return (
        <>
        <h1>Hi</h1>
        <BookingForm postBooking={postBooking}/>
        <BookingList bookings={bookings} deleteBooking={deleteBooking} updateBooking={updateBooking}/>
        
        </>
    )
}

export default BookingBox;