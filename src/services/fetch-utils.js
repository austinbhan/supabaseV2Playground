import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_ANON_KEY
);

export async function getBooks() {
  const { data } = await supabase.from('books').select();
  return data;
}

export async function getBook(id) {
  const { data } = await supabase.from('books').select().match({ id });
  console.log(data);
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
