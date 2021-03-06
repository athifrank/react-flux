"use strict";

var React=require('react');
var Router=require('react-router');
var Link=Router.Link;
var AuthorAction=require('../../actions/authorAction');
var AuthorStore=require('../../stores/authorStore');
var AuthorList=require('./authorList');

var Authors=React.createClass({
    getInitialState:function(){
        return{
            author:AuthorStore.getAllAuthors()
        };
    },
    componentWillMount:function(){
      AuthorStore.addChangeListener(this._onChange);  
    },
    componentWillUnmount:function(){
      AuthorStore.removeChangeListener(this._onChange);  
    },
    _onChange:function(){
      this.setState({authors:AuthorStore.getAllAuthors()});  
    },
    render:function(){      
        return(
        <div>
            <h1>Authors</h1>
            <Link to="addAuthor" className="btn btn-default">Add author</Link>
            <AuthorList author={this.state.author}/>
            </div>
        )
    }
})

module.exports=Authors;