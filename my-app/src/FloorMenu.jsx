import React from "react";
import "./FloorMenu.css";

export default function FloorMenu({
    items = [
        { key: "home", label: "Home" },
        { key: "search", label: "Search" },
        { key: "profile", label: "Profile" },
    ],
    height = 72,
    background = "#ffffff",
    onSelect,
}) {
    const [hoverKey, setHoverKey] = React.useState(null);

    function handleClick(item) {
        if (typeof item.onClick === "function") {
            item.onClick(item);
            return;
        }
        if (typeof onSelect === "function") {
            onSelect(item.key, item);
        }
    }

    return (
        <nav
            aria-label="Floor menu"
            className="fm-container"
            style={{ "--fm-height": `${height}px`, "--fm-bg": background }}
        >
            <div className="fm-inner">
                {items.map((it) => (
                    <button
                        key={it.key}
                        type="button"
                        onClick={() => handleClick(it)}
                        onMouseEnter={() => setHoverKey(it.key)}
                        onMouseLeave={() => setHoverKey(null)}
                        className={`fm-item ${hoverKey === it.key ? "fm-item--hover" : ""}`}
                        aria-pressed={false}
                    >
                        {it.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
