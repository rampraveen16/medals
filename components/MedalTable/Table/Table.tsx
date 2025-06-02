import { Medals } from "@/types/Medals"
import classes from './table.module.scss'

type FlagPosition = {
    [code:string]: string,
}

type TableProps = {
    data:Medals[],
    flagPos:FlagPosition,
    handleSort:Function,
    seletedCol:string
}
export default function Table({data,flagPos,handleSort,seletedCol}:TableProps){
    return(
        <div className={classes.medalTableWrapper}>
        {data && data.length > 0 && (
        <table>
            <tbody>
                <tr>
                    <th >
                        <h4>Country</h4>                        
                    </th>
                    <th className={seletedCol === 'gold' ? classes.activeCol: ''}onClick={()=>handleSort('gold')}>
                        <span></span>                        
                    </th>
                    <th className={seletedCol === 'silver' ? classes.activeCol: ''} onClick={()=>handleSort('silver')}>
                        <span></span>                        
                    </th>
                    <th className={seletedCol === 'bronze' ? classes.activeCol: ''} onClick={()=>handleSort('bronze')}>
                        <span></span>                        
                    </th>
                    <th  className={seletedCol === 'total' ? classes.activeCol: ''} onClick={()=>handleSort('total')}>
                        <h4>Total</h4>
                    </th>
                </tr>
               { data.map((ele,index)=>{      
                return (
                    <tr key={ele.code}>
                        <td><strong className={classes.noText}>{index+1}</strong><span className={classes.flagBg} style={{'backgroundPositionY':flagPos[ele.code]}}></span>{ele.code}</td>
                        <td>{ele.gold}</td>
                        <td>{ele.silver}</td>
                        <td>{ele.bronze}</td>
                        <td className={classes.totalText}>{ele.total}</td>
                    </tr>
                )
               })}
            </tbody>
        </table>
        )}
        </div>
    )
}