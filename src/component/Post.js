import React, { Component } from 'react'
import styled from 'styled-components'
import imgSrc from '../images/fabulous.svg'
import imgSrc1 from '../images/comment.svg'

class Post extends Component {
    handleClick = (postId) => {
        this.props.addFabulous(postId)
    }
    render() {
        const { view, replys, fabulou, id} = this.props
        console.log(this.props)
        
        return (
            <Box>
                <Warp>
                    <Img src="http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png" alt=""/>
                    <Title>
                    <span>{view.title}</span>
                    <CommentList>
                    <Button onClick={()=>this.handleClick(id)}>
                        <ImgOne src={imgSrc} alt="1" />
                        { fabulou }
                    </Button>
                    <Button>
                        <ImgOne src={imgSrc1} alt="1"/>
                        {replys.length}
                    </Button>
                    </CommentList>
                    </Title>
                </Warp>
            </Box>
        )
    }
}

export default Post
const Box = styled.div`
    background-color: rgb(0, 188, 212);
`

const Warp = styled.div`
    width:70%;
    margin:0 auto;
    padding-top: 4em;
    padding-bottom: 4em;
`
const Img = styled.img`
    width:100%;
    display: block;
`
const Title = styled.div`
    border-top: 1px solid rgb(226, 226, 226);
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`
const Button = styled.button`
    border:1px solid #fff;
    width: 4em;
    line-height: 2em;
    background-color: #fff;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 2em;
`
const ImgOne = styled.img`
    width:20px;
`
const CommentList = styled.div`
    display: flex;
    
`