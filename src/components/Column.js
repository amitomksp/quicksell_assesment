import React from 'react';
import Card from './Card';
import '../App.css';


function Column({ title, tickets, users }) {
    const getStatusIcon = () => {
      switch (title.toLowerCase()) {
        case 'todo':
          return 'To-do.svg';
        case 'in progress':
          return 'in-progress.svg';
        case 'done':
          return 'Done.svg';
        case 'canceled':
          return 'Cancelled.svg';
        case 'backlog':
          return 'Backlog.svg';
        case '0':
          return 'nopriority.svg';
        case '1':
          return 'Img - Low Priority.svg';
        case '2':
          return 'Img - Medium Priority.svg';
        case '3':
          return 'Img - High Priority.svg';
        case '4':
          return 'SVG - Urgent Priority colour.svg';
        case 'anoop sharma':
          return <span className="user-avatar">{title[0]}</span>;
        case 'yogesh':
          return <span className="user-avatar">{title[0]}</span>;
        case 'shankar kumar':
          return <span className="user-avatar">{title[0]}</span>;
        case 'ramesh':
          return <span className="user-avatar">{title[0]}</span>;
        case 'suresh':
          return <span className="user-avatar">{title[0]}</span>;
        default: 
          return 'Cancelled.svg';
      }
    };
    const icon = getStatusIcon();
  
    return (
      <div className="column">
        <div className="column-header">
          <div className="column-header-left">
          {typeof icon === 'string' ? (
            <img src={`/photo/${icon}`} alt={`${title} icon`} className="status-icon" />
          ) : (
            icon
          )}
            <h2>{title}</h2>
            <span className="ticket-count">{tickets.length}</span>
          </div>
          <div className="column-header-right">
            <button className="action-button">
              <img src="/photo/add.svg" alt="Add" className="action-icon" />
            </button>
            <button className="action-button">
              <img src="/photo/3 dot menu.svg" alt="More options" className="action-icon" />
            </button>
          </div>
        </div>
        <div className="column-cards">
          {tickets.map(ticket => (
            <Card key={ticket.id} ticket={ticket} user={users.find(user => user.id === ticket.userId)} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Column;