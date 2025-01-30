import { SxProps, Theme } from '@mui/material';

export const buttonStyles: SxProps<Theme> = {
    width: "500px",
    background: "radial-gradient(circle at center, #3B3371 0%, #2A2356 100%)",
    color: "white",
    fontSize: "24px",
    fontWeight: "600",
    textTransform: "none",
    borderRadius: "30px",
    boxShadow: "0 0 20px rgba(58, 51, 113, 0.4)",
    transition: "transform 0.5s ease, box-shadow 0.5s ease, background 0.5s ease",
    "&:hover": {
        background: "radial-gradient(circle at center, #443C82 0%, #322A66 100%)",
        boxShadow: "0 0 30px rgba(58, 51, 113, 0.7)",
        transform: "scale(1.02)",
    },
    "&:disabled": {
        background: "#CCCCCC",
        color: "#666666",
        boxShadow: "none",
        transform: "none",
    },
};

export const linkContainerStyles: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    gap: "30px",
};