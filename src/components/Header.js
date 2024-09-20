import React, { useState } from 'react';
import '../App.css';

function Header({ onDisplayChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  const handleGroupingChange = (e) => {
    const newGrouping = e.target.value;
    setGrouping(newGrouping);
    onDisplayChange(newGrouping, sorting);
  };

  const handleSortingChange = (e) => {
    const newSorting = e.target.value;
    setSorting(newSorting);
    onDisplayChange(grouping, newSorting);
  };
       
  return (
    <header className="header">
      <button onClick={() => setIsOpen(!isOpen)} className="display-button">
      <img
          src="/photo/Display.svg"
          alt="Before Display Icon"
          className="icon-before"
        />
        Display
        <img
          src="/photo/down.svg"
          alt="After Display Icon"
          className="icon-after"
        />
      </button>
      {isOpen && (
        <div className="display-form">
          <div className='option-line'>
            <label htmlFor="grouping">Grouping</label>
            <select
              id="grouping"
              value={grouping}
              onChange={handleGroupingChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className='option-line'>
            <label htmlFor="sorting">Ordering</label>
            <select
              id="sorting"
              value={sorting}
              onChange={handleSortingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;