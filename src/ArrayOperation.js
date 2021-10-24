import React from "react";
export default class ArrayOperation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskInput: "",
      task1Data: [],
      task2Data: []
    };
  }
  handleChange = (event) => {
    this.setState({
      taskInput: event.target.value
    });
  };
  handleAdd = () => {
    var temp = this.state.task1Data;
    temp.push(this.state.taskInput);
    this.setState({
      task1Data: temp
    });
  };
  handleDel = (index) => {
    var temp1 = this.state.task1Data;
    var x = temp1.splice(index, 1);

    var outTemp = this.state.task2Data;
    outTemp.push(x);

    this.setState({
      task1Data: temp1,
      task2Data: outTemp
    });
  };
  render() {
    return (
      <div>
        <body
          style={{
            backgroundColor: "chartreuse"
          }}
        >
          <h1
            style={{
              backgroundColor: "yellow",
              padding: 20,
              borrderRadius: 10
            }}
          >
            ArrayOperation
          </h1>
          <br />
          <br />
          <input
            type="text"
            value={this.state.taskInput}
            onChange={this.handleChange}
            style={{
              backgroundColor: "grey",
              padding: 10
            }}
          />
          <button
            onClick={this.handleAdd}
            style={{
              backgroundColor: "aqua",
              padding: 10,
              borrderRadius: 10
            }}
          >
            Addtask
          </button>
          <h1>FIRST TASK</h1>
          <table
            style={{
              backgroundColor: "lightpink",
              padding: 20,
              boarder: "solid"
            }}
          >
            <thead>
              <tr>
                <th>Serial.No </th>

                <th>Data</th>
              </tr>
            </thead>
            {this.state.task1Data.map((data, index) => {
              return (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      {" "}
                      {data}{" "}
                      <button
                        onClick={(e) => {
                          this.handleDel(index);
                        }}
                        style={{
                          backgroundColor: "#00ffff",
                          padding: 5,
                          boarder: "solid"
                        }}
                      >
                        complete task
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>

          <h1>SECOND TASK</h1>
          <table
            style={{
              backgroundColor: "chocolate",
              padding: 20,
              boarder: "solid"
            }}
          >
            <thead>
              <tr>
                <th>Srial.No</th>
                <th>Data</th>
              </tr>
            </thead>
            {this.state.task2Data.map((completedata, i1) => {
              return (
                <tbody>
                  <tr key={i1}>
                    <td>{i1 + 1}</td>
                    <td> {completedata}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </body>
      </div>
    );
  }
}
