'use client'
import { useState,  } from 'react'
import { useRouter } from 'next/navigation'
import React, { Component } from 'react'
// import PocketBase from 'pocketbase'

interface Todo {
  title: string
  body: string
}

export default function CreateTodo() {
  const [todos, setTodoArr] = useState([] as Todo[])
  const [todo, setTodo] = useState({} as Todo)

  const router = useRouter()
  
  let { title, body } = todo

  const create = async () => {  
    const newTodo = await fetch('http://127.0.0.1:8090/api/collections/todos/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body: todo.body,
      }),
    })
    console.log('zzzz', todo, newTodo)
  }

  const addItem = () => {
    setTodoArr([...todos, todo])
    create
    setTodo({} as Todo)
  }

  return (
    <>
    <form
      className="flex flex-col items-center justify-center w-full h-full bg-black"
      >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={() => setTodo({ title, body })}
        required
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) =>  (body = e.target.value)}
        required 
      />
      <button
        type='submit'
        onClick={addItem}
      >
        Create Todo!
      </button>
      { todos.map((todo, i) => {
          return <p key={i}> {todo.title} </p>;
        }
      )}
    </form>
    </>
  )
}