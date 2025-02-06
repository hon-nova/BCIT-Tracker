import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react'
import { AssignmentObjProps } from "./shared/types";

function App() {
   const [assnname, setAssnname ] = useState<string|null>(null)
   const [assignments, setAssignments ]= useState<AssignmentObjProps[]>([])
   const [countCompleted, setCountCompleted ] = useState<number>(0)

   console.log(`assnname @App: `,assnname);
   /**
    * 
   id:string,
	assnname:string|null,
	isChecked: boolean,
	onDelete: (id:string)=>void
    */
   function handleAdd(assnname: string){
      const newAssignment = {
         id: crypto.randomUUID(),
         assnname: assnname,
         isChecked: false,
         onDelete: handleDelete,
         onCheckedBtn: handleCheckedBtn

      }
      setAssignments((preAssignments)=>([newAssignment,...preAssignments]))
   }
   function handleDelete(id:string){
      const updateAssns = assignments.filter((item:AssignmentObjProps)=>item.id!==id)
      setAssignments(updateAssns)
   }
   console.log(`assignments @App: `,assignments);
   
   function handleCheckedBtn(id:string){
      /* 2 things to happen:
         1. isChecked
         2. update countCompleted
      */
     setAssignments((preAssignments)=> {
         const updateAssignmentsWithChecked = preAssignments.map((item:AssignmentObjProps)=> item.id ===id ? {...item, isChecked: !item.isChecked} : item )

         const updateCountCompleted = updateAssignmentsWithChecked.filter((item:AssignmentObjProps)=>item.isChecked).length
         setCountCompleted(updateCountCompleted)

         return updateAssignmentsWithChecked
     })
      
   }
   console.log(`assignments @Assignments: `,assignments)
   console.log(`countCompleted: `,countCompleted);
   
  return (
    <>
      <Header 
         assnname={assnname}
         setAssnname={setAssnname}
         onAdd={handleAdd}
         />
      {/* 
         type AssignmentsProps = {
         assignments: AssignmentObjProps[],
         onDelete: (id:string)=>void
      } */}
      <Assignments 
         assignments={assignments}        
         countCompleted={countCompleted}/>
    </>
  );
}

export default App;
