import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post)
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form action="" onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">Title: </label> <br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Body: </label> <br />
                        <textarea name="body" id="" cols="30" rows="10" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br />
                    <button type="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform)