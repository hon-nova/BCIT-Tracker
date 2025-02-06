import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type HeaderProps = {
   assnname: string|null,
   setAssnname: React.Dispatch<React.SetStateAction<string|null>>,
   onAdd: (assnname:string)=>void
}

export function Header({ assnname,setAssnname, onAdd }: HeaderProps) {

   function isEmptyInput():boolean{
      return !assnname || assnname.trim()===''
   }
   console.log(`isEmptyInput: `,isEmptyInput())
   console.log(`userinput as assnname: `,assnname)

   return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form 
         className={styles.newAssignmentForm}
         onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault(); setAssnname("")}}   >
        <input 
            placeholder="Add a new assignment" 
            type="text"
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{               
               setAssnname(e.target.value)
               }}
            name="assnname"
            value={assnname||''} />
        <button
            disabled={isEmptyInput()}
            style={isEmptyInput() ? {cursor:"not-allowed",backgroundColor:"lightgray"}:{cursor:"pointer"}}
            onClick={()=> {if(assnname) onAdd(assnname)}}
          >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
