import Head from 'next/head'
import Navbar from "./Navbar";
import Link from 'next/link';

const Layout = (props) => {
	return (
        <div>
            <Head>
                <title>BitzPrice</title>
                <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cerulean/bootstrap.min.css" rel="stylesheet" integrity="sha384-LV/SIoc08vbV9CCeAwiz7RJZMI5YntsH8rGov0Y2nysmepqMWVvJqds6y0RaxIXT" crossorigin="anonymous"></link>
                {/* <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link> */}
            </Head>
            <Navbar />
            <div className="container">
			    {props.children}
            </div>
		</div>
	);
};

export default Layout;
