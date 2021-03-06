import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmojiList from './EmojiList';
import Settings from './Settings';
import { switchMode } from './redux/actions';
import { selectMode } from './redux/selectors';

const apply = connect(
    state => ({ mode: selectMode(state) }),
    { switchMode: switchMode }
)

class Main extends Component {

    render() {
        const { switchMode, mode } = this.props;
        return(
        <div>
            <button onClick={switchMode}>{mode ? 'Regular' : 'Extended'}</button>
            {mode && <Settings />}
            <EmojiList />
        </div>
        );
    }
}

export default apply(Main);
