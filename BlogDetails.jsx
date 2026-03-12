import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {

  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <h1>User Details</h1>

      <p><i>Name:</i> {user.name}</p>
      <p><i>Username:</i>{user.username}</p>
      <p><i>Email:</i>{user.email}</p>
      <p><i>Phone:</i>{user.phone}</p>
      <p><i>Website:</i>{user.website}</p>

      <p><i>Company:</i>{user.company.name}</p>

      <h3>Address</h3>

      <p><i>Street:</i>{user.address.street}</p>
      <p><i>City:</i>{user.address.city}</p>
      <p><i>Zipcode:</i>{user.address.zipcode}</p>

      <h3>Location</h3>

      <p><i>Latitude:</i>{user.address.geo.lat}</p>
      <p><i>Longitude:</i>{user.address.geo.lng}</p>

    </div>
  )
}
