import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const COLORS = ['#1976d2', '#9c27b0', '#ff9800', '#4caf50', '#f44336'];


export default function SubjectPieChart({ data }) {
const chartData = Object.keys(data).map(subject => ({
name: subject,
value: data[subject]
}));


return (
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie data={chartData} dataKey="value" nameKey="name" outerRadius={110} label>
{chartData.map((_, index) => (
<Cell key={index} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
);
}