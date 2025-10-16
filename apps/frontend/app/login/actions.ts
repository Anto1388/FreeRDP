'use server';

export async function loginEmail(formData: FormData) {
  const email = String(formData.get('email'));
  const type = String(formData.get('type'));
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'}/api/users/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email, type }),
  });
  return res.json();
}
