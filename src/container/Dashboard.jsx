import React from "react";
import '../css/Dashboard.css'
import { Fragment } from 'react';
import CardPeople from "../components/CardPeople";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: [
                {
                    id: 1,
                    fullName: 'Andree Panjaitan',
                    email: 'panjaitanandree@gmail.com',
                    birthDate: '11 Januari 2002',
                    hobby: 'Futsal, Gaming',
                    quotes: 'Jadilah Manusia',
                },
                {
                    id: 2,
                    fullName: 'Dani Panjaitan',
                    email: 'panjaitanandree@gmail.com',
                    birthDate: '11 Januari 2002',
                    hobby: 'Futsal, Gaming',
                    quotes: 'Jadilah Manusia',
                },
                {
                    id: 3,
                    fullName: 'Jordan Panjaitan',
                    email: 'panjaitanandree@gmail.com',
                    birthDate: '11 Januari 2002',
                    hobby: 'Futsal, Gaming',
                    quotes: 'Jadilah Manusia',
                },
            ],
        }
    }
    render = () => {
        return (
            <Fragment>
                <div className="card-temp">
                    {this.state.peoples.map((item, index)=>
                         <CardPeople people={item}></CardPeople>
                    )}
                </div>
            </Fragment>
        );
    }
}
export default Dashboard;