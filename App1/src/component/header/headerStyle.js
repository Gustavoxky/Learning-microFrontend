import styled from 'styled-components'

export const HeaderSC = styled.div`
    width: 100vw;
    height: 50px;
`
export const MenuSC = styled.ul`
    margin: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: row;    
    list-style: none;
    text-decoration: none;
`

export const MenuItemSC = styled.li`
    display: inline-flex;
    flex-direction: column;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    margin: 20px;
    
`

export const LinkSC = styled.a`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #291;
    
`
export const LineSC = styled.hr`
    background: #fff;
    border: none;
    border-radius: 20%;
    width: 100%;
    height: 3px;
`