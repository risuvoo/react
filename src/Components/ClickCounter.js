import withCounter from './HOC/withConter';

const clickCounter = ({ counter, handler }) => (
    <div>
        <button type="submit" onClick={handler}>
            click {counter}
        </button>
    </div>
);
export default withCounter(clickCounter);
