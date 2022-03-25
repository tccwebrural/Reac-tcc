import { Box, CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    minHeight: "100vh",
                    maxWidth: "100vw",
                    flexGrow: 1,
                }}
            >
                <Header />
                {props.children}
            </Box>
        </>
    );
};

export default Layout;