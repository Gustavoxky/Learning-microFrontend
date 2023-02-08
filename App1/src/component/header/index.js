import React from "react"

import { HeaderSC, MenuItemSC, MenuSC } from "./headerStyle"

const Header = () => {
    return (
        <HeaderSC>
            <MenuSC>
                <MenuItemSC>Home</MenuItemSC>
                <MenuItemSC>Github</MenuItemSC>
                <MenuItemSC>Linkedin</MenuItemSC>
                <MenuItemSC>mi</MenuItemSC>
            </MenuSC>
        </HeaderSC>
    )
}

export default Header