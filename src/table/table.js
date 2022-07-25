import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react"
import { getUsers } from '../services/api-service';

const Heading = styled.th`
  max-width: 10px;
`
const UserPic = styled.img`
  border-radius: 50px;
`
const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background: #2D9CDB;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-family: Arial;
  font-weight: 700;
  margin: 0 auto;
  &:hover {
    transition: .1s ease-in;
    background: #006bb3;
    transform: scale(1.1);
  :active {
    margin-top: 18px;
  }
`

function UsersTable() {
  
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers()
    .then(setUsers)
    .catch(console.log)
  }, [])

  /* ============ Funcion para ordenar la data por edad ============= */
  const ageOrder = users.sort((a, b) => {
    return a.dob.age - b.dob.age
  })


  return (
    <div>
      <Table className="table-primary" style={{textAlign: "center"}} striped hover bordered>
        <thead>
          <tr>
            <Heading>Nombre</Heading>
            <Heading>Apellido</Heading>
            <Heading>Edad</Heading>
            <Heading>Genero</Heading>
            <Heading>Email</Heading>
            <Heading>Nacionalidad</Heading>
            <Heading>Foto</Heading>
          </tr>
        </thead>
        <tbody>
          {
            ageOrder?.map((e, index) => {
              return(
                <tr key={index}>
                  <td scope={"row"}>{e.name.first}</td>
                  <td>{e.name.last}</td>
                  <td>{e.dob.age}</td>
                  <td>{e.gender}</td>
                  <td>{e.email}</td>
                  <td>{e.nat}</td>
                  <td>
                    <UserPic src={`${e.picture.thumbnail}`} alt={"user"}/>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <a style={{textDecoration: "none"}} href='https://randomuser.me/api/?seed=foobar&results=15&format=csv&dl'>
        <Button>Download raw data</Button>
      </a>
    </div>
  );
}

export default UsersTable;