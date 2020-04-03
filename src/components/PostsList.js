import React, { Component } from 'react'
import axios from 'axios'

class PostsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    render() {
        const {posts} = this.state
        return (
            <div>
                Posts fetched from jsonplaceholder API

                {
                    posts.map(post=>{
                        return(
                        <div key={post.id}>
                            <a href='/post/'>{post.title}</a>
                            <p>{post.body}</p>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PostsList
