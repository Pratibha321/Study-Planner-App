import { useState } from 'react';
import { useStudy } from '../context/StudyContext';
import { TableRow, TableCell, Checkbox, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';


export default function SessionRow({ session }) {
const { updateSession, toggleCompleted, deleteSession } = useStudy();
const [edit, setEdit] = useState(false);
const [data, setData] = useState(session);


const handleSave = () => {
updateSession(session.id, data);
setEdit(false);
};


return (
<TableRow>
<TableCell>
<Checkbox checked={session.completed} onChange={() => toggleCompleted(session.id)} />
</TableCell>
{['subject', 'topic', 'date', 'hours'].map(field => (
<TableCell key={field}>
{edit ? (
<TextField
value={data[field]}
type={field === 'date' ? 'date' : field === 'hours' ? 'number' : 'text'}
onChange={e => setData({ ...data, [field]: e.target.value })}
/>
) : (
session[field]
)}
</TableCell>
))}
<TableCell>
{edit ? (
<IconButton onClick={handleSave}><SaveIcon /></IconButton>
) : (
<IconButton onClick={() => setEdit(true)}><EditIcon /></IconButton>
)}
<IconButton onClick={() => deleteSession(session.id)}><DeleteIcon /></IconButton>
</TableCell>
</TableRow>
);
}