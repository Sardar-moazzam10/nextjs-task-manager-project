"use client"
import { useState, useEffect } from 'react'
import { Plus, Trash2, Check, Clock, Star } from 'lucide-react'

export default function TaskManager() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [filter, setFilter] = useState('all')

    // Load tasks from localStorage on component mount
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks))
        }
    }, [])

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = () => {
        if (newTask.trim()) {
            const task = {
                id: Date.now(),
                text: newTask,
                completed: false,
                priority: 'medium',
                createdAt: new Date().toLocaleDateString()
            }
            setTasks([...tasks, task])
            setNewTask('')
        }
    }

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const togglePriority = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {
                ...task,
                priority: task.priority === 'high' ? 'medium' : 'high'
            } : task
        ))
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed
        if (filter === 'completed') return task.completed
        return true
    })

    const stats = {
        total: tasks.length,
        completed: tasks.filter(t => t.completed).length,
        active: tasks.filter(t => !t.completed).length
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Task Manager</h1>
                    <p className="text-gray-600">Stay organized and productive</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                        <div className="text-sm text-gray-500">Total Tasks</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
                        <div className="text-sm text-gray-500">Completed</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-orange-600">{stats.active}</div>
                        <div className="text-sm text-gray-500">Active</div>
                    </div>
                </div>

                {/* Add Task */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add a new task..."
                            className="input flex-1 px-4 py-2 border  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            onKeyPress={(e) => e.key === 'Enter' && addTask()}
                        />
                        <button
                            onClick={addTask}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        >
                            <Plus size={20} />
                            Add
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex gap-2 mb-6">
                    {['all', 'active', 'completed'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === f
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                }`}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Tasks List */}
                <div className="space-y-3">
                    {filteredTasks.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            <Clock size={48} className="mx-auto mb-4 opacity-50" />
                            <p>No tasks yet. Add one above to get started!</p>
                        </div>
                    ) : (
                        filteredTasks.map(task => (
                            <div
                                key={task.id}
                                className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition-all hover:shadow-md ${task.completed ? 'opacity-60' : ''
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 flex-1">
                                        <button
                                            onClick={() => toggleTask(task.id)}
                                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${task.completed
                                                ? 'bg-green-500 border-green-500 text-white'
                                                : 'border-gray-300 hover:border-green-500'
                                                }`}
                                        >
                                            {task.completed && <Check size={16} />}
                                        </button>
                                        <div className="flex-1">
                                            <div className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'
                                                }`}>
                                                {task.text}
                                            </div>
                                            <div className="text-sm text-gray-500 mt-1">
                                                Created: {task.createdAt}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => togglePriority(task.id)}
                                            className={`p-2 rounded-lg transition-colors ${task.priority === 'high'
                                                ? 'bg-yellow-100 text-yellow-600'
                                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                                                }`}
                                            title={task.priority === 'high' ? 'High Priority' : 'Normal Priority'}
                                        >
                                            <Star size={16} />
                                        </button>
                                        <button
                                            onClick={() => deleteTask(task.id)}
                                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className="text-center mt-5 text-gray-500 text-sm">
                    Built with Next.js • Stay productive
                    <div>All right reserved @Sardar-Moazza </div>
                </div>
            </div>
        </div>
    )
}