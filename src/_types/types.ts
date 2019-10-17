export type Category = 'Personal' | 'Work' | 'Meeting' | 'Study';

export type Status = 'Done' | 'Not started';

export type Todo = {
	id: string;
	task: string;
	dateCreated: Date;
	dateDue: Date;
	status: Status;
	category: Category;
};

export type Meridiem = 'AM' | 'PM';
