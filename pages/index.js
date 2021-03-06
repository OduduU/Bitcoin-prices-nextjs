import fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";

import Prices from '../components/Prices';

const Index = (props) => {
	return (
		<Layout>
			<div>
				<h1>Welcome to BitzPrice</h1>
				<Prices bpi={props.bpi} />
			</div>
		</Layout>
	);
};

Index.getInitialProps = async () => {
	try {
		const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
		const data = await res.json();
	
		return {
			bpi: data.bpi
		}
	} catch (error) {
		console.log('error', error)
	}
}

export default Index;