import React, {Component} from "react";


export default class SearchPage extends Component {

    constructor(props) {
        super(props);

        // One of these is needed to access each corresponding method.
        this.onChangeSearchBrand = this.onChangeSearchBrand.bind(this);
        this.onChangeSearchCause = this.onChangeSearchCause.bind(this);
        this.onChangeSearchOrg = this.onChangeSearchOrg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search_brand: "",
            search_cause: "",
            search_org: ""
        }
    }

    onChangeSearchBrand(e) {
        this.setState({
            search_brand: e.target.value
        });
    }

    onChangeSearchCause(e) {
        this.setState({
            search_cause: e.target.value
        });
    }

    onChangeSearchOrg(e) {
        this.setState({
            search_org: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Submitted: `);
        console.log(`Brand Search: ${this.state.search_brand}`);
        console.log(`Cause Search: ${this.state.search_cause}`);
        console.log(`Organization Search: ${this.state.search_org}`);

        this.setState = {
            search_brand: "",
            search_cause: "",
            search_org: ""
        }
    }

    render() {
        return(
            <div style={{marginTop:20}}>
                <h4>Search for a Brand, Organization, or Cause</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Search Brand: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.search_brand}
                                onChange={this.onChangeSearchBrand}
                                />
                    </div>
                    <div className="form-group">
                        <label>Search Cause: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.search_cause}
                                onChange={this.onChangeSearchCause}
                                />
                    </div>
                    <div className="form-group">
                        <label>Search Organization: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.search_org}
                                onChange={this.onChangeSearchOrg}
                                />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}