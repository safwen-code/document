import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getdocument} from '../action/docaction'
// import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'


class Mentor extends Component {
   
    componentWillMount() {
        this.props.getdocument()
    }
    

    render() {
        console.log(this.props.document.document)
        return (
            <div className="card">
                {this.props.document.document.map((el, i) =>
                    <Card key={i}>
                        <Card.Body>
                            <Card.Img variant="top" src={el.image} />
                            <Card.Title>{el.titel}</Card.Title>
                            <Card.Text>
                                {el.description}
                            </Card.Text>
                            <Card.Title>{el.rates}</Card.Title>
                            {/* <Link to={`/updatedocument/${el._id}`}>
                                <Button variant="outline-info">Update</Button>
                            </Link> */}
                            {/* <Button variant="outline-danger"
                                onClick={() => {
                                    this.props.deletedocument(el._id);
                                }}>delete</Button> */}
                        </Card.Body>
                    </Card>
                )}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    document:state.document
  });
export default connect(
    mapStateToProps,
    {getdocument}
)(Mentor);