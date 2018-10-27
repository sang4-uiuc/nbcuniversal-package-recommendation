import React from "react";
import { Link } from 'react-router-dom'

export default class Result extends React.Component {
    state = {
        fields: {
            ...this.props.fields,
        },
        recommendation: "",
    };

    Display() {
        let data = this.getHours() + this.getDevices() + this.getSimultaneousDevices();
        console.log("in display")
        console.log(data)
        let cost = this.getCost(data) + this.getPhoneService() + this.getInternationalPlans();
        let phrase = this.getPackage(data, cost);
        this.setState({ recommendation: phrase });
    }

    getHours() {
        let data;
        const hours = parseInt(this.state.fields.hours);
        switch (true) {
            case (hours === 1):
                data = 1;
                break;
            case (hours > 1 && hours < 4):
                data = 2;
                break;
            case (4 <= hours && hours <= 5):
                data = 5;
                break;
            case (5 < hours && hours < 9):
                data = 8;
                break;
            case (hours > 8):
                data = hours;
                break;
            default:
                data = 0;
                console.log("Error");
        }
        console.log("in gethours")
        console.log(data)
        return data;
    }

    getDevices() {
        let data;
        const devices = parseInt(this.state.fields.devices);
        if (devices > 2) {
            data = devices - 2;
        } else {
            data = 0;
        }
        console.log("in getdevice")
        console.log(data)
        return data;
    }

    // Assuming that Simultaneous play is only for additional devices
    // i.e. if there's only 1 additional device, but you want 2 simultaneous play
    // it would just be 1GB(additional) + 1GB(simultaneous play)
    getSimultaneousDevices() {
        let data;
        let devices = parseInt(this.state.fields.devices);
        let simultaneousDevices = parseInt(this.state.fields.simultaneousDevices);
        if (devices > 2) {
            if (devices - 2 >= simultaneousDevices) {
                data = simultaneousDevices;
            } else {
                data = devices - 2;
            }
        } else {
            data = 0;
        }
        console.log("in getsimult")
        console.log(data)
        return data;
    }

    // Assuming that every GB after 8GB is additional
    getCost(data) {
        console.log("in getcost")
        console.log(data)
        let cost;
        switch (true) {
            case (data === 1):
                cost = 3;
                break;
            case (2 <= data && data <= 3):
                cost = 5;
                break;
            case (4 <= data && data <= 6):
                cost = 8;
                break;
            case (7 <= data && data <= 8):
                cost = 15;
                break;
            case (data > 8):
                cost = 15 + Math.floor((data - 8) / 2);
                break;
            default:
                cost = 0;
                console.log("Error");
        }
        return cost;
    }

    getPhoneService() {
        let phoneService = this.state.fields.phoneService;
        if (phoneService === 'Yes') {
            return 25.99;
        } else {
            return 0;
        }
    }

    getInternationalPlans() {
        let internationalPlans = this.state.fields.internationalPlans;
        if (internationalPlans === "Asia" || internationalPlans === "Europe" || internationalPlans === "Rest") {
            return 4.99;
        } else if (internationalPlans === "World") {
            return 11.99;
        } else {
            return 0;
        }
    }

    getPackage(data, costU) {
        let cost = Math.round(costU * 100) / 100
        let recommendation = "Based on your response, we recommend ";
        let pack;
        if (cost <= 3) {
            pack = `the ultra light package of ${data}GB valued at ${cost}$!`
        } else if (cost >= 4 && cost <= 7) {
            pack = `the super light package of ${data}GB valued at ${cost}$!`
        } else if (cost >= 8 && cost <= 15) {
            pack = `the economy package of ${data}GB valued at ${cost}$!`
        } else if (cost >= 16 && cost <= 24) {
            pack = `the best value package of ${data}GB valued at ${cost}$!`
        } else if (cost >= 25 && cost <= 39) {
            pack = `the VIP package of ${data}GB valued at ${cost}$!`
        } else if (cost >= 40) {
            pack = `the supreme combo package of ${data}GB valued at ${cost}$!`
        }
        return recommendation + pack;
    }

    componentDidMount() {
        this.Display()
    }
    render() {
        return (
            <div>
                <div>
                    <p>
                        {this.state.recommendation}
                    </p>
                </div>
                <br/>
                <div>
                <button><Link to='/'>Back</Link></button>
                </div>
            </div>
        );
    }
}