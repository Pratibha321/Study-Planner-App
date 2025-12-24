import { useStudy } from '../context/StudyContext';
import { useState } from 'react';
import {
Card,
Table,
TableHead,
TableRow,
TableCell,
TableBody,
Select,
MenuItem,
Box,
Typography
} from '@mui/material';


export default function Progress() {
const { hoursBySubject } = useStudy();
const subjects = Object.keys(hoursBySubject);
const [filter, setFilter] = useState('ALL');


const filteredSubjects = filter === 'ALL'
? subjects
: subjects.filter(s => s === filter);


return (
<>
<Typography variant="h5" sx={{ mb: 2 }}>Progress Overview</Typography>


<Box sx={{ mb: 2, width: 200 }}>
<Select fullWidth value={filter} onChange={e => setFilter(e.target.value)}>
<MenuItem value="ALL">All Subjects</MenuItem>
{subjects.map(s => (
<MenuItem key={s} value={s}>{s}</MenuItem>
))}
</Select>
</Box>


<Card sx={{ p: 2 }}>
<Table>
<TableHead>
<TableRow>
<TableCell><strong>Subject</strong></TableCell>
<TableCell><strong>Total Hours Studied</strong></TableCell>
</TableRow>
</TableHead>
<TableBody>
{filteredSubjects.map(subject => (
<TableRow key={subject}>
<TableCell>{subject}</TableCell>
<TableCell>{hoursBySubject[subject]} hrs</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</Card>
</>
);
}