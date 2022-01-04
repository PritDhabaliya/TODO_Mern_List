import React, { Component } from 'react'
import './style.css'
import { Consumer  } from '../context'
import axios from 'axios';

export default class Todo extends Component {
     remove=(id, dispatch)=>{
        axios.delete(`/todos/${id}`)
        .then(() => dispatch({ type: "REMOVE" , payload: id}))
        
    }
    star = (id, dispatch, complete) => {
        axios.put(`/todos/${id}/${complete}`)
        window.location.reload();
    }
    render() {
        const { title,_id,Date,complete } = this.props.todo
        return (
            <Consumer>{value=>{
                    const {dispatch} = value
                    return <h3 className='text-dark text-center p-1 bg-light border-bottom'>
                    <i   className='far fa-times-circle fa-sm float-left m-1 text-danger fl' onClick={this.remove.bind(this,_id,dispatch)} ></i>{title}
                    <button className='fr cl' onClick={this.star.bind(this, _id, dispatch,complete)} ><i className='fa fa-star '></i></button>
                    <p className='fr'>{Date}</p>
                    
            </h3>
            }
        }
            </Consumer>
        )
    }
}
