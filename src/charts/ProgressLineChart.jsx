import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function ProgressLineChart({ data }) {
const chartData = Object.keys(data).map(date => ({
date,
hours: data[date]
}));


return (
<ResponsiveContainer width="100%" height={300}>
<LineChart data={chartData}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="date" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="hours" stroke="#1976d2" strokeWidth={3} />
</LineChart>
</ResponsiveContainer>
);
}