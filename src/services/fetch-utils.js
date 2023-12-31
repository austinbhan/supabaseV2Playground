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

export async function getPersonalBooks(user_id) {
  const { data } = await supabase.from('books')
    .select() 
    .match({ user_id });
  return data;
}

export async function getBook(id) {
  const { data } = await supabase.from('books').select().match({ id }).single();
  return data;
}

export async function insertBook(title, author, year) {
  const { error } = await supabase.from('books')
    .insert({ bookTitle: title, 
      bookAuthor: author, 
      bookYear: year,
    });
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
  return data;
}

export async function loginUser(existingEmail, existingPassword) {
  const { data } = await supabase.auth.signInWithPassword({
    email: existingEmail,
    password: existingPassword,
  });

  return data;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  return error;
}

export async function checkUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function checkUserId() {
  const { data: { user } } = await supabase.auth.getUser();
  return user.id;
}
