import React from 'react'

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Props = {
  users: User[]
  index: number
}

function UserCard(props: Props) {
  return (
    <>
      <div>{props.users[props.index].id}</div>
      <div>{props.users[props.index].name}</div>
      <div>{props.users[props.index].username}</div>
      <div>{props.users[props.index].email}</div>
      <div>{props.users[props.index].address.street}</div>
      <div>{props.users[props.index].address.suite}</div>
      <div>{props.users[props.index].address.city}</div>
      <div>{props.users[props.index].address.zipcode}</div>
      <div>{props.users[props.index].address.geo.lat}</div>
      <div>{props.users[props.index].address.geo.lng}</div>
      <div>{props.users[props.index].phone}</div>
      <div>{props.users[props.index].website}</div>
      <div>{props.users[props.index].company.name}</div>
      <div>{props.users[props.index].company.catchPhrase}</div>
      <div>{props.users[props.index].company.bs}</div>
    </>
  )
}

export default UserCard