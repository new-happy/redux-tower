import React, { Component } from 'react'
import styled from 'styled-components'

class Header extends Component {
    render() {
        return (
            <Warp>
              <Span>
                Haoqicat 
             </Span>
            </Warp>
        )
    }
}

export default Header

const Warp = styled.div`
    background-color: rgb(0, 188, 212);
    height: 8.4rem;
    width: 100%;
    text-align: center;
`
const Span = styled.span`
    font-weight: 600;
    font-size: 2.5em;
    letter-spacing: -1px;
    line-height: 8.4rem;
    color: rgb(255, 255, 255);
`