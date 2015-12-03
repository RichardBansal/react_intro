//compiled using babel
//.babelrc (presets)
//node module: babel-preset-react

var Greetings = React.createClass({
    displayName: "Greetings",

    render: function () {
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

        var greetings = textArray.map(function (str) {
            return React.createElement(Greeting, { text: str });
        });
        return React.createElement(
            "div",
            null,
            greetings
        );
    }
});

var Greeting = React.createClass({
    displayName: "Greeting",

    //var counter = /

    componentDidMount: function () {
        console.log('componentDidMount');
    },
    componentDidUpdate: function () {
        console.log('componentDidUpdate');
    },
    componentWillMount: function () {
        console.log('componentWillMount');
    },
    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps');
    },
    componentWillUnmount: function () {
        console.log('componentWillUnmount');
    },
    componentWillUpdate: function () {
        console.log('componentWillUpdate');
    },

    getInitialState: function () {
        return {
            userInput: null,
            counter: 0
        };
    },
    updateUserInput: function (event) {
        //debugger;
        console.log('update state');
        this.setState({
            userInput: event.target.value
        });
    },
    incrementCounter: function () {
        //this.state.counter++; // = this.state.counter++;
        //(key, state variable : updated value)
        this.setState({
            counter: ++this.state.counter
        });
    },
    render: function () {
        debugger;
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                this.state.userInput ? this.state.userInput : this.props.text
            ),
            React.createElement("input", { type: "text", onChange: this.updateUserInput }),
            React.createElement(
                "button",
                { onClick: this.incrementCounter },
                "Increment"
            ),
            React.createElement(
                "p",
                null,
                this.state.counter
            )
        );
    }
});

var Parent = React.createClass({
    displayName: "Parent",

    getInitialState: function () {
        return {
            counter: 0
        };
    },
    incrementCounter: function () {
        this.setState({
            counter: ++this.state.counter
        });
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Parent"
            ),
            React.createElement(Child1, { updateCounter: this.incrementCounter }),
            React.createElement(Child2, { counterValue: this.state.counter })
        );
    }
});

var Child1 = React.createClass({
    displayName: "Child1",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Child1"
            ),
            React.createElement(
                "button",
                { onClick: this.props.updateCounter },
                "Increment Counter"
            )
        );
    }
});

var Child2 = React.createClass({
    displayName: "Child2",

    render: function () {
        //debugger;
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Child2"
            ),
            React.createElement(
                "h2",
                null,
                this.props.counterValue
            )
        );
    }
});

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));
