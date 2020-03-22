import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; //button fade
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
  
class Checklist extends Component {
    componentDidMount() { // Lifecycle Method
        this.props.getItems();
    }

    onDeleteclick = (id) => {
        this.props.deleteItem(id);
    }

    render() {
        const {items} = this.props.item;
        return (
            <Container>
                <row />
                <col-sm-12 />
                <div className="Header" /><strong>Essential Supplies for New Pet Owners (Customize)</strong>
            <ListGroup>
                <TransitionGroup className="Checklist"> {
                    items.map(({ _id, name }) => (<CSSTransition key={_id}
                        timeout={500}
                        classNames="fade">
                        <ListGroupItem>
                            <Button className="remove-btn" color="danger" size="sm"
                                onClick={
                                    this.onDeleteclick.bind(this, _id)
                            }>
                                &times;
                            </Button>
                            {name} 
                        </ListGroupItem>
                    </CSSTransition>))
                } </TransitionGroup>
            </ListGroup>
        </Container>);
    }
} Checklist.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired //represents State (mapping redux state to a component property)
}

const mapStateToProps = (state) => ({
    item: state.item});
// const mapDispatchToProps ;

export default connect(mapStateToProps, { getItems, deleteItem })(Checklist);

