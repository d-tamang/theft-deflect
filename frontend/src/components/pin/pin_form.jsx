import React from "react";
import './pin.css';
import S3 from 'react-aws-s3';

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
        // this.handleFileInput = this.handleFileInput.bind(this);
        // this.uploadImage = this.uploadImage.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // this.uploadImage();
        this.props.createPin(this.state).then(
            () => { this.setState({ errors: this.props.errors }) }
        )

        this.setState({
            category: 'Break In',
            description: '',
        });
    }

    // uploadImage(){
    //     const config = {
    //         bucketName: 'mern-project-pro',
    //         dirName: 'testing',
    //         region: 'us-west-1',
    //         accessKeyId: 'AKIA2WGTCYBOSLZKTE44',
    //         secretAccessKey: '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',
    //     }
    //     const ReactS3Client = new S3(config);
    //     ReactS3Client
    //         .uploadFile(this.state.imageFile, this.state.imageFile.name)
    //         .then(data => {
    //             this.setState({ imageUrl: data.location })
    //             console.log(data)
    //         })
    //         .catch(err => {
    //             const reader = err.body.getReader()
    //             reader.read().then(resp => { 
    //                 console.log(new TextDecoder().decode(resp.value))
    //             })
    //         })
    // }

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
        this.setState({ imageFile: e.target.files[0] });
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
                            <option value={'Break In'}>Break In</option>
                            <option value={'Vandalism'}>Vandalism</option>
                            <option value={'Parts Theft'}>Parts Theft</option>
                            <option value={'Stolen Vehicle'}>Stolen Vehicle</option>
                        </select>
                        
                        <label className="formLabel">Description</label>
                            <input type="textarea"
                                value={this.state.description}
                                onChange={this.update('description')}
                                className='form-textarea'
                            />

                        {/* <input type="file" onChange={this.handleFileInput} /> */}

                        <button className="form-submit">REPORT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PinForm;