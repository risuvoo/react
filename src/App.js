// import Clock from './Components/Clock';
import { useState } from 'react';
import MyContextApi from './Components/MyContextApi';

function App() {
    const [name] = useState('suvo');
    console.log(name);
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
            <MyContextApi />
        </>
    );
}

export default App;
