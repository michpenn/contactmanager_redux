import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateStatus } from "../../actions/subwayActions";

class Subway extends Component {
  onUpdateStatus = name => {
    console.log("update status: ", name);
    this.props.updateStatus();
  };

  onCheckUptime = name => {
    console.log("check uptime: ", name);
  };

  render() {
    const { name, status } = this.props.subway;

    return (
      <React.Fragment>
        <tr>
          <td>
            <h4>{name} </h4>
          </td>
          <td>{status}</td>
          <td>
            <button onClick={this.onUpdateStatus.bind(this, name)}>
              Check Status
            </button>
          </td>
          <td>
            <button onClick={this.onCheckUptime.bind(this, name)}>
              Check Uptime
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

Subway.propTypes = {
  subway: PropTypes.object.isRequired,
  updateStatus: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateStatus }
)(Subway);
