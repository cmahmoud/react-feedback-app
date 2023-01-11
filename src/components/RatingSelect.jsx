import React from "react";

export default function RatingSelect({ select }) {
    const [selected, setSelected] = React.useState(10);
    const handleChange = (e) => {
        setSelected(+e.target.value);
        select(+e.target.value);
    };
    return (
        <ul className="rating">
            {[...Array(11).keys()].slice(1).map((item) => (
                <li key={item}>
                    <input
                        id={`num${item}`}
                        type="radio"
                        name="rating"
                        value={item}
                        checked={selected === item}
                        onChange={handleChange}
                    />
                    <label htmlFor={`num${item}`}>{item}</label>
                </li>
            ))}
        </ul>
    );
}
