'use client'

import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'
import { useAuth } from '@/lib/auth-context'

export function RegisterForm({ actionClass }: { actionClass: string }) {
  const router = useRouter()
  const { signup, isLoading } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [intent, setIntent] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password) return
    await signup(name.trim(), email.trim(), password)
    router.push('/')
    router.refresh()
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
        placeholder="Full name"
        autoComplete="name"
      />
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
        placeholder="Email address"
        type="email"
        autoComplete="email"
      />
      <input
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
        placeholder="Password"
        type="password"
        autoComplete="new-password"
      />
      <input
        value={intent}
        onChange={(e) => setIntent(e.target.value)}
        className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
        placeholder="What are you creating or publishing?"
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold disabled:opacity-60 ${actionClass}`}
      >
        {isLoading ? 'Creating account…' : 'Create account'}
      </button>
    </form>
  )
}
