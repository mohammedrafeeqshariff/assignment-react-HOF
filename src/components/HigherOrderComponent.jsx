import React, { Component } from "react";


class HofComponent extends Component{
    constructor(){
        super();
        this.state = {

            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    renderAllItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                <li className="list-elements">
                    <span>Id: {item.id}</span> &nbsp;&nbsp;&nbsp;
                    <span>Name : {item.name}</span>  &nbsp;&nbsp;&nbsp;
                    <span>User Type: {item.user_type}</span>  &nbsp;&nbsp;&nbsp;
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderBasedOnUsertype = ()=>{
        const data = this.state.userData;
        const filteredData = data.filter((ele)=> {return ele.user_type == 'Designer'})
        const mapRows = filteredData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span> &nbsp;&nbsp;&nbsp;
                    <span>Name : {item.name}</span> &nbsp;&nbsp;&nbsp;
                    <span>User Type: {item.user_type}</span> &nbsp;&nbsp;&nbsp;
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderStartingWithJ = ()=>{
        const data = this.state.userData;
        const filteredData = data.filter((ele)=> {return ele.name[0] == 'J'})
        const mapRows = filteredData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span> &nbsp;&nbsp;&nbsp;
                    <span>Name : {item.name}</span> &nbsp;&nbsp;&nbsp;
                    <span>User Type: {item.user_type}</span> &nbsp;&nbsp;&nbsp;

                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderBasedOnAge= ()=>{
        const data = this.state.userData;
        const filteredData = data.filter((ele)=> {return ele.age>20 && ele.age<=50})
        const mapRows = filteredData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span> &nbsp;&nbsp;&nbsp;
                    <span>Name : {item.name}</span> &nbsp;&nbsp;&nbsp;
                    <span>User Type: {item.user_type}</span> &nbsp;&nbsp;&nbsp;
                    <span>Age: {item.age}</span> &nbsp;&nbsp;&nbsp;
                </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    totalyears = ()=>{
        const data = this.state.userData;
        const sumOfYears = data.reduce((accummulator, items)=>{
            return accummulator += items.years
        }, 0)
        return sumOfYears;   
    }


    render(){
        return(
            <>
            <div id="all">
                <div>

                    <h3>Display all items</h3>
                    <ul>{this.renderAllItems()}</ul>
                </div>

                <br />
                <div>

                    <h3>Display based on user type</h3>
                    <ul>{this.renderBasedOnUsertype()}</ul>
                </div>

                <br />
                <div>

                    <h3>Display starting with 'J'</h3>
                    <ul>{this.renderStartingWithJ()}</ul>
                </div>

                <br />
                <div>

                    <h3>Display based on age</h3>
                    <ul>{this.renderBasedOnAge()}</ul>
                </div>

                <br />
                <div>

                    <h3>Total Years</h3>
                    <ul>{this.totalyears()}</ul>
                </div>
            </div>
            </>
        )
    }
}

export default HofComponent