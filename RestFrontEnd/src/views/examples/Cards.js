import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <Card>

                <CardBody>
                    <CardTitle>props.title</CardTitle>
                    <CardSubtitle>props.prize</CardSubtitle>
                    <Button>Edit</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Cards;