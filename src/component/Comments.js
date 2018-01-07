import React, { Component } from 'react';
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import shortid from 'shortid'

class Comments extends Component {
    state = {
        text:'',
        value:''
    }
    handleChange = e => {
        this.setState({
            text:e.target.value
        })
    }
    handleValue = e => {
        this.setState({
            value:e.target.value
        })
    }
    handlePush = () => {
        const  postId  = this.props.id
        const { text, value } = this.state
        if(text !== '' && value !==''){
        const id = shortid()
        const  comment = {
            id:id,
            name:text,
            text:value,
            postId:postId
        }
        this.props.addComment(comment)
        this.setState({
            text:'',
            value:''
        })
      }  
    }
    handleClick = (postId) => {
        const { comments } = this.props
        const replyList = comments.reply
        const newReply = replyList.filter(t => t.id !== postId)
        this.props.removeFabulous(newReply)
    }
    render() {
        const { replys } = this.props
        const reply = [...replys].reverse()
        const replyList = reply.map( t => {
            return (<CommentList key={t.id}>
                <div>
                 <span>{t.name}</span>:<span>{t.text}</span>
                </div>
                 <Button onClick={()=>this.handleClick(t.id)}>X</Button>
            </CommentList>)
        })
        return (
            <Warp>
              <MuiThemeProvider>
                <div>  
                <div>
                  { replyList }
                </div>
                <div>
                    <TextField hintText="名字" value={this.state.text} onChange={this.handleChange}/><br />
                    <TextField hintText="评论" value={this.state.value} onChange={this.handleValue} /><br />
                    <RaisedButton label="评论" onClick={this.handlePush} secondary={true} />
                </div>
                </div>
              </MuiThemeProvider>
            </Warp>
        )
    }
}

export default Comments

const Warp = styled.div`
    width:70%;
    margin:0 auto;
    padding:1.5em;
    background-color:#fff;
    margin-top:3em;
    margin-bottom:3em;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
    border-radius: 2px;
`
const CommentList = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 0.5em 0;
    color: #777;
`
const Button = styled.button`
    border-radius: 50%;
    border: 2px solid #c20c0c;
    background-color: #FFF;
    color: #c20c0c;
`