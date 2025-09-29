import { create } from "zustand";

export const usePostsStore = create((set) => ({
  posts: [],
  setPosts: (newPosts) => set({ posts: newPosts }),
}));

export const useUsers = create((set) => ({
  users: [],
  setUsers: (newUsers) => set({ users: newUsers }),
}));

export const useGames = create((set) => ({
  games: [],
  setGames: (newGames) => set({ games: newGames }),
}));

export const useEmail = create((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
}));

export const useSearchChat = create((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
