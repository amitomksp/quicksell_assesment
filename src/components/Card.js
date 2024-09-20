import React from 'react';
import '../App.css';

function Card({ ticket, user }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <span className="user-avatar">{user.name[0]}</span>
      </div>
      <h3 className="card-title">{ticket.title}</h3>
      <div className="card-footer">
        <span className="tag">
          {(ticket.priority>=4)?<img src="/photo/Img - High Priority.svg" alt="Add" className="action-icon" />:""}
          {(ticket.priority>1 &&ticket.priority<=3)?<img src="/photo/Img - Medium Priority.svg" alt="Add" className="action-icon" />:""}
          {(ticket.priority===1)?<img src="/photo/Img - Low Priority.svg" alt="Add" className="action-icon" />:""}
          {(ticket.priority===0)?<img src="/photo/nopriority.svg" alt="Add" className="action-icon" />:""}
        
        {ticket.tag}</span>
      </div>
    </div>
  );
}

export default Card;