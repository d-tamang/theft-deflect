import React from "react";
import S3 from 'react-aws-s3';
import './pin.css';

class PinForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: this.props.lat,
            long: this.props.long,
            category: 'Break In',
            description: '',
        }

        this.changeCategory = this.changeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.createPin(this.state).then(
            () => { this.setState({ errors: this.props.errors }) }
        )

        this.setState({
            category: 'Break In',
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

    handleFileInput(e){
        const reader = new FileReader()
        reader.onload = async (e) => { 
        this.setState( { imageFile: e.target.result } )
        };
        reader.readAsDataURL(e.target.files[0])
    }

    render() {
        return (
            <div>
                <div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="pin-form-container">
                        <h2>Report Your Incident</h2>
                        <br/>
                        <div>{this.renderErrors()}</div>

                        <label className="formLabel">Category</label>
                        <select onChange={this.changeCategory} category={this.state.category}>   
                            <option value={'Break In'}>Break In</option>
                            <option value={'Vandalism'}>Vandalism</option>
                            <option value={'Parts Theft'}>Parts Theft</option>
                            <option value={'Stolen Vehicle'}>Stolen Vehicle</option>
                        </select>
                        
                        <label className="formLabel">Description</label>
                            <textarea
                                value={this.state.description}
                                onChange={this.update('description')}
                                className='form-textarea'
                            />

                        <label className="formLabel">Upload an image (optional)</label>
                        <input type="file" onChange={this.handleFileInput} />

                        <button className="form-submit">REPORT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PinForm;