import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react"
import { getUsers } from '../services/api-service';

const Heading = styled.th`
  width: 150px;
`
const UserPic = styled.img`
  border-radius: 50px;
`

function UsersTable() {
  
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers()
    .then(setUsers)
    .catch(console.log)
  }, [])

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
              users?.results?.map((e, index) => {
                return(
                  <tr key={index}>
                    <td scope={"row"}>
                      {e.name.first}
                    </td>
                    <td>
                      {e.name.last}
                    </td>
                    <td>
                      {e.dob.age}
                    </td>
                    <td>
                      {e.gender}
                    </td>
                    <td>
                      {e.email}
                    </td>
                    <td>
                      {e.nat}
                    </td>
                    <td>
                      <UserPic src={`${e.picture.thumbnail}`} alt={"user"}/>
                    </td>
                  </tr>
                )
              })
            }
          
        </tbody>
      </Table>
    </div>
  );

}

export default UsersTable;