import React, { useState } from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const dataWeekly = [
    { day: "Mon", value: 120 },
    { day: "Tue", value: 150 },
    { day: "Wed", value: 80 },
    { day: "Thu", value: 170 },
    { day: "Fri", value: 100 },
    { day: "Sat", value: 90 },
    { day: "Sun", value: 130 },
];

const dataDaily = [
    { day: "12 AM", value: 30 },
    { day: "6 AM", value: 50 },
    { day: "12 PM", value: 90 },
    { day: "6 PM", value: 70 },
    { day: "12 AM", value: 30 },
];

const TransactionAreaChart = () => {
    const [data, setData] = useState(dataWeekly);
    const [filter, setFilter] = useState("weekly");

    const handleFilterChange = (type) => {
        setFilter(type);
        setData(type === "weekly" ? dataWeekly : dataDaily);
    };

    return (
        <div style={{ width: "414px", border: "2px solid #37B5FF", borderRadius: "8px", padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                <button
                    onClick={() => handleFilterChange("weekly")}
                    style={{
                        backgroundColor: filter === "weekly" ? "#1E648C" : "#f0f0f0",
                        color: filter === "weekly" ? "#fff" : "#000",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                        marginRight: "5px",
                    }}
                >
                    Weekly
                </button>
                <button
                    onClick={() => handleFilterChange("daily")}
                    style={{
                        backgroundColor: filter === "daily" ? "#1E648C" : "#f0f0f0",
                        color: filter === "daily" ? "#fff" : "#000",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                    }}
                >
                    Daily
                </button>
            </div>
            <ResponsiveContainer width="100%" height={172}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1E648C" stopOpacity={0.8} />
                            <stop offset="100%" stopColor="#1E648C" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#888" }} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#1E648C"
                        fillOpacity={1}
                        fill="url(#colorValue)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TransactionAreaChart;
