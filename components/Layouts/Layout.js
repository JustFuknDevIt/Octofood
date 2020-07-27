import { Box } from "@material-ui/core";

export const Layout = ({ children }) => {
	return (
		<Box display="flex" maxWidth="100vw" maxHeight="100vh" position="relative">
			<Box width="400px" height="auto" position="absolute" top="5%" right="2%">
				<img src="/static/images/blob1.svg" alt="OctoFood Background" />
			</Box>
			<Box width="200px" height="auto">
				<img src="/static/images/blob2.svg" alt="OctoFood Background" />
			</Box>
			<Box width="200px" height="auto">
				<img src="/static/images/blob3.svg" alt="OctoFood Background" />
			</Box>
			<Box width="200px" height="auto">
				<img src="/static/images/blob4.svg" alt="OctoFood Background" />
			</Box>
			<Box width="200px" height="auto">
				<img src="/static/images/blob5.svg" alt="OctoFood Background" />
			</Box>
			{children}
		</Box>
	);
};

export default Layout;
