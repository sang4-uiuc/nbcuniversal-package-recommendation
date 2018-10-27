import React from "react";
import { Link } from 'react-router-dom'

export default class Form extends React.Component {
  state = {
    hours: this.props.fields.hours,
    devices: this.props.fields.devices,
    simultaneousDevices: this.props.fields.simultaneousDevices,
    phoneService: this.props.fields.phoneService,
    internationalPlans: this.props.fields.internationalPlans
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <label>
          How many hours do you watch in a week on Netflix/Amazon/Hulu/etc.?
        </label>
        <br />
        <input
          name="hours"
          // placeholder={this.props.fields.hours}
          value={this.state.hours}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <label>
          How many devices do you typically have at home?
        </label>
        <br />
        <input
          name="devices"
          // placeholder={this.state.devices}
          value={this.state.devices}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <label>
          How many devices do you want to watch videos on simultaneously?
            </label>
        <br />
        <input
          name="simultaneousDevices"
          // placeholder={this.state.simultaneousDevices}
          value={this.state.simultaneousDevices}
          onChange={e => this.change(e)}
        />
        <br />
        <br />
        <label>
          Would you like to have phone service at home?
            </label>
        <br />
        <select
          name="phoneService"
          value={this.state.phoneService}
          onChange={e => this.change(e)}>
          <option value="--">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <br />
        <label>
          Where would you like to make international calls using your home phone?
        </label>
        <br />
        <select
          name="internationalPlans"
          value={this.state.internationalPlans}
          onChange={e => this.change(e)}>
          <option value="--">--</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Rest">Rest of the World</option>
          <option value="World">World</option>
          <option value="No">None</option>
        </select>
        <br />
        <br />
        <button ><Link to='/result'>Submit</Link></button>
      </form>
    );
  }
}