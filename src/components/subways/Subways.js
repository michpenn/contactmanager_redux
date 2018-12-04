import React, { Component } from "react";
import Subway from "./Subway";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllSubways } from "../../actions/subwayActions";

class Subways extends Component {
  componentDidMount() {
    this.props.getAllSubways();
  }

  render() {
    const { subways } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Subway</span> Lines
        </h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Current Status</th>
                <th>Endpoint: Status</th>
                <th>Endpoint: Uptime</th>
              </tr>
            </thead>
            <tbody>
              {subways.map((subway, index) => (
                <Subway key={index} subway={subway} />
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

Subways.propTypes = {
  subways: PropTypes.array.isRequired,
  getAllSubways: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log("state: ", state);
  return { subways: state.subway.subways };
};

export default connect(
  mapStateToProps,
  { getAllSubways }
)(Subways);
