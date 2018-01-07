import React, { Component } from 'react'
import Header from './Header'
import Post from './Post'
import Comments from './Comments'


class View extends Component {
    render() {
        const {comments,match,views,addFabulous, addComment,removeFabulous} = this.props
        const {id} = match.params
        const view = views.find(t => t.id === id)
        const fabulou = comments.fabulous[id]
        const reply = comments.reply.filter(t => t.postId === id)
        
        return (
            <div>
                <Header />
                <Post view={view} fabulou={fabulou} replys={reply} id={id} addFabulous={addFabulous} />
                <Comments replys={reply} addComment={addComment}  id={id} comments={comments} removeFabulous={removeFabulous} />
            </div>
        )
    }
}

export default View
