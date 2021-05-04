export default function ComText({ addEmoji, addBrackets }) {
    let text = 'i am frontend developer';
    if (addEmoji) {
        text = addEmoji(text, '♥️');
    }
    if (addBrackets) {
        text = addBrackets(text);
    }
    return <div>{text}</div>;
}
