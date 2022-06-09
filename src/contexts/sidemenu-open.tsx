import React from 'react';

type SidemenuOpenContext = {
	isSidemenuOpen: boolean;
	openSidemenu: () => void;
	closeSidemenu: () => void;
	toggleSidemenu: () => void;
	setIsSidemenuOpen: (value: boolean) => void;
};

const context = React.createContext<SidemenuOpenContext>(null as unknown as SidemenuOpenContext);

const SidemenuOpenProvider = ({ ...props }) => {
	const [isSidemenuOpen, setIsSidemenuOpen] = React.useState<boolean>(false);

	const openSidemenu = React.useCallback(() => {
		setIsSidemenuOpen(true);
	}, []);

	const closeSidemenu = React.useCallback(() => {
		setIsSidemenuOpen(false);
	}, []);

	const toggleSidemenu = React.useCallback(() => {
		setIsSidemenuOpen(state => !state);
	}, []);

	return (
		<context.Provider
			value={React.useMemo(
				() => ({
					isSidemenuOpen,
					setIsSidemenuOpen,
					openSidemenu,
					closeSidemenu,
					toggleSidemenu,
				}),
				[isSidemenuOpen],
			)}
			{...props}
		/>
	);
};

const useSidemenuOpen = () => {
	return React.useContext(context);
};

export { useSidemenuOpen };
export default SidemenuOpenProvider;
