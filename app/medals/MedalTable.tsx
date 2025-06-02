'use client'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store'
import { useEffect, useState } from 'react';
import { fetchIssues } from '@/app/medals/medelSlices';
import { Medals } from '@/types/Medals';
import { orderBy } from 'lodash';
import classes from './medals.module.scss'
import { utils } from '@/lib/utils';
import Table from '@/components/MedalTable/Table/Table';

type SortKey = keyof Medals;
type FlagPosition = {
    [code:string]: string
}

export const MedalTable: React.FC = () => {
  const dispatch:AppDispatch = useDispatch();
  const { medals, error, status } = useSelector((state: RootState ) => state.medelList);
  const [ medalList, setMedalList] = useState<Medals[]>(medals)
  const [flagPos, setFlagPos] =  useState<FlagPosition>({})
  const [seletedCol, setSelectedCol] = useState<string>('')

    useEffect(()=>{
        if(status === 'idle') {
            dispatch(fetchIssues())
        }
    },[status, dispatch])

    useEffect(()=>{

        if(medals.length > 0) {
            const data = orderBy(medals,['total'],['desc'])  
            const firstTenList = utils.filterTenArray(data)
            setMedalList(firstTenList)
            let flagObj = {}
            medals.forEach((list)=>{
                flagObj = {
                    ...flagObj,
                    [list.code]:utils.flagBgPosition(list.code)
                }
            })
            setFlagPos(flagObj)
       
        }
    },[medals])

  function handleSort (key:SortKey):void {
    const data = orderBy(medals,[key,'total'],['desc', 'desc'])    
    const firstTenList = utils.filterTenArray(data)
    setSelectedCol(key)
    setMedalList(firstTenList)
  }

  if (error) return <div className='pageInfoError'><p>Error: {error}</p></div>;

  return (
    <div className={classes.medalTableWrapper}>
        <Table data={medalList} flagPos={flagPos} handleSort={handleSort} seletedCol={seletedCol} />
    </div>
  );
};

export default MedalTable