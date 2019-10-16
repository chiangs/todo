import { Status } from './status.type';
import { Category } from './category.type';

export type Todo = {
	id: string;
	task: string;
	dateCreated: Date;
	dateDue: Date;
	status: Status;
	category: Category;
};
