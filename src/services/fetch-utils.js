import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_ANON_KEY
);

export async function getBooks() {
  const { data } = await supabase.from('books').select();
  return data;
}

export async function getBook(id) {
  const { data } = await supabase.from('books').select().match({ id }).single();
  return data;
}

export async function insertBook(title, author, year) {
  const { error } = await supabase.from('books')
    .insert({ bookTitle: title, bookAuthor: author, bookYear: year });
  return error;
}

export async function deleteBook(id) {
  const { error } = await supabase.from('books').delete().match({ id });
  return error;
}

export async function updateBook({ id, title, author, year }) {
  const { error } = await supabase.from('books')
    .update({ bookTitle: title, bookAuthor: author, bookYear: year })
    .match({ id });
  return error;
}

export async function createUser(newEmail, newPassword) {
  const { data } = await supabase.auth.signUp({
    email: newEmail,
    password: newPassword,
  });
  console.log(data);
  return data;
}

export async function loginUser(existingEmail, existingPassword) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: existingEmail,
    password: existingPassword,
  });
  console.log(error);
  return data;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  console.log(error);
  return error;
}
