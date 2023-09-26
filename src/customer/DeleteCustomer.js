import React from 'react';

function DeleteCustomer(props) {
    const modalIdentifier = 'delete'+props.elementId
    const dataTarget = '#'+modalIdentifier
    return (
      <React.Fragment>
        
    <button type="button" className="btn btn-info" data-toggle="modal" data-target={dataTarget}
    onClick={(e)=>props.getCustomer(e,props.elementId)}>Delete</button>
        <div className="modal fade" id={modalIdentifier} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-title" id="exampleModalLabel">Delete List</span>
                <button type="button" className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
                        <div className="modal-body">
                            <input type="text"
                                placeholder="Full Name"
                                name="full_name"
                                value={props.singledata.full_name}
                                disabled={true}>

                            </input><br></br>

                            <input type="text"
                                placeholder="Email Address"
                                name="email_address"
                                value={props.singledata.email_address}
                                disabled={true}>
                            </input>

                            <input type="text"
                                   placeholder="Phone Number"
                                   name="phone_number"
                                   value={props.singledata.phone_number}
                                   disabled={true}>
                            </input>
                        </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button"
                 className="btn btn-primary"
                 data-dismiss="modal"
                 onClick={(event)=>props.deleteCustomer(event,props.elementId)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
  
        </React.Fragment>
    )
    
  }

  export default DeleteCustomer;