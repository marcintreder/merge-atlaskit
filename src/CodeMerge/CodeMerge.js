import React from "react";
import PropTypes from "prop-types";
import { AkCode, AkCodeBlock } from "@atlaskit/code";

export default class CodeMerge extends React.Component {
    render() {
        /* Copy of the object. We're adding additional prop
        block – to render two components conditionally.
        This prop is deleted before passed to the Atlaskit 
        components.
        */
        const props = Object.assign({}, this.props);
        delete props.block;

        if(!this.props.block) {
            return <AkCode {...props}>{props.children}</AkCode>;
        } 
        return <AkCodeBlock {...props}>{props.children}</AkCodeBlock>;
    }
}

CodeMerge.propTypes = {
    /** The code to be formatted */
    text: PropTypes.string,
    /** The language in which the code is written */
    code: PropTypes.oneOf(["abap",
    "actionscript",
    "ada",
    "arduino",
    "autoit",
    "c",
    "c++",
    "coffeescript",
    "csharp",
    "css",
    "cuda",
    "d",
    "dart",
    "delphi",
    "elixir",
    "erlang",
    "fortran",
    "foxpro",
    "go",
    "groovy",
    "haskell",
    "haxe",
    "html",
    "java",
    "javascript",
    "json",
    "julia",
    "kotlin",
    "latex",
    "livescript",
    "lua",
    "mathematica",
    "matlab",
    "objective-c",
    "objective-j",
    "objectpascal",
    "ocaml",
    "octave",
    "perl",
    "php",
    "powershell",
    "prolog",
    "puppet",
    "python",
    "qml",
    "r",
    "racket",
    "restructuredtext",
    "ruby",
    "rust",
    "sass",
    "scala",
    "scheme",
    "shell",
    "smalltalk",
    "sql",
    "standardml",
    "swift",
    "tcl",
    "tex",
    "text",
    "typescript",
    "vala",
    "vbnet",
    "verilog",
    "vhdl",
    "xml",
    "xquery"]),
    /** A custom theme to be applied, implements the Theme interface */
    theme: PropTypes.shape({
        lineNumberColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        lineNumberBgColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        textColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        substringColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        keywordColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        attributeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        selectorTagColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        docTagColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        nameColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        builtInColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        literalColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        bulletColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        codeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        additionColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        regexpColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        symbolColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        variableColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        templateVariableColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        linkColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        selectorAttributeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        selectorPseudoColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        typeColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        stringColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        selectorIdColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        selectorClassColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        quoteColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        templateTagColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        deletionColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        titleColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        sectionColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        commentColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        metaKeywordColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        metaColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        functionColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        numberColor: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
}