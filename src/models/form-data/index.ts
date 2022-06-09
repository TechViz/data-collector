import { AboutUser } from './about-user';
import { CategoryDialog } from './dialog';

export type FormData = {
	dialog: CategoryDialog;
	aboutUser: AboutUser;
	username: string | null;
};
