// import Clock from './Components/Clock';

import MyUseEffect from './Components/Hooks/MyUseEffect';

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
            <MyUseEffect />
        </>
    );
}

export default App;
