import React from "react";
import './pin.css';
class PinForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: this.props.lat,
            long: this.props.long,
            category: '',
            description: '',
        }

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
    
        this.props.createPin(pin)
        this.setState({
            lat: '',
            long: '',
            category: '',
            description: '',
        });
      }
    
      update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }

    render() {
        return (
            <div className="pinForm">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Lat
                            <input type="text"
                                value={this.state.lat}
                                onChange={this.update('lat')}
                            />
                        </label>

                        <label>Long
                            <input type="text"
                                value={this.state.long}
                                onChange={this.update('long')}
                            />
                        </label>

                        <label>Category
                            <input type="text"
                                value={this.state.category}
                                onChange={this.update('category')}
                            />
                        </label>

                        <label>Description
                            <input type="textarea"
                                value={this.state.description}
                                onChange={this.update('description')}
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default PinForm;