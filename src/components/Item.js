
export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li style={item.packed ? { textDecoration: 'line-through' } : {}}>
            <input type="checkbox" value={item.packed} onChange={() => { onToggleItem(item.id) }} />
            <span>{item.quantity} {item.description}</span>
            <button onClick={() => { onDeleteItem(item.id) }}>❌</button>
            {/** onClick = {onDeleteItem} -> it will pass the event as parameter
         * onClick = {onDeleteItem(item.id)}  -> it will imediately call at first time -> but we want when the event happen
         */}
        </li>
    );
}