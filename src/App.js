// import Clock from './Components/Clock';

// import MyUseEffect from './Components/Hooks/MyUseEffect';

import { Link } from 'react-router-dom';
import Routers from './Routers';

function App() {
    return (
        // <div className="hello">
        //     <Emoji>
        //         {({ addEmoji }) => (
        //             <ComBrackets>
        //                 {({ addBrackets }) => (
        //                     <ComText addEmoji={addEmoji} addBrackets={addBrackets} />
        //                 )}
        //             </ComBrackets>
        //         )}
        //     </Emoji>
        // </div>
        <>
            {/* <MyCalculator /> */}
            {/* <Clock /> */}

            {/* <ClickCounter />
            <HoverCounter />
            <Counter
                render={(counter, handler) => <ClickCounter counter={counter} handler={handler} />}
            />
            <Counter
                render={(counter, handler) => <HoverCounter counter={counter} handler={handler} />}
            /> */}
            {/* <MyContextApi /> */}
            {/* <MyUseEffect /> */}

            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">dashboard</Link>
                <Link to="/login">login</Link>
            </nav>
            <Routers />
        </>
    );
}

export default App;
