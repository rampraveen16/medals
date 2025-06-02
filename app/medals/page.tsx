
import classes from './medals.module.scss'
import Link from 'next/link';
import MedalTable from './MedalTable';
export default  function Medels () {
  return (
     <div className={classes.pageWrapper}>
      <div className={classes.tableHeadSection}>
       <h1>Medal Table</h1>
       <Link href='/'>Back To Home</Link>
      </div> 
        <MedalTable />
     </div>
  );
}

