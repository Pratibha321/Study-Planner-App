import { useStudy } from '../context/StudyContext';
import SessionForm from '../components/SessionForm';
import SessionRow from '../components/SessionRow';
import { Table, TableHead, TableRow, TableCell, TableBody, Card } from '@mui/material';


export default function Planner() {
const { sessions } = useStudy();


return (
<>
<SessionForm />
<Card sx={{ p: 2 }}>
<Table>
<TableHead>
<TableRow>
<TableCell>Done</TableCell>
<TableCell>Subject</TableCell>
<TableCell>Topic</TableCell>
<TableCell>Date</TableCell>
<TableCell>Hours</TableCell>
<TableCell>Actions</TableCell>
</TableRow>
</TableHead>
<TableBody>
{sessions.map(s => <SessionRow key={s.id} session={s} />)}
</TableBody>
</Table>
</Card>
</>
);
}