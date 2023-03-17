import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <style jsx global>{`
            * {
                box-sizing: border-box;
                font-family: math;
            }
            a {
                font-decoration: none;
                color: black;
            }
            h1, p {
                text-align: center;
            }
            `}
            </style>
        </>
    );
}