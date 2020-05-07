import React from 'react'
import { FaRegUserCircle} from 'react-icons/fa';

function Settings() {
    return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <form>
                    <h1>Profile Info</h1>
                    <div class="form-group">
                    <label for="validationCustom01">Name: </label>
                    <input type="text" class="form-control" id="validationCustom01" required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                    </div>
                    
                    <div class="form-group">
                    <label for="example-date-input">Date: </label>
                    <input class="form-control" type="date" value="" id="example-date-input"/>
                    </div>

                    <div class="form-group">
                    <label for="validationCustom01">Profession: </label>
                    <input type="text" class="form-control" id="validationCustom01" required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                    </div>

                    <div class="form-group">
                    <label for="validationCustom01">Designation: </label>
                    <input type="text" class="form-control" id="validationCustom01" required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                    </div>

                    <a class="btn btn-primary"  role="button"href="http://stackoverflow.com"> Cancel </a>
                    <button type="submit" style={{ marginLeft:'25px' }} class="btn btn-success">Submit</button> 
                </form>
            </div>
    );
}

export default Settings;