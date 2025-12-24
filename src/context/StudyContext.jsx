import React, { createContext, useContext, useState } from 'react';

const StudyContext = createContext();

export const useStudy = () => useContext(StudyContext);

export const StudyProvider = ({ children }) => {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      subject: 'Math',
      topic: 'Algebra',
      date: '2025-01-10',
      hours: 2,
      completed: false
    },
    {
      id: 2,
      subject: 'Science',
      topic: 'Physics',
      date: '2025-01-11',
      hours: 1.5,
      completed: true
    }
  ]);

  const addSession = (session) => {
    setSessions(prev => [
      ...prev,
      { ...session, id: Date.now(), completed: false }
    ]);
  };

  const updateSession = (id, updatedData) => {
    setSessions(prev =>
      prev.map(session =>
        session.id === id ? { ...session, ...updatedData } : session
      )
    );
  };

  const toggleCompleted = (id) => {
    setSessions(prev =>
      prev.map(session =>
        session.id === id
          ? { ...session, completed: !session.completed }
          : session
      )
    );
  };

  const deleteSession = (id) => {
    setSessions(prev => prev.filter(session => session.id !== id));
  };

  const hoursBySubject = sessions.reduce((acc, session) => {
    if (session.completed) {
      acc[session.subject] =
        (acc[session.subject] || 0) + Number(session.hours);
    }
    return acc;
  }, {});

  const progressByDate = sessions
    .filter(s => s.completed)
    .reduce((acc, s) => {
      acc[s.date] = (acc[s.date] || 0) + Number(s.hours);
      return acc;
    }, {});

  return (
    <StudyContext.Provider
      value={{
        sessions,
        addSession,
        updateSession,
        toggleCompleted,
        deleteSession,
        hoursBySubject,
        progressByDate
      }}
    >
      {children}
    </StudyContext.Provider>
  );
};