import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from '../redux/reducers/postsReducer'

function Posts(props) {
    //FETCH_REQUEST WHEN COMPONENT IS MOUNTED
    useEffect(() => {
        props.fetchPosts()
    }, [])

    useEffect(() => {
        console.log(props)
    }, [props])

    if(props.isLoading)
        return <div className="container"><h1>Loading...</h1></div>

    if(props.error)
        return <div className="container"><h1>Error Occured</h1></div>

    return (
        <div className="container">
            <h1>Posts | {props.posts.length}</h1>
            {props.posts.map((item, i) => (
                <div className="jumbotron" key={i}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    isLoading: state.posts.isLoading,
    erros: state.posts.error
})

export default connect(mapStateToProps, { fetchPosts: actions.fetchPostsRequest })(Posts)