import { Paper } from "@mui/material";

const SectionWrapper = ({ children, sx, ...other }) => {
	return (
		<Paper
			sx={{
				borderRadius: { xs: "0", lg: "12px" },
				paddingTop: 2,
				display: "flex",
				flexDirection: "column",
				gap: 2,
				overflow: "hidden",
				border: "1px solid",
				borderColor: "grey.200",
				...sx,
			}}
			elevation={0}
			{...other}
		>
			{children}
		</Paper>
	);
};

export default SectionWrapper;
