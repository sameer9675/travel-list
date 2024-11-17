import { useState } from 'react';

export default function Form({ onAddItems }) {

    const [description, setDescription] = useState(""); // controlled element
    const [quantity, setQuantity] = useState(1);
    // const [items, setItems] = useState([]); // but using state here will not reflect in UI, as I want this to be used in packingList, but as both are sibling we pass to its common parent ('uplifting the state')


    function handleSubmit(e) {
        e.preventDefault(); // stopping from reload on submit

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: new Date() };
        // this new item we can not directly set to initialItem section, so it can be use by packing list componenet
        //Reason -> here both the component are sibling, so we can not make use of props
        //here we can try 'uplifting the state'

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit} >
            <div>What do you need for you 😍 trip?</div>
            {/* the value in select directly coming from the option value */}
            <select name="" id="" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).
                        map(num => <option value={num} key={num}>{num}</option>)
                }
            </select>
            {/**controlled element */}
            <input type="text" placeholder="Item..." value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    );
}