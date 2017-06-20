"use strict";

var React=require('react');

var About=React.createClass({
    statics:{
      willTransitionTo:function(transition,params,query,callback){
          if(!confirm('Are you sure you read the page\s this boring')){
              transition.about();
          }else{
             callback(); 
          }
      },
    willTransitionFrom:function(transition,component){
          if(!confirm('Are you sure you leave the page\s this exciting')){
              transition.about();
          }
      }
    },
    render:function(){
        return(
        <div>
            <h1>About</h1>
            <p>
            using Technologies
            <ul>
            <li>React</li>
            <li>React router</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browseify</li>
            <li>Flux</li>
            <li>Bootstrap</li>
            </ul>
            </p>
            </div>
        )
    }
})

module.exports=About;