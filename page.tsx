import TaskManager from '../components/taskmanager.js'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Task Manager - Next.js App</title>
        <meta name="description" content="A beautiful task management application built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TaskManager />
    </>
  )
}
