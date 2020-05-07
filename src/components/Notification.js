import React from 'react'
import ReactDOM from 'react-dom'
import Switch from'react-switch'
import './style.css'

const textSwitch={
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100%",
    fontSize:15,
    color:"#fff",
    paddingRight:2
}

class Notification extends React.Component{
    constructor(props) {
        super(props)
        this.state=
        {
            checked:false
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(checked){
        this.setState({checked})
    }
    render(){
        return (
            <div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop:"20px"
              }}>
                <form>
                    <h1>Notification</h1>
                        <div class="form-group" style={{marginTop:"40px"}}>
                        <label>
                                <span>Send all alerts</span>
                            <Switch
                                className="react-switch"
                                onChange={this.handleChange}
                                checked={this.state.checked}
                                checkedIcon={
                                    <div style={textSwitch}>on</div>
                                }
                                uncheckedIcon={
                                    <div style={textSwitch}>off</div>
                                }
                            />
                        </label>
                    </div>
                    <div class="form-group" style={{marginTop:"30px"}}>
                        <label>
                                <span>Alerts only task success</span>
                            <Switch
                                className="react-switch"
                                onChange={this.handleChange}
                                checked={this.state.checked}
                                checkedIcon={
                                    <div style={textSwitch}>on</div>
                                }
                                uncheckedIcon={
                                    <div style={textSwitch}>off</div>
                                }
                            />
                        </label>
                    </div>
                    <div class="form-group" style={{marginTop:"30px"}}>
                        <label>
                                <span>Alerts only for failed tasks</span>
                            <Switch
                                className="react-switch"
                                onChange={this.handleChange}
                                checked={this.state.checked}
                                checkedIcon={
                                    <div style={textSwitch}>on</div>
                                }
                                uncheckedIcon={
                                    <div style={textSwitch}>off</div>
                                }
                            />
                        </label>
                    </div>
                    <div class="form-group" style={{marginTop:"30px"}}>
                        <label>
                                <span>I do not want any alerts</span>
                            <Switch
                                className="react-switch"
                                onChange={this.handleChange}
                                checked={this.state.checked}
                                checkedIcon={
                                    <div style={textSwitch}>on</div>
                                }
                                uncheckedIcon={
                                    <div style={textSwitch}>off</div>
                                }
                            />
                        </label>
                    </div>
                    <a class="btn btn-primary"  role="button"href="http://stackoverflow.com"> Cancel </a>
                    <button type="submit" style={{ marginLeft:'25px' }} class="btn btn-success">Submit</button> 
                </form>
            </div>
            </div>
        )
    }
}

export default Notification;