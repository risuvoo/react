import React, { Component } from 'react';

class Emoji extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    addEmoji = (para, emoji) => `${emoji} ${para} ${emoji}`;

    render(overwrite) {
        let setPara = 'frontend developer';
        if (overwrite) setPara = overwrite;
        return (
            <div>
                <p>{setPara}</p>
            </div>
        );
    }
}

export default Emoji;
