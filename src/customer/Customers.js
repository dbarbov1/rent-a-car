import React from 'react'
import UpdateCustomer from './UpdateCustomer';
import DeleteCustomer from './DeleteCustomer';

function Customers(props) {
    var rows = [];
    props.alldata.forEach(element => {
        rows.push(
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.full_name}</td>
            <td>{element.email_address}</td>
            <td>{element.phone_number}</td>
            <td><UpdateCustomer
                elementId={element.id}
                singledata={props.singledata}
                getCustomer={props.getCustomer}
                updateCustomer={props.updateCustomer}
                handleChange={props.handleChange}></UpdateCustomer></td>
            <td>
                <DeleteCustomer
                elementId={element.id}
                singledata={props.singledata}
                getCustomer={props.getCustomer}
                deleteCustomer={props.deleteCustomer}></DeleteCustomer>
            </td>
        </tr>)
    });
    return(
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Update</th>
                  <th>Delete</th>
              </tr>
          </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

export default Customers;