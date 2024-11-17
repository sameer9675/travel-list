import { useState } from 'react'
import Item from "./Item";

//we can directly de structuring props
// name export
export function PackingList({ items, onDeleteItem, onToggleItem, onClearItem }) {

    const [sortBy, setSortBy] = useState("input")

    let sortedItems;

    if (sortBy === 'input') sortedItems = items;
    else if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    else sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id}
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>

            <div className="actions">
                <select name="" id="" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearItem} >Clear list</button>
            </div>
        </div>
    )
}