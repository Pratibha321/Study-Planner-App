import { useState } from "react";
import {
  TextField,
  Button,
  Box
} from "@mui/material";
import { useStudy } from "../context/StudyContext";

export default function SessionForm() {
  const { addSession } = useStudy();

  const [form, setForm] = useState({
    subject: "",
    topic: "",
    date: "",
    hours: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addSession({
      ...form,
      hours: Number(form.hours),
      completed: false
    });
    setForm({ subject: "", topic: "", date: "", hours: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, mb: 3 }}
    >
      <TextField
        label="Subject"
        value={form.subject}
        onChange={(e) =>
          setForm({ ...form, subject: e.target.value })
        }
        required
      />
      <TextField
        label="Topic"
        value={form.topic}
        onChange={(e) =>
          setForm({ ...form, topic: e.target.value })
        }
        required
      />
      <TextField
        type="date"
        value={form.date}
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
        required
      />
      <TextField
        label="Hours"
        type="number"
        value={form.hours}
        onChange={(e) =>
          setForm({ ...form, hours: e.target.value })
        }
        required
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  );
}
