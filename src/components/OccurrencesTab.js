import React from 'react';

class OccurrencesTab extends React.Component {
    constructor(props) {
        super(props);
        this.tabJSXCreator = this.tabJSXCreator.bind(this);
        this.state = {
            tabColors: ['info', 'success', 'dark']
        }
    }

    tabJSXCreator(types, tabColors) {
        if (types === 0 || !types) {
            return <div></div>;
        }

        return types.map((type, i) => {
            const isActive = (i === 0) ? 'active' : '';
            return (
                <a
						key={i} 
						className={`nav-item nav-link flex-sm-fill text-sm-center btn-outline-${tabColors[i]} ${isActive}`}
						id="events-tab" 
						data-toggle="tab" 
						href="#events" 
						role="tab" 
						aria-controls="events" 
						aria-selected="true"
						onClick={this.props.onTabSelect}
					>
						{type}	
					</a>
            );
        });
    }

    render() {
        return (
            <nav className="nav-pills flex-column flex-sm-row">
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						{this.tabJSXCreator(this.props.types,this.state.tabColors)}
					</div>
				</nav>
        );
    }
};

export default OccurrencesTab;