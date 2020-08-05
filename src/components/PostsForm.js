import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../redux/reducers/postsReducer'

function PostsForm(props) {
    const [titleValue, setTitleValue] = useState('')
    const [bodyValue, setBodyValue] = useState('')
    
    const formSubmited = (e) => {
        e.preventDefault()

        if(/\S/.test(titleValue) && /\S/.test(bodyValue))
            props.addPost({
                title: titleValue,
                body: bodyValue
            })
        else
            alert('Please fill requried values')
    }

    return (
        <div className="container">
            <br />
            <form onSubmit={formSubmited}>
                <h1>Add post</h1>
                <div className="form-group">
                    <label>Title:</label>
                    <input value={titleValue} onChange={(e) => setTitleValue(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea value={bodyValue} onChange={(e) => setBodyValue(e.target.value)} className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
                <hr />
            </form>
        </div>
    )
}

export default connect(null, { addPost: actions.addPostRequest })(PostsForm)