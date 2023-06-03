'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { api } from '@/lib/api'
import { setStorageItem } from '@/utils/get-storage-item'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { push } = useRouter()

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await api.put('/login', { email, password })
      setStorageItem('user', res.data.token)
      push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="flex items-center justify-center h-screen bg-zinc-950 text-zinc-50">
      <div className="w-full max-w-xs p-4 rounded bg-zinc-800">
        <form onSubmit={handleLogin}>
          <h1 className="mb-3 text-3xl font-bold text-zinc-50">Login</h1>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 px-1 border-2 border-transparent rounded outline-none bg-zinc-900 text-zinc-100 focus:border-blue-600 placeholder:text-zinc-500"
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              className="h-10 px-1 border-2 border-transparent rounded outline-none bg-zinc-900 text-zinc-100 focus:border-blue-600 placeholder:text-zinc-500"
            />
            <button
              type="submit"
              className="h-10 text-sm font-bold transition-colors bg-blue-700 rounded hover:bg-blue-600 active:bg-blue-700"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
