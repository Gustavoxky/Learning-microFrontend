import React from "react"

import { HeaderSC, LineSC, LinkSC, MenuItemSC, MenuSC } from "./headerStyle"

const Header = () => {
    return (
        <HeaderSC>
            <MenuSC>
                <MenuItemSC>
                    <LinkSC href='http://localhost:3001/'>Home</LinkSC>
                    <LineSC/>
                </MenuItemSC>
                <MenuItemSC>
                    <LinkSC href='https://github.com/Gustavoxky'> Github</LinkSC>
                    <LineSC/>
                </MenuItemSC>
                <MenuItemSC>
                    <LinkSC href='https://www.linkedin.com/in/gustavo-correia-dos-santos-6039641a6/'> Linkedin</LinkSC>
                    <LineSC/>
                </MenuItemSC>
                <MenuItemSC>
                    <LinkSC href='#'>Me</LinkSC>
                    <LineSC/>
                </MenuItemSC>
            </MenuSC>
        </HeaderSC>
    )
}

export default Header