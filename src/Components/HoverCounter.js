import withCounter from './HOC/withConter';

const HoverCounter = ({ counter, handler }) => (
    <div>
        <span onMouseOver={handler}>hover counter {counter} </span>
    </div>
);

export default withCounter(HoverCounter);
