export type UserRole = 'Admin' | 'User' | 'Owner'
export type OsType = 'Android' | 'IOS'
export type ReleaseType = 'Alpha' | 'Beta'

export type User = {
  id: number
  fullname: string
  os: OsType
  releaseType: ReleaseType
  role: UserRole
  avatar: string
  notes: string
  active: boolean
}
