/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

export default function MenuList({list = []}) {
    return <ul>
        {
            list && list.length ? 
            list.map((item, index) => <MenuItem item={item} key={index} /> )
            : null
        }
    </ul>
}