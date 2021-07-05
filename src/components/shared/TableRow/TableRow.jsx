import React from 'react'
import TableColumns from '../../../constants/TableColumns'
import FacePlaceholder from '../../../assets/faceplaceholder.jpg'
export default function TableRow(props) {
    const player = props.player;
    return (
        <tr>
            {TableColumns.map((element,key)=>{
                return <td key={key}>{element.key==="photo"? <img className={"row-img"} src={player[element.key]===""?  FacePlaceholder: player[element.key] }/>:<p> {player[element.key]} </p>}</td>
            })}   
        </tr>
    )
}
