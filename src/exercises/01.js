// Building the toggle component

import React from 'react'
// 🐨 uncomment this import to get the switch component.
// It takes an `onClick` and an `on` prop
import {Switch} from '../switch'

class Toggle extends React.Component {
    state = {on: false}
    // Arrow function will add this as context by default to internal props
    toggle = () => {
        // this is 'state updater' call to avoid batching issue
        this.setState(({on}) => {
                return {on: !on};
            },
            () => {
                // this is just for console.log() for test/debug
                this.props.onToggle(this.state.on)
            })
    }

    // 🐨 this toggle component is going to need to have state for `on`
    //
    // You'll also want a method to handle when the switch is clicked
    // which will update the `on` state and call the `onToggle` prop
    // with the new `on` state.
    //
    // 💰 this.setState(newState, callback)
    //
    // The `callback` should be where you call `this.props.onToggle(this.state.on)`
    //
    // 💯 Use a state updater function for `newState` to avoid issues with batching
    render() {
        // 🐨 here you'll want to return the switch with the `on` and `onClick` props
        /** onClick will attach to Switch.Button as main action **/
        return <Switch on={this.state.on} onClick={this.toggle}/>
    }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
                   onToggle = (...args) => console.log('onToggle', ...args),
               }) {
    return <Toggle onToggle={onToggle}/>
}

Usage.title = 'Build Toggle'

export {Toggle, Usage as default}
