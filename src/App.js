import ComBrackets from './Components/Composition/ComBrackets';
import ComText from './Components/Composition/ComText';
import Emoji from './Components/Composition/Emoji';

function App() {
    return (
        <div className="hello">
            <Emoji>
                {({ addEmoji }) => (
                    <ComBrackets>
                        {({ addBrackets }) => (
                            <ComText addEmoji={addEmoji} addBrackets={addBrackets} />
                        )}
                    </ComBrackets>
                )}
            </Emoji>
            {/* <Emoji>
                <ComText /> 
            </Emoji> */}
        </div>
    );
}

export default App;
