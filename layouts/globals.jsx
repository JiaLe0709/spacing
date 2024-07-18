import NextHead from "next/head";
import React from "react";

export default function Layout({ children }) {
    return (
        <>
            <NextHead>
                <link rel="icon" href="/favicon.ico" />
                <title>Spacing</title>
                <meta name="description" content="For some reason, i need this..." />
            </NextHead>
            <div>
                {children}
            </div>

        </>
    );
}