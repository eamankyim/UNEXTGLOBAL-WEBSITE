// src/components/TaskList.jsx
import React from "react";
import TaskCard from "./TaskCard";
import "./StackedCards.css";

const tasks = [
  {
    title: "Weekly recap meeting",
    isCompleted: true,
    dueDate: "Sept 15 at 15:00",
    tags: ["MEETING"],
    priority: "LOW",
    assignee: { name: "JK", avatar: "" },
  },
  {
    title: "Finalize Q3 Report",
    isCompleted: false,
    dueDate: "Sept 17 at 10:00",
    tags: ["REPORT"],
    priority: "HIGH",
    assignee: { name: "AR", avatar: "" },
  },
  {
    title: "Client presentation prep",
    isCompleted: false,
    dueDate: "Sept 18 at 13:30",
    tags: ["PRESENTATION"],
    priority: "MEDIUM",
    assignee: { name: "MB", avatar: "" },
  },
  {
    title: "Update website banner",
    isCompleted: true,
    dueDate: "Sept 14 at 11:00",
    tags: ["DESIGN"],
    priority: "LOW",
    assignee: { name: "KM", avatar: "" },
  },
  {
    title: "Team stand-up meeting",
    isCompleted: false,
    dueDate: "Sept 16 at 09:00",
    tags: ["MEETING"],
    priority: "LOW",
    assignee: { name: "HS", avatar: "" },
  },
  {
    title: "Backup database",
    isCompleted: false,
    dueDate: "Sept 19 at 18:00",
    tags: ["MAINTENANCE"],
    priority: "HIGH",
    assignee: { name: "LN", avatar: "" },
  },
];

const TaskList = () => {
  return (
    <div className="stacked-container">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="stacked-card-wrapper"
          style={{
            top: `${index * 8}px`,
            zIndex: tasks.length - index,
          }}
        >
          <TaskCard {...task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
