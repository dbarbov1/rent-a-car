import React from 'react'
import UpdateVehicle from "./UpdateVehicle";
import DeleteVehicle from "./DeleteVehicle";

function Vehicles(props) {
    var rows = [];
    props.alldata.forEach(element => {
        rows.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.brand} {element.model} {element.year}</td>
                <td>{element.price_per_day}</td>
                <td>{element.available_cars}</td>
                <td><UpdateVehicle
                    elementId={element.id}
                    singledata={props.singledata}
                    getVehicle={props.getVehicle}
                    updateVehicle={props.updateVehicle}
                    handleChange={props.handleChange}></UpdateVehicle></td>
                <td>
                    <DeleteVehicle
                        elementId={element.id}
                        singledata={props.singledata}
                        getVehicle={props.getVehicle}
                        deleteVehicle={props.deleteVehicle}></DeleteVehicle>
                </td>
            </tr>)
    });
    return(
        <table className="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Brand & Model & Year</th>
                <th>Price per Day</th>
                <th>Available cars</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default Vehicles;