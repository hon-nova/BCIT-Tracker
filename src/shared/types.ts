export type AssignmentObjProps = {
	id:string,
	assnname:string|null,
	isChecked: boolean,
	onDelete: (id:string)=>void,
	onCheckedBtn: (id:string)=>void
}