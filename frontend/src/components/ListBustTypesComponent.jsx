import React, { Component } from 'react';
import BusTypesService from '../services/BusTypesService';

class ListBustTypesComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            BusTypes:[]
        }
    }
    componentDidMount(){
        BusTypesService.getBusTypes().then((res) =>{
            this.setState({BusTypes: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Bus Types List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Bus Name</th>
                                <th>Numer Plate</th>
                                <th>Capacity</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Route</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.BusTypes.map(
                                    BusTypes =>
                                    <tr key = {BusTypes.id}>
                                        <td>{BusTypes.id}</td>
                                        <td>{BusTypes.name}</td>
                                        <td>{BusTypes.numberPlate}</td>
                                        <td>{BusTypes.capacity}</td>
                                        <td>{BusTypes.day}</td>
                                        <td>{BusTypes.time}</td>
                                        <td>{BusTypes.route}</td>
                                    </tr>
                                )
                                
                            }
                        </tbody>
                        
                    </table>
                </div>

            </div>
        );
    }
}

export default ListBustTypesComponent;