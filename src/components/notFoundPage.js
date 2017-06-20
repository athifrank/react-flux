"use strict";

var React=require('react');
var Router=require('react-router');
var Link=Router.Link;

var NotFoundPage=React.createClass({
    render:function(){
        return(
        <div >
            <h1>Page not Found</h1>
            <p>Whoops page not found....</p>
            <Link to="app" className="btn btn-warning btn-lg">Back to home</Link>
            </div>
        )
    }
})

module.exports=NotFoundPage;