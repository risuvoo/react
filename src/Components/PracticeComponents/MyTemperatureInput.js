export default function MyTemperatureInput({ scale, temperature, handlechange }) {
    return (
        <div>
            <input type="text" value={temperature} onChange={(e) => handlechange(e, scale)} />
        </div>
    );
}
