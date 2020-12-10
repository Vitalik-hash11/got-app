import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage'

export default class CharacterPage extends Component {

    state = {
        selectedChar: null,
        error: false
    }

    onCharSelected = id => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({error: true})
    }


    render() {
        const { selectedChar, error } = this.state;

        if(error) {
            return (
                <ErrorMessage />
            )
        }

        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected} />
                </Col>
                <Col md='6'>
                    <CharDetails selectedChar={selectedChar} />
                </Col>
            </Row>
        )
    }
}