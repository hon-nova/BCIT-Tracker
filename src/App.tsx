import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react'
import { AssignmentObjProps } from "./shared/types";

function App() {
   const [assnname, setAssnname ] = useState<string|null>(null)
   const [assignments, setAssignments ]= useState<AssignmentObjProps[]>([])
   const [countCompleted, setCountCompleted ] = useState<number>(0)

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
      console.log(`Before delete: `,assignments);
      
      const updateAssns = assignments.filter((item:AssignmentObjProps)=>item.id!==id)
      console.log(`after filtering: `,updateAssns);
      
      setAssignments(updateAssns)
   }
   
   function handleCheckedBtn(id:string){
      
     setAssignments((preAssignments)=> {

         const updateAssignmentsWithChecked = preAssignments.map((item:AssignmentObjProps)=> item.id ===id ? {...item, isChecked: !item.isChecked} : item )

         const updateCountCompleted = updateAssignmentsWithChecked.filter((item:AssignmentObjProps)=>item.isChecked).length
         setCountCompleted(updateCountCompleted)

         return updateAssignmentsWithChecked
     })
      
   }   
   console.log(`All assignments: `, assignments);
   
   
   return (
    <>
      <Header 
         assnname={assnname}
         setAssnname={setAssnname}
         onAdd={handleAdd}
         />
      
      <Assignments 
         assignments={assignments}        
         countCompleted={countCompleted}/>
    </>
  );
}

export default App;
