import React from "react";

function CreateCustomer(props) {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#myModalCustomer"
      >
        Create New Customer
      </button>
      <div
        className="modal fade"
        id="myModalCustomer"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                New Customer
              </span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Full Name"
                name="full_name"
                value={props.singledata.full_name}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="Email Address"
                name="email_address"
                value={props.singledata.email_address}
                onChange={props.handleChange}
            />
              <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone_number"
                  value={props.singledata.phone_number}
                  onChange={props.handleChange}
              />
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
                onClick={props.createCustomer}
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

export default CreateCustomer;