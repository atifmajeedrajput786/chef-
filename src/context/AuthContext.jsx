import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'chef_users'
const SESSION_KEY = 'chef_session'

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [tokens, setTokens] = useState(200)

  useEffect(() => {
    const email = localStorage.getItem(SESSION_KEY)
    if (email) {
      const found = loadUsers().find((u) => u.email === email)
      if (found) setUser(found)
    }
  }, [])

  function signup({ name, email, password }) {
    const users = loadUsers()
    if (users.some((u) => u.email === email)) {
      return { ok: false, error: 'An account with this email already exists.' }
    }
    const newUser = { name: name || email.split('@')[0], email, password, language: 'English', weeklyMail: true }
    users.push(newUser)
    saveUsers(users)
    localStorage.setItem(SESSION_KEY, email)
    setUser(newUser)
    return { ok: true }
  }

  function login({ email, password }) {
    const users = loadUsers()
    const found = users.find((u) => u.email === email && u.password === password)
    if (!found) {
      return { ok: false, error: 'Invalid email or password.' }
    }
    localStorage.setItem(SESSION_KEY, email)
    setUser(found)
    return { ok: true }
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }

  function updateUser(patch) {
    const users = loadUsers()
    const idx = users.findIndex((u) => u.email === user.email)
    const updated = { ...user, ...patch }
    if (idx >= 0) {
      users[idx] = updated
      saveUsers(users)
    }
    if (patch.email && patch.email !== user.email) {
      localStorage.setItem(SESSION_KEY, patch.email)
    }
    setUser(updated)
  }

  const value = { user, signup, login, logout, updateUser, tokens, setTokens }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
