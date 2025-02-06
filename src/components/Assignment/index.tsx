import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { AssignmentObjProps } from "../../shared/types";
import { FaCircleCheck } from "react-icons/fa6";
export function Assignment(assignment: AssignmentObjProps) {
   console.log(`assignment.isChecked @Assignment: `,assignment.isChecked)
  return (
    <div className={styles.assignment}>
      <button 
        className={styles.checkContainer}
        onClick={()=>assignment.onCheckedBtn(assignment.id)} >
        {assignment.isChecked ? <FaCircleCheck /> : <div />}         
        
      </button>

      <p className={`${assignment.isChecked && styles.textCompleted}`}>{assignment.assnname}</p>

      <button 
         className={styles.deleteButton}
         onClick={()=>assignment.onDelete(assignment.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
