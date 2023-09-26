import React from "react";
import {CreateCustomer, CreateVehicle} from "./imports";
import Customers from "./customer/Customers";
import Vehicles from "./vehicle/Vehicles";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            alldata: [],
            singledata: {
                full_name: "",
                email_address: "",
                phone_number: "",
                brand: "",
                model: "",
                year: "",
                price_per_day: "",
                available_cars: ""
            },
            table: "customers"
        };
        this.getVehicles = this.getVehicles.bind(this);
        this.getVehicle = this.getVehicle.bind(this);
        this.updateVehicle = this.updateVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);
        this.createVehicle = this.createVehicle.bind(this);
        this.getCustomers = this.getCustomers.bind(this);
        this.getCustomer = this.getCustomer.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    getVehicles() {
        this.setState({loading: true, table: "vehicles"}, () => {
            fetch("http://localhost:3001/vehicles")
                .then(res => res.json())
                .then(result =>
                    this.setState({
                            loading: false,
                            alldata: result
                        }
                    )).catch(console.log)
        })
    }

    getVehicle(event, id) {
        this.setState(
            {
                singledata: {
                    brand: "Loading...",
                    model: "Loading...",
                    year: "Loading...",
                    price_per_day: "Loading...",
                    available_cars: "Loading..."
                }
            },
            () => {
                fetch("http://localhost:3001/vehicles/" + id)
                    .then(res => res.json())
                    .then(result => {
                        this.setState({
                            singledata: {
                                brand: result.brand,
                                model: result.model,
                                year: result.year,
                                price_per_day: result.price_per_day,
                                available_cars: result.available_cars
                            }
                        });
                    });
            }
        );
    }

    updateVehicle(event, id) {
        fetch("http://localhost:3001/vehicles/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.singledata)
        })
            .then(res => res.json())
            .then(result => {
                this.setState({
                    singledata: {
                        brand: "",
                        model: "",
                        year: "",
                        price_per_day: "",
                        available_cars: ""
                    }
                });
                this.getVehicles();
            });
    }

    deleteVehicle(event, id) {
        fetch("http://localhost:3001/vehicles/" + id, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                this.setState({
                    singledata: {
                        brand: "",
                        model: "",
                        year: "",
                        price_per_day: "",
                        available_cars: "",
                    }
                });
                this.getVehicles();
            });
    }

    createVehicle() {
        fetch("http://localhost:3001/vehicles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.singledata)
        }).then(
            this.setState({
                singledata: {
                    brand: "",
                    model: "",
                    year: "",
                    price_per_day: "",
                    available_cars: ""
                }
            })
        );
        this.getVehicles();
    }



    handleChange(event) {
        var full_name = this.state.singledata.full_name;
        var email_address = this.state.singledata.email_address;
        var phone_number = this.state.singledata.phone_number;
        var brand = this.state.singledata.brand;
        var model = this.state.singledata.model;
        var year = this.state.singledata.year;
        var price_per_day = this.state.singledata.price_per_day;
        var available_cars = this.state.singledata.available_cars;
        if (event.target.name === "full_name") full_name = event.target.value;
        if (event.target.name === "email_address") email_address = event.target.value;
        if (event.target.name === "phone_number") phone_number = event.target.value;
        if (event.target.name === "brand") brand = event.target.value;
        if (event.target.name === "model") model = event.target.value;
        if (event.target.name === "year") year = event.target.value;
        if (event.target.name === "price_per_day") price_per_day = event.target.value;
        if (event.target.name === "available_cars") available_cars = event.target.value;

        this.setState({
            singledata: {
                full_name: full_name,
                email_address: email_address,
                phone_number: phone_number,
                brand: brand,
                model: model,
                year: year,
                price_per_day: price_per_day,
                available_cars: available_cars
            }
        });
    }

    getCustomers() {
        this.setState({loading: true, table: "customers"}, () => {
            fetch("http://localhost:3001/customers")
                .then(res => res.json())
                .then(result =>
                    this.setState({
                        loading: false,
                        alldata: result
                    })
                )
                .catch(console.log);
        });
    }

    createCustomer() {
        fetch("http://localhost:3001/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.singledata)
        }).then(
            this.setState({
                singledata: {
                    full_name: "",
                    email_address: "",
                    phone_number: ""
                }
            })
        );
        this.getCustomers();
    }

    getCustomer(event, id) {
        this.setState(
            {
                singledata: {
                    full_name: "Loading...",
                    email_address: "Loading...",
                    phone_number: "Loading..."
                }
            },
            () => {
                fetch("http://localhost:3001/customers/" + id)
                    .then(res => res.json())
                    .then(result => {
                        this.setState({
                            singledata: {
                                full_name: result.full_name,
                                email_address: result.email_address ? result.email_address : "",
                                phone_number: result.phone_number ? result.phone_number : ""
                            }
                        });
                    });
            }
        );
    }

    updateCustomer(event, id) {
        fetch("http://localhost:3001/customers/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.singledata)
        })
            .then(res => res.json())
            .then(result => {
                this.setState({
                    singledata: {
                        full_name: "",
                        email_address: "",
                        phone_number: ""
                    }
                });
                this.getCustomers();
            });
    }

    deleteCustomer(event, id) {
        fetch("http://localhost:3001/customers/" + id, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                this.setState({
                    singledata: {
                        full_name: "",
                        email_address: "",
                        phone_number: ""
                    }
                });
                this.getCustomers();
            });
    }

    render() {
        const customersTable = this.state.loading ? (
            <span>Loading...Is usually slower than localhost...</span>
        ) : (
            <Customers
                alldata={this.state.alldata}
                singledata={this.state.singledata}
                getCustomers={this.getCustomers}
                getCustomer={this.getCustomer}
                updateCustomer={this.updateCustomer}
                deleteCustomer={this.deleteCustomer}
                handleChange={this.handleChange}
            />
        );

        const vehiclesTable = this.state.loading ? (
            <span>Loading...Is usually slower than localhost...</span>
        ) : (
            <Vehicles
                alldata={this.state.alldata}
                singledata={this.state.singledata}
                getVehicles={this.getVehicles}
                getVehicle={this.getVehicle}
                updateVehicle={this.updateVehicle}
                deleteVehicle={this.deleteVehicle}
                handleChange={this.handleChange}
            />
        );

        return (
            <div className="container">
        <span className="title-bar">
          <button
              type="button"
              className="btn btn-primary"
              onClick={this.getCustomers}
          >
            Get Customers
          </button>
          <CreateCustomer
              singledata={this.state.singledata}
              createCustomer={this.createCustomer}
              handleChange={this.handleChange}
          />
          <button
              type="button"
              className="btn btn-primary"
              onClick={this.getVehicles}
          >
            Get Vehicles
          </button>
            <CreateVehicle
                singledata={this.state.singledata}
                createVehicle={this.createVehicle}
                handleChange={this.handleChange}
            />
        </span>
                <br/>
                {this.state.table === "customers" ? customersTable : vehiclesTable}
            </div>
        );
    }
}

export default App;
