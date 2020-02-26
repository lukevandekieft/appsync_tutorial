import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { CreateNote, ListNotes } from "../GraphQL";
import { v4 as uuid } from 'uuid';

import { Form, Icon } from 'semantic-ui-react'

import { Auth } from "aws-amplify";

class AddNote extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getInitialState = () => ({
        id: 14,
        content: '',
        title: ''
    });

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        let d = 14;

        const { content, title, id } = this.state;
        console.log(this.state);
        this.setState(this.getInitialState(), () => {

            this.props.createNote({ id, title, content });
        });
    }

    render() {
      console.log(this.props);
        const isSubmitEnabled = this.state.title !== '' && this.state.content !== '';
        return (
            <fieldset>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group >
                      <Form.Input name="title" type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
                      <Form.Input name="content" type="text" placeholder="content" value={this.state.content} onChange={this.handleChange} />
                      <Form.Button icon labelPosition="right" type="submit" disabled={!isSubmitEnabled}><Icon name="upload" />Add Note</Form.Button>
                    </Form.Group>
                </Form>
            </fieldset>
        );
    }
}

export default graphql(
    CreateNote, {
      props: props => ({
        createNote: (input) => {
          return new Promise((resolve, reject) => {
            props.mutate({
              variables: {
                input
              },
            }).then((response) => {
              console.log(response);
              resolve(response.data.createNote);
            }).catch((err) => console.log(err));
          });
        }
      })
    },
)(AddNote);
