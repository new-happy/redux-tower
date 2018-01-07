import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from './Header'
import imgSrc from '../images/fabulous.svg'
import imgSrc1 from '../images/comment.svg'

class Home extends Component {
    handleClick = (postId) => {
        this.props.addFabulous(postId)
    }
    render() {  
        const { view, comments} = this.props
        const viewList = view.map(t => {
            const comment = comments.reply.filter(item => item.postId === t.id)
           return (<ViewList className="view-list" key={t.id}>
           <Link to={{pathname:`view/${t.id}`,
                    state:t
           }}>
              <Img src="http://o86bpj665.bkt.clouddn.com/posters/meteor-react-bird.png" alt="1"/>
              </Link>
              <Title>
                <span>{t.title}</span>
                <Button onClick={()=> this.handleClick(t.id)}>
                    <ImgOne src={imgSrc} alt="1" />
                    {comments.fabulous[t.id]}</Button>
                <Link to={{pathname:`view/${t.id}`,
                    state:t
                }}>
                    <Button><ImgOne src={imgSrc1} alt="1"/>
                    {comment.length}</Button></Link>
              </Title>
           </ViewList>)
        })
        return (
            <div>
                <Header />
                <Warp>
                   { viewList }
                </Warp>
            </div>
        )
    }
}

export default Home

const Warp = styled.div`
    width:90%;
    margin:0 auto;
    padding-top: 4em;
    padding-bottom: 6em;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`
const ViewList = styled.div`
    width:47%;
    margin-bottom:1.5em;
`
const Img = styled.img`
    width:100%;
    display: block;
`
const Title = styled.div`
    border-top: 1px solid rgb(226, 226, 226);
    padding: 1.5rem;
    display: flex;
    justify-content: space-around;
    background:#fff;
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
`
const ImgOne = styled.img`
    width:20px;
`