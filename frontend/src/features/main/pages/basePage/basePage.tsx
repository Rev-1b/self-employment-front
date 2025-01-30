import { FC } from "react";
import { Box } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import "./basePage.css";
import { styles } from "./basePage.styles.ts";

import profile from "../../../../assets/sidebarImages/profile.svg";
import customers from "../../../../assets/sidebarImages/customers.svg";
import documents from "../../../../assets/sidebarImages/documents.svg";
import home from "../../../../assets/sidebarImages/home.svg";
import payments from "../../../../assets/sidebarImages/payments.svg";
import exit from "../../../../assets/sidebarImages/exit.svg";
import logo from "../../../../assets/sidebarImages/logo.svg";

interface IAsideIcon {
    src: string;
    alt: string;
    history: string;
}

const asideIconsRoutes: IAsideIcon[] = [
    { src: profile, alt: "Profile", history: "profile" },
    { src: home, alt: "Home", history: "main" },
    { src: documents, alt: "Documents", history: "documents" },
    { src: customers, alt: "Customers", history: "customers" },
    { src: payments, alt: "Payments", history: "payments" },
];

const BasePage: FC = () => {
    const navigate = useNavigate();

    const goOnOtherPage = (history: string) => {
        navigate(history);
    };

    return (
        <Box sx={styles.container}>
            {/* Sidebar */}
            <Box component="aside" sx={styles.sidebar}>
                <Box sx={styles.sidebarContent}>
                    {/* Site Logo */}
                    <Box sx={styles.siteIcon}>
                        <img src={logo} alt="Site Logo" style={{ width: '100%', height: '100%' }} />
                    </Box>

                    {/* Main Navigation Icons */}
                    <Box sx={styles.sidebarMainIcons}>
                        {asideIconsRoutes.map((item, index) => (
                            <img
                                key={index}
                                src={item.src}
                                alt={item.alt}
                                className="sidebar-icon"
                                onClick={() => goOnOtherPage(item.history)}
                            />
                        ))}
                    </Box>

                    {/* Exit Button */}
                    <Box sx={styles.exitButton}>
                        <img
                            src={exit}
                            alt="Exit"
                            className="sidebar-icon"
                            onClick={() => goOnOtherPage("")}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Content wrapper */}
            <Box sx={styles.contentWrapper}>
                {/* Header */}
                <Box component="header" sx={styles.header}>
                    <Box sx={styles.headerControls}>
                        <input
                            className="search-input"
                            placeholder="Поиск"
                        />
                        <Box sx={styles.rightControls}>
                            <Box sx={styles.profileIcon} />
                            <Box sx={styles.settingsIcon} />
                        </Box>
                    </Box>
                </Box>

                {/* Main content */}
                <Box
                    component="main"
                    sx={styles.mainContent}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default BasePage;