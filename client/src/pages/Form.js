import React from "react";
import { MDBCol, MDBIcon, MDBContainer, MDBAnimation, MDBRow } from "mdbreact";
import Navbar from "../components/navbar";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      file: {
        name: "submit image",
      },
      isUpload: false,
      food: "none",
    };
    this.onChange = this.onChange.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClickOption = this.onClickOption.bind(this);
  }

  onClickHandler = (e) => {
    console.log(this.state);
    const data = new FormData();
    data.append("file", this.state.file);
    console.log(data);
    axios
      .post("http://localhost:5000/img", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        this.setState({ options: res.data, isUpload: true });
      });
  };
  handleChange = (e) => {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
    console.log(this.state);
  };

  onClickOption = () => {
    let food = this.state.food;
    console.log(typeof this.state.food);
    axios
    .post("http://localhost:5000/data", this.state.food, {
      // receive two    parameter endpoint url ,form data
    }).then(res=>console.log(res));
  };
  onChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };
  render() {
    return (
      <div className="Form d-flex justify-content-center align-items-center flex-row h-100">
        <Navbar />
        <MDBCol lg="6" md="8" sm="10" className="form text-white">
          <h1 className="ml-5">SUBMIT THE IMAGE OF YOUR FOOD</h1>
          <MDBRow className="mt-3 d-flex justify-content-center">
            <MDBCol md="6" className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                  <MDBIcon icon="image" size="lg" />
                </span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  onChange={this.onChange}
                  aria-describedby="inputGroupFileAddon01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {this.state.file.name}
                </label>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-end">
            <MDBCol md="4" className="mt-3">
              <button
                type="button"
                class="btn btn-success btn-block"
                onClick={this.onClickHandler}
              >
                <MDBIcon icon="file-upload" className="mx-2" />
                Upload
              </button>
            </MDBCol>
          </MDBRow>
          {this.state.isUpload ? (
            <div>
              <p>pick the food:</p>
              <select
                className="form-select"
                value={this.state.food}
                onChange={this.handleChange}
                name="food"
              >
                <option value="none" disabled hidden>
                  Pick an Option
                </option>
                {this.state.options.map((item, i) => {
                  return (
                    <option className="stylish-color" value={item} key={i}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <button
                type="button"
                class="btn btn-success btn-block mt-5"
                onClick={this.onClickOption}
              >
                <MDBIcon icon="file-upload" className="mx-2" />
                Send Your Option
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </MDBCol>
      </div>
    );
  }
}

export default Form;
