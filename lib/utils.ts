import { Medals } from "@/types/Medals";

export const utils = {
   filterTenArray : (data:Medals[])=>{
     return data.length > 10 ? data.slice(0,10) : data
   },
   flagBgPosition:(code:string) =>{

     switch(code) {
      case 'USA':
        return '-14.6rem'
      case 'NOR':
        return '-9.8rem'
      case 'RUS':
        return '-10.94rem'
      case 'NED':
        return '-8.5rem'
      case 'FRA':
       return '-4.86rem'
      case 'SWE':
       return  '-13.39rem'
      case 'ITA':
       return  '-7.3rem'
      case 'CAN':
        return '-2.5rem'
      case 'SUI':
        return '-12.15rem'
      case 'BLR':
        return '-1.05rem'
      case 'GER':
        return '-6.05rem'
      case 'AUT':
        return  '-0.05rem'
      case 'CHN':
        return  '-3.65rem'
        default :
        return '0rem'
     }
   }
}