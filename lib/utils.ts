import { Medals } from "@/types/Medals";

export const utils = {
   filterTenArray : (data:Medals[])=>{
     return data.length > 10 ? data.slice(0,10) : data
   },
   flagBgPosition:(code:string) =>{
     let position :string;
     switch(code) {
      case 'USA':
        return position = '-14.6rem'
      case 'NOR':
        return position = '-9.8rem'
      case 'RUS':
        return position = '-10.94rem'
      case 'NED':
        return position = '-8.5rem'
      case 'FRA':
       return  position = '-4.86rem'
      case 'SWE':
       return  position = '-13.39rem'
      case 'ITA':
       return  position = '-7.3rem'
      case 'CAN':
        return position = '-2.5rem'
      case 'SUI':
        return position = '-12.15rem'
      case 'BLR':
        return position = '-1.05rem'
      case 'GER':
        return position = '-6.05rem'
      case 'AUT':
        return position = '-0.05rem'
      case 'CHN':
        return position = '-3.65rem'
        default :
        return position = '0rem'
     }
   }
}