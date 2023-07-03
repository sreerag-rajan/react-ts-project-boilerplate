export const ROLE = {
  SUPER_ADMIN : "SUPER_ADMIN",
  ADMIN: "ADMIN",
  USER : "USER",
}

// export type IROLE = 'SUPER_ADMIN' | 'ADMIN' | 'USER';a
export type IROLE = keyof typeof ROLE;