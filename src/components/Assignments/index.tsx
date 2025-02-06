import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { AssignmentObjProps } from "../../shared/types";

type AssignmentsProps = {
  assignments: AssignmentObjProps[],  
  countCompleted: number
}

export function Assignments({ assignments, countCompleted }: AssignmentsProps) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{countCompleted} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.length >0 && assignments.map((item:AssignmentObjProps)=>(
          <div key={item.id}>
            {/* id:string,
	            assnname:string|null,
	            isChecked: boolean,
	            onDelete: (id:string)=>void
               onCheckedBtn: (id:string)=>void */}
             <Assignment 
                id={item.id}
                assnname={item.assnname}
                isChecked={item.isChecked}
                onDelete={item.onDelete}
                onCheckedBtn={item.onCheckedBtn}/>
          </div>
        ))}
       
      </div>
    </section>
  );
}
