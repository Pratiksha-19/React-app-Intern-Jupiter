import React from 'react'
import ReactDOM from 'react-dom'


class Task1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'src1'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Source name is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:"10px"
          }}>
              
            <form onSubmit={this.handleSubmit}>
            <h1 style={{textAlign:"center"}}>Task1</h1>
            <div>
                <label style={{fontSize:"20px",marginTop:"20px"}}>
                    Source Name:
                    <select style={{marginLeft:"40px",padding:"10px"}} value={this.state.value} onChange={this.handleChange}>
                    <option value="src1">source1</option>
                    <option value="src2">source2</option>
                    <option value="src3">source3</option>
                    <option value="src4">source4</option>
                    </select>
                    
                </label>
                </div>
                <div>
                <label style={{fontSize:"20px",marginTop:"20px"}}>
                    Target Result:
                    <select style={{marginLeft:"40px",padding:"10px"}} value={this.state.value} onChange={this.handleChange}>
                    <option value="res1">result1</option>
                    <option value="res2">result2</option>
                    <option value="res3">result3</option>
                    <option value="res4">result4</option>
                    </select>
                    
                </label>
                </div>
                <div>
                <label style={{fontSize:"20px",marginTop:"20px"}} class="form-check-label" for="gridCheck">Enable Logging:</label>
                {/* <div class="form-check"> */}
                <input style={{marginLeft:"40px",marginTop:"30px",padding:"40px"}} class="form-check-input" type="checkbox" id="gridCheck"/>
                {/* </div> */}
                </div>
                <div class="form-group">
                <label style={{fontSize:"20px",marginTop:"20px"}} for="text">Provide SQL:</label>
                <textarea class="form-control" rows="5" id="text"></textarea>
              </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
                <a style={{ color:"red" }}class="btn btn-primary"  role="button"href="http://stackoverflow.com"> Cancel </a>
                    <button type="submit" style={{ marginLeft:'25px' }} class="btn btn-success">Submit</button>
                    <button type="validate" style={{ marginLeft:'25px',color:"blue" }} class="btn btn-success">Validate</button>
                </div> 
            </form>
        </div>
      );
    }
  }
  
  export default Task1;