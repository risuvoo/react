import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

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
            <ClickCounter />
            <HoverCounter />
        </>
    );
}

export default App;
