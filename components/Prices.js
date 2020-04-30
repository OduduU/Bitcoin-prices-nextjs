class Prices extends React.Component {
	state = {
		currency: "USD",
    };
    
    
    list = (currency) => {
        switch (currency) {
            case 'USD':
                return (
                    <li className="list-group-item">
						Bitcoin rate for {this.props.bpi.USD.description}:{" "}
						<span className="badge badge-primary mr-2">{this.props.bpi.USD.code}</span>
                        <strong>{this.props.bpi.USD.rate}</strong>
					</li>
                )
            case 'GBP':
                return (
                    <li className="list-group-item">
						Bitcoin rate for {this.props.bpi.GBP.description}:{" "}
						<span className="badge badge-primary mr-2">{this.props.bpi.GBP.code}</span>
                        <strong>{this.props.bpi.GBP.rate}</strong>
					</li>
                )
            case 'EUR':
                return (
                    <li className="list-group-item">
						Bitcoin rate for {this.props.bpi.EUR.description}:{" "}
						<span className="badge badge-primary mr-2">{this.props.bpi.EUR.code}</span>
                        <strong>{this.props.bpi.EUR.rate}</strong>
					</li>
                )
        }
    }
    render() {
        
		return (
			<div>
				<ul className="list-group">
                    {
                        this.list(this.state.currency)
                    }
                </ul>
                <br />
                <select onChange={e => this.setState({ currency: e.target.value })} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
			</div>
		);
	}
}

export default Prices
