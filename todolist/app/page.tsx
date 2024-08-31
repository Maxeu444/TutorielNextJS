'use client'
import { useState, useEffect } from "react";

import Header from "@/components/Header";
import AddTask from "@components/AddTask";
import { Flex } from "@chakra-ui/react";
import { ITask } from "@types";
import NoTask from "@components/NoTask";
import Task from "@components/Task";
import Loading from "@components/Loading";

export default function Home() {
  const [task, setTask] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [allTasks, setAllTasks] = useState([])

  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: 'POST',
        body: JSON.stringify({ task: task }),
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      });
      if (response.ok) {
        setTask('');
        fetchTasks();
      } else {
        console.log('Error creating task');
      }
    } catch (error) {
      console.log('Error:', error);
    }
    setIsLoading(false);
  }

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all", {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setAllTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching tasks:", error);
      setIsLoading(false);
    }
  }

  const handleCompleteTask = async(id: string) => {
    try {
      const response = await fetch(`/api/task/complete/${id}`, {
        method: "PATCH",
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      });
      if(response.ok){
        await fetchTasks();  // Recharger les tâches après la mise à jour
      } else {
        console.log("Error completing task");
      }
    } catch (error) {
      console.log("Error completing task:", error);
    }
  }

  const handleDeleteTask = async(id: string) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE",
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      });
      if(response.ok) {
        setAllTasks((prevTasks) => prevTasks.filter((task: ITask) => task._id !== id));
      } else {
        console.log("Error deleting task");
      }
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  }

  useEffect(() => {
    fetchTasks();  // Charger les tâches au montage du composant
  }, []);

  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask} />
      {isLoading ? (
        <Loading />
      ) : (
        <Flex direction="column" p="2rem">
          {allTasks.length > 0 ? (
            allTasks.map((individualTask: ITask) => (
              <Task key={individualTask._id}  individualTask={individualTask} handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask}/>
            ))
          ) : (
            <NoTask />
          )}
        </Flex>
      )}
    </>
  );
}
