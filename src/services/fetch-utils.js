import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_ANON_KEY
);

export async function getBooks() {
  const { data, error } = await supabase.from('books').select();
  return { data, error };
}

export async function getBook(id) {
  const { data, error } = await supabase
    .from('books').select().match({ id }).single();
  return { data, error };
}

export async function insertBook(title, author, year) {
  const { data, error } = await supabase.from('books')
    .insert({ bookTitle: title, bookAuthor: author, bookYear: year });
  return { data, error } ;
}

export async function deleteBook(id) {
  const { data, error } = await supabase.from('books').delete().match({ id });
  return { data, error };
}

export async function updateBook({ id, title, author, year }) {
  const { data, error } = await supabase.from('books')
    .update({ bookTitle: title, bookAuthor: author, bookYear: year })
    .match({ id });
  return { data, error };
}

export async function createUser(newEmail, newPassword) {
  const { data, error } = await supabase.auth.signUp({
    email: newEmail,
    password: newPassword,
  });
  return { data, error };
}

export async function loginUser(existingEmail, existingPassword) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: existingEmail,
    password: existingPassword,
  });
  return { data, error };
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  return error;
}

export async function checkUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
