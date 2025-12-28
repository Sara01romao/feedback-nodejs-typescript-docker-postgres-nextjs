'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = await cookies(); 
 

  cookieStore.delete('token');
  cookieStore.delete('session');
  cookieStore.delete('refreshToken');
  
  redirect('/login');
}