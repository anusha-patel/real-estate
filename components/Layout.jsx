import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Layout = ({ children }) => (
    <>
        <Head>
            <title>real estate</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </Box>
    </>
);


{/* <Layout>
<h1>test</h1> = children of layout
</Layout>  */}

export default Layout;