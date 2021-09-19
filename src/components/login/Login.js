import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errordata: {
                show_error: false,
                error_text: '', 
            },
            formdata: {
                username: "", 
                password: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/login', {
            method : 'POST',
            cache : 'no-cache',
            contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
            body : new URLSearchParams({
                username : this.state.formdata.username,
                password : this.state.formdata.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                this.setState({
                    errordata: {
                        show_error: true,
                        error_text: data.error
                    }
                });
            } else {
                if (this.props.onChange) {
                    this.props.onChange(true, data.user)
                }
            }
        });
    }

    handleChange(event) {
        this.setState({
            formdata: {
                ...this.state.formdata, 
                [event.target.name]: event.target.value
            }
        });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        let errormsg;
        if (this.state.errordata.show_error) {
            errormsg = (
            <div class="alert alert-danger" style={{marginTop: 20}} role="alert">
            {this.state.errordata.error_text}
            </div>
            );
        }
        return (
            <div className="container">
                <form id="loginForm" onSubmit={this.handleSubmit}>
                    <h1>Login Here</h1>
                    <br />
                    <span>Username</span>
                    <input name="username" onChange={this.handleChange}></input>
                    <br />
                    <span >Password</span>
                    <input name="password" onChange={this.handleChange}></input>
                    <br />
                    <button className="btn btn-primary">Submit</button>
                </form>
                {errormsg}
            </div>
        );
    }
}

export default Login;
