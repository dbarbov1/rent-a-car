import React from "react";

function CreateVehicle(props) {
    return (
        <React.Fragment>
            <button
                type="button"
                className="btn btn-info"
                data-toggle="modal"
                data-target="#myModalVehicle"
            >
                Create New Vehicle
            </button>
            <div
                className="modal fade"
                id="myModalVehicle"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                New Vehicle
              </span>
                            <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text"
                                   placeholder="Brand"
                                   name="brand"
                                   value={props.singledata.brand}
                                   onChange={props.handleChange}>

                            </input>
                            <input type="text"
                                   placeholder="Model"
                                   name="model"
                                   value={props.singledata.model}
                                   onChange={props.handleChange}>

                            </input>
                            <input type="text"
                                   placeholder="Year"
                                   name="year"
                                   value={props.singledata.year}
                                   onChange={props.handleChange}>

                            </input>

                            <input type="text"
                                   placeholder="Price per day"
                                   name="price_per_day"
                                   value={props.singledata.price_per_day}
                                   onChange={props.handleChange}>
                            </input>
                            <input type="text"
                                   placeholder="Available cars"
                                   name="available_cars"
                                   value={props.singledata.available_cars}
                                   onChange={props.handleChange}>
                            </input>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={props.createVehicle}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreateVehicle;