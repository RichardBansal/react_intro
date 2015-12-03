//compiled using babel
//.babelrc (presets)
//node module: babel-preset-react

var Greetings = React.createClass({
   render: function(){
       //debugger;

       //return (
       //    <div>
       //        <Greeting text="Hello World!"/>
       //        <Greeting text="Ciao!"/>
       //        <Greeting text="Salut!"/>
       //        <Greeting text="Bonjour!"/>
       //    </div>
       //)

       var textArray = ["Hello World!", "Ciao!", "Salut!", "Bonjour!"];

       var greetings = textArray.map(function(str){
           return (<Greeting text={str}/>)
       });
       return (
           <div>
               {greetings}
           </div>
       )
   }
});

var Greeting = React.createClass({
    //var counter = /

    componentDidMount: function(){
        console.log('componentDidMount');
    },
    componentDidUpdate: function(){
        console.log('componentDidUpdate');
    },
    componentWillMount: function(){
        console.log('componentWillMount');
    },
    componentWillReceiveProps: function(){
        console.log('componentWillReceiveProps');
    },
    componentWillUnmount: function(){
        console.log('componentWillUnmount');
    },
    componentWillUpdate: function(){
        console.log('componentWillUpdate');
    },

    getInitialState: function(){
      return {
          userInput:null,
          counter:0
      }
    },
    updateUserInput: function(event){
        //debugger;
        console.log('update state');
        this.setState({
            userInput:event.target.value
        })
    },
    incrementCounter: function(){
        //this.state.counter++; // = this.state.counter++;
        //(key, state variable : updated value)
        this.setState({
            counter:++this.state.counter
        });
    },
    render: function(){
        debugger;
        return (
            <div>
                <h1>{this.state.userInput ? this.state.userInput : this.props.text}</h1>
                <input type="text" onChange={this.updateUserInput}></input>
                <button onClick={this.incrementCounter}>Increment</button>
                <p>{this.state.counter}</p>
            </div>
        )
    }
});

var Parent = React.createClass({
    getInitialState: function(){
      return {
          counter:0
      }
    },
    incrementCounter: function(){
        this.setState({
            counter:++this.state.counter
        })
    },
    render: function(){
        return (
            <div>
                <h1>Parent</h1>

                <Child1 updateCounter={this.incrementCounter}/>
                <Child2 counterValue={this.state.counter}/>
            </div>
        )
    }
});

var Child1 = React.createClass({
    render: function(){
        return (<div>
                <h1>Child1</h1>
                <button onClick={this.props.updateCounter}>Increment Counter</button>
            </div>)
    }
});

var Child2 = React.createClass({
    render: function(){
        //debugger;
        return (<div>
                    <h1>Child2</h1>
                    <h2>{this.props.counterValue}</h2>
            </div>)
    }
});

ReactDOM.render(<Parent/>, document.getElementById('app'));