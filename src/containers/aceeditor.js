import React, { Component } from 'react'

export default class AceEditor extends Component {

    /*static propTypes = {
      mode: React.PropTypes.string,
      content: React.PropTypes.string,
    };*/

    static defaultProps = {
        mode: 'javascript',
        code: '//write your code here',
    };

    componentDidMount() {
        var ace = window.ace;
        const editor = ace.edit("editor");
        editor.setTheme("ace/theme/twilight");
        ace.require("ace/ext/language_tools");
        editor.getSession().setMode("ace/mode/javascript");
        editor.setShowPrintMargin(false);
        editor.setOptions({ enableLiveAutocompletion: true, enableSnippets: true });
        editor.setOptions({ minLines: 25, maxLines: 50 });
    }

    render() {
        const style = { fontSize: '14px !important', border: '1px solid lightgray' };
        return (
            <div ref="editor" style={style}>
            </div>
        );
    }
}