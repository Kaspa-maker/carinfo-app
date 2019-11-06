import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './addForm.css';


export default class Form extends Component {
    render() {
        return (
        <form  className="form bg-dark text-light">
            <h3>Add a car</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Title"></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Author"></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Short Description"></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Car Brand"></input>
            </div>
            <div className="form-group">
                <button type="submit"className="btn btn-primary">Choose image</button>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
        );
    }
}