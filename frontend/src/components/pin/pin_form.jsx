import React from "react";
import './pin.css';
class PinForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: this.props.lat,
            long: this.props.long,
            category: 'BreakIn',
            description: '',
        }

        this.changeCategory = this.changeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let pin = {
            lat: this.state.lat,
            long: this.state.long,
            category: this.state.category,
            description: this.state.description
        };

        this.props.createPin(pin).then(
            () => {
                this.setState({ errors: this.props.errors })
            }
        )
        this.setState({
            category: '',
            description: '',
        });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    changeCategory(e) {
        this.setState({category: e.target.value})
    }

    renderErrors() {
        if (!this.state.errors) return;
        return (
            <ul className='pin-form-error-list'>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="pin-form-container">
                        <h2>Describe Your Incident</h2>
                        {this.renderErrors()}

                        <label className="formLabel">Category</label>
                        <select onChange={this.changeCategory} category={this.state.category}>   
                            <option value={'BreakIn'}>Break In</option>
                            <option value={'Vandalism'}>Vandalism</option>
                            <option value={'PartsTheft'}>Parts Theft</option>
                            <option value={'StolenVehicle'}>Stolen Vehicle</option>
                        </select>
                        

                        <label className="formLabel">Description</label>
                            <input type="textarea"
                                value={this.state.description}
                                onChange={this.update('description')}
                                className='form-textarea'
                            />
                        <button id="form-submit">REPORT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PinForm;