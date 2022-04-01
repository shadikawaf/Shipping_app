import React, { Component } from 'react';
import { connect } from 'react-redux';

class BoxList extends Component {

    shippingCost_Calc = (country, weight) => {
        var shippingCost;
        switch (country) {
            case 'Sweden':
                shippingCost = (1.3 * weight).toFixed(2);
                return shippingCost;
            case 'China':
                shippingCost = (4.0 * weight).toFixed(2);
                return shippingCost;

            case 'Brazil':
                shippingCost = (8.6 * weight).toFixed(2);
                return shippingCost;

            case 'Australia':
                shippingCost = (7.2 * weight).toFixed(2);
                return shippingCost;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="list-box-container">
                <h1>All boxes</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Receiver</th>
                            <th>Weight</th>
                            <th>Box color</th>
                            <th>Shipping cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.boxes.map((box) => {

                            return (
                                <tr key={box[0]}>
                                    <td>{box[3]}</td>
                                    <td>{box[4]} kilogram(s)</td>
                                    <td style={{ backgroundColor: box[1] }}></td>
                                    <td>{this.shippingCost_Calc(box[2], box[4])} SEK</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        boxes: state.boxes,
    };
}

export default connect(mapStateToProps)(BoxList);
