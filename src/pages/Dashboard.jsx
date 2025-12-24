import { useStudy } from '../context/StudyContext';
import { useState } from 'react';
import { Card, Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SubjectPieChart from '../charts/SubjectPieChart';
import ProgressLineChart from '../charts/ProgressLineChart';


export default function Dashboard() {
const { hoursBySubject, progressByDate } = useStudy();
const [view, setView] = useState('BOTH');


return (
<>
<Typography variant="h5" sx={{ mb: 2 }}>Study Dashboard</Typography>


<ToggleButtonGroup value={view} exclusive onChange={(e, v) => v && setView(v)} sx={{ mb: 3 }}>
<ToggleButton value="BOTH">Both</ToggleButton>
<ToggleButton value="PIE">Subject Wise</ToggleButton>
<ToggleButton value="LINE">Progress Over Time</ToggleButton>
</ToggleButtonGroup>


<Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={3}>
{(view === 'BOTH' || view === 'PIE') && (
<Card sx={{ p: 2 }}>
<Typography variant="h6">Time Spent per Subject</Typography>
<SubjectPieChart data={hoursBySubject} />
</Card>
)}


{(view === 'BOTH' || view === 'LINE') && (
<Card sx={{ p: 2 }}>
<Typography variant="h6">Study Progress Over Time</Typography>
<ProgressLineChart data={progressByDate} />
</Card>
)}
</Box>
</>
);
}