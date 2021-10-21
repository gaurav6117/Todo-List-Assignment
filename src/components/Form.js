import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { listData:[], title: "", priority: null }
    }
    deleteTask = (index) => {
        let arr = JSON.parse(localStorage.getItem("listData"));
        arr.splice(index, 1);
        localStorage.setItem('listData', JSON.stringify(arr));
        this.setState({listData:arr})
    }
    completeTask = (index) => {
        let arr = JSON.parse(localStorage.getItem("listData"));
        arr[index].completed = true;
        localStorage.setItem('listData', JSON.stringify(arr));
        this.setState({listData:arr})
    }
    handler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    submit = () => {
        if (localStorage.getItem("listData") != undefined) {
            let arr = JSON.parse(localStorage.getItem("listData"));
            const inde = arr.length;
            let temp = { "id": inde + 1, "title": this.state.title, "priority": this.state.priority, "completed": false }
            arr.push(temp);
            localStorage.setItem('listData', JSON.stringify(arr));
            this.setState({listData:arr})
        }
        else {
            let arr = [];
            let temp = { "id": 1, "title": this.state.title, "priority": this.state.priority }
            arr.push(temp);
            localStorage.setItem('listData', JSON.stringify(arr));
            this.setState({listData:arr})
        }
    }
    render() {
        return (
            <div className="container">
                <br/>
                {/* Form for adding task in the List */}
                <h2 className="text-center">Todo List</h2>
                <div className="row">
                    <div className="col-lg-9">
                        <h4>Add Todo:</h4>
                        <div className="form-group">
                            <input type="title" name="title" onChange={this.handler} placeholder="Add new Todo" className="form-control" />
                        </div><br />
                        <button onClick={this.submit} className="btn btn-primary">Submit</button>
                        <br/><br/><br/>
                    </div>
                    {/* Dropdown for selecting priority */}
                    <div className="col-lg-3">
                        <h4>Priority</h4>
                        <select className="form-select" name="priority" onChange={this.handler} aria-label="Default select example">
                            <option defaultValue>Select Priority Level</option>
                            <option value="Highest">Highest</option>
                            <option value="High">High</option>
                            <option value="Average">Average</option>
                            <option value="Low">Low</option>
                            <option value="Lowest">Lowest</option>
                        </select>
                    </div>
                </div>
                {/* rendering listData array from states   */}
                <table className="table table-hover">
                    <tbody>
                        {this.state.listData.map((elem, index) =>
                            <tr>
                                <td width="25%">{elem.completed ? <strike>{elem.title}</strike> : elem.title}</td>
                                <td width="25%"><button onClick={() => this.completeTask(index)} className="btn btn-success">Complete</button> <button onClick={() => this.deleteTask(index)} className="btn btn-danger">Delete</button></td>
                                <td width="25%">{elem.priority}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Form
