import React, { Component } from 'react';
import { ListGroup, Constainer, ListGroupItem, ListGroupItemHeading, Col, ListGroupItemText } from 'reactstrap';
import OrderList from "./OrderList";
import axios from "axios";
class Orders extends Component {

    state = {
        data: [],
        cname: "",
        cnumber: "",
        dishdetails: [],
        caddress: "",
        dname: "",
        dnum: "",
        ddes: "",
        status: ""
    }

    componentDidMount() {
        axios
            .get("https://food-deliveryapi.herokuapp.com/orderdetails")
            .then((res) => {
                console.log(res.data.orders);
                this.setState({
                    data: res.data.orders
                });
            })
            .catch((err) => {
            });
    }
    render() {
        const { data, status, dishdetails, cname, cnumber, caddress, dname, dnum, ddes } = this.state;
        return (
            <div>


                <ListGroup>
                    <ListGroupItem color="dark">
                        <h3 style={{ fontWeight: "bold" }}>Orders</h3>
                        {data.length ?

                            data.map((info, i) => (
                                <OrderList key={i} dishdetails={info.DishDetails} dname={info.dname} status={info.status} caddress={info.caddress} dnum={info.dnum} ddes={info.ddes} cnum={info.cnum} cname={info.cname} />
                            ))

                            :
                            <Col>
                                <h2 className="title text-center font-weight-bold">Your order list is empty !!</h2>
                            </Col>
                        }

                    </ListGroupItem>

                </ListGroup>
            </div>
        );

    }
}

export default Orders;