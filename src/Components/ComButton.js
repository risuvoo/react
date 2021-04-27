import React from 'react';

class ComButton extends React.Component {
    // for not re-rendering Components
    shouldComponentUpdate(nextProps) {
        const { change: CurrentChange, local: CurrentLocal } = this.props;
        const { change: nextChange, local: nextLocal } = nextProps;
        if (CurrentChange === nextChange && CurrentLocal === nextLocal) {
            return false;
        }
        return true;
    }

    render() {
        const { change } = this.props;
        const { local } = this.props;
        const { show } = this.props;
        return (
            <div>
                <button type="button" onClick={() => change(local)}>
                    {local === 'en-US' ? 'change' : 'poriborton'}
                </button>

                {show && <p>hello</p>}
            </div>
        );
    }
}

export default ComButton;
