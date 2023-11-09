import React from 'react';
import Note from './test';

const Memos = () => {
  const notes = [
    {
      id: 1,
      title: 'Good Monday',
      body: 'Ut etiam sit amet nisl purus in mollis nunc. Non diam phasellus vestibulum lorem sed. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Egestas congue quisque egestas diam in',
      createdAt: '2023-11-06',
    },
    {
      id: 2,
      title: 'Bad Tuesday',
      body: 'Aliquam faucibus purus in massa tempor nec feugiat. Lectus quam id leo in vitae turpis massa. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Ut venenatis tellus in metus vulputate eu scelerisque felis.',
      createdAt: '2023-11-07',
    },
    {
      id: 3,
      title: 'Nice Wednesday',
      body: 'Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Porttitor massa id neque aliquam vestibulum morbi. Malesuada fames ac turpis egestas sed tempus urna. ',
      createdAt: '2023-11-07',
    },
  ];

  return (
    <div className="container">
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
        />
      ))}
    </div>
  );
};

export default Memos;
